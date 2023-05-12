import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_CURR_BOOKING, API_NEW_BOOKING ,API_END_BOOKING} from "../apis/apis";
import { useNavigate } from "react-router-dom";
import HeaderIn from "../components/HeaderIn";

function ViewBooking() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const [bookings, setBookings] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const toggle = () => {
    if(refresh)
        setRefresh(false);
    else
        setRefresh(true);
  }

  useEffect(()=>{
    setLoading(true);
    const customer_id = user._id;
        // if(bookings.length()>0){
            axios.post(`${API_CURR_BOOKING}`, {customer_id})
            .then((res)=>{
                // if(res.status === 400){
                //     setBookings([]);
                // }
                // else
                if(res.status!==400)
                    setBookings(res.data);
                setLoading(false);
            })
            .catch((err)=>{
                setBookings([]);
                setLoading(false);
            })
        // }
        },[refresh])

  const handleRemPayment = (_id, price) => {
    setLoading(true);
    console.log(_id)
    // console.log(price);
        axios.put(`${API_END_BOOKING}`, {_id, price})
        .catch((err)=>{
            console.log(err);
            alert('Payment Unsuccessful. Please try again');
            setLoading(false);
        })
        .then((res)=>{
            console.log(res);
            alert('Payment Successful.');
            toggle();
            setLoading(false);
        })
  }

  const view = () => {
    navigate('/viewBookings', {state : {user:user}});
  }

  const pastBookings = () => {
    navigate('/pastBookings', {state: {user:user}});
  }
  
  return (
    <div>
        <HeaderIn view={view} pastBookings={pastBookings}></HeaderIn>
        {loading?<center><div className="loadingSpinner"></div></center>:null}
      <section className="heading">
        <p>Dear {user.name}, Here are your Ongoing Bookings:</p>
      </section>

      {bookings.map((data) => {
        return (
          <div className="goals">
            <div className="goal">
              <label className="margin-set">Parking Address: {data._doc.prop_address}</label>
              <label className="margin-set">Vehicle Registration Number: {data._doc.vehicle_reg_no}</label>
              {/* <br></br> */}
              <button
                className="btn1"
                onClick={() => {
                  handleRemPayment(data._doc._id, data.price);
                }}
              >
                PAY REMAINING AMOUNT ${data.price}
              </button>
            </div>
          </div>
        );
      })}
      <br></br>
      {bookings.length === 0 ? 
        <h1>You don't have any ongoing bookings.</h1>
        :null
      }
    </div>
  );
}

export default ViewBooking;
