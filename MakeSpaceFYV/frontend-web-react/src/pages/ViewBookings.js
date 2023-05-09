import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_CURR_BOOKING, API_NEW_BOOKING ,API_END_BOOKING} from "../apis/apis";
import { useNavigate } from "react-router-dom";

function ViewBooking() {
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
    const customer_id = user._id;
    try{
        axios.post(`${API_CURR_BOOKING}`, {customer_id})
        .then((res)=>{
            console.log(res.data)
            setBookings(res.data);
        })
    }
    catch(error){
        console.log(error);
    }
  },[refresh])

  const handleRemPayment = (_id) => {
    console.log(_id)
    try{
        axios.put(`${API_END_BOOKING}`, {_id})
        .then((res)=>{
            console.log(res);
            alert('Payment Successful.');
            toggle();
        })
    }
    catch{
        alert('Payment Unsuccessful. Please try again');
    }
  }
  
  return (
    <div>
      <section className="heading">
        <p>Dear {user.name}, Here are your Ongoing Bookings:</p>
      </section>

      {bookings.map((data) => {
        return (
          <div className="goals">
            <div className="goal">
              <label className="margin-set">Parking Address: {data.prop_address}</label>
              <label className="margin-set">Vehicle Registration Number: {data._doc.vehicle_reg_no}</label>
              {/* <br></br> */}
              <button
                className="btn1"
                onClick={() => {
                  handleRemPayment(data._doc._id);
                }}
              >
                PAY REMAINING AMOUNT ${data.price}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ViewBooking;
