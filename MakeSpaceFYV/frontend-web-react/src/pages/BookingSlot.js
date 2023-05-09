import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_NEW_BOOKING } from "../apis/apis";
import { useNavigate } from "react-router-dom";

function BookingSlot() {
  let navigate = useNavigate();
  const location = useLocation();
  const [vehicle, setVehicle] = useState('');
  const user = location.state.user;
  const slotDetails = location.state.slotDetails;
  useEffect(() => {
    console.log(user);
    console.log(slotDetails);
  });

  const handlePayment = () => {
    if(vehicle === ''){
      alert(`Enter Your Vehicle's Registration Number First!`)
      return;
    }
    else{
      const data = {
          prop_id: slotDetails._id,
          owner_id: slotDetails.owner_id,
          customer_id: user._id,
          vehicle_reg_no: vehicle,
        };
        console.log(data);
        try{
          axios.post(`${API_NEW_BOOKING}`, data)
          .then((res)=>{
            console.log(res);
            alert('Payment Successful! Thanks.')
            navigate('/viewBookings', {state:{user:user}});
          });
        }
        catch{
          alert('No more slots left. Please see other parking locations in your area. Thanks!');
          navigate('/bookings');
        }
      }
  }
  return (
    <div>
      <section className="heading">
        <p>Book Your Slot at {slotDetails.prop_address}</p>
      </section>
      <div className="goal">
        <p>Customer Name: {user.name}</p>
        <p>Phone Number: {user.phone}</p>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="vehicle"
          value={vehicle}
          placeholder="Enter your Vehicle Registration Number"
          onChange={(event) => setVehicle(event.target.value)}
        />
      </div>
      <section>
        <h1>Hurry Up! You may loose your slot..!</h1>
      </section>
      <br></br>
      <button className='btn1' onClick={handlePayment}> Pay $100</button>
    </div>
  );
}

export default BookingSlot;
