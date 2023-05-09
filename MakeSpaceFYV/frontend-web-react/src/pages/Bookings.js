import { useEffect, useState } from "react";
import axios from "axios";
import { API_CUST_GET, API_PROPCUST_GET } from "../apis/apis";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Bookings() {
  const [phone, setPhone] = useState();
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState([]);

  let navigate = useNavigate();

  const GetCookie = () => {
    return [Cookies.get("tokenCust"), Cookies.get("phoneCust")];
  };

  useEffect(() => {
    const session = GetCookie();
    // console.log(session);
    const phone = session[1];
    if (session[1] === undefined) {
      // console.log(session[1]);
      navigate("/customer");
    } else {
      try {
        // console.log(phone);
        axios.post(`${API_CUST_GET}`, { phone }).then((res) => {
          setUser(res.data);
          const d = res.data.pincode;
          // console.log(d);
          axios.post(`${API_PROPCUST_GET}`, { pincode: d }).then((res) => {
            setProperties(res.data);
            // console.log(res.data);
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <>
      <section className="heading">
        <p>Available Parking Slots, {user.pincode}</p>
      </section>
      {properties.map((data) => {
        return (
          <div className="goals">
            <div className="goal">
              <label className="margin-set">Parking Address: {data.prop_address}</label>
              <label className="margin-set">Slots: {data.slots}</label>
              {/* <br></br> */}
              <button
                className="btn1"
                onClick={() => {
                  console.log("rr")
                  navigate("/bookingSlot", {state : {
                    user: user,
                    slotDetails: data
                  }});
                }}
              >
                BOOK
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Bookings;
