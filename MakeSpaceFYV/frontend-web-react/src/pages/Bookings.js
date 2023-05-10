import { useEffect, useState } from "react";
import axios from "axios";
import { API_CUST_GET, API_PROPCUST_GET } from "../apis/apis";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import HeaderIn from "../components/HeaderIn";

function Bookings() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState();
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState([]);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  let navigate = useNavigate();

  const GetCookie = () => {
    return [Cookies.get("tokenCust"), Cookies.get("phoneCust")];
  };

  useEffect(() => {
    setLoading(true);
    // console.log("aa")
    const f = async() => {
      await delay(1000);
    const session = GetCookie();
    // console.log(session);
    const phone = session[1];
    if (session[1] === undefined) {
      console.log(session[1]);
      navigate("/customer");
    } else {
        // console.log(phone);
        axios.post(`${API_CUST_GET}`, { phone })
        .catch((error) => {
          console.log(error);
        })
        .then((res) => {
          setUser(res.data);
          const d = res.data.pincode;
          // console.log(d);
          axios.post(`${API_PROPCUST_GET}`, { pincode: d }).then((res) => {
            setProperties(res.data);
            // console.log(res.data);
          });
        });
    }
    setLoading(false);
  }
  f();
  }, []);
  return (
    <>
      <HeaderIn></HeaderIn>
      {loading?
      <center><div className='loadingSpinner'></div></center>
      :null}
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
