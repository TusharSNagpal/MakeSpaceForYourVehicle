import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Owner from './Owner'
import {Link} from 'react-router-dom'
import { API_CUST_LOGIN } from '../apis/apis'
import axios from 'axios'
import Cookies from "js-cookie";

function Customer() {
    let navigate = useNavigate();
    useEffect(()=>{
      let cookieData = GetCookie();
      // console.log(cookieData)

      if(cookieData[0] !== undefined && cookieData[1] !== undefined){
        navigate('/bookings');
      }
    },[])

    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    const onChangePhone = (event) => {
        setPhone(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const redirectTo = () => {
      navigate("/customerRegister");
    }

    const onSubmit = async() => {
      const credentials = {phone, password};
      try{
        axios.post(`${API_CUST_LOGIN}`, credentials)
        .then((res)=>{
          console.log(res.data);
          SetCookie(res.data);
        })
        // console.log(res);
        navigate('/bookings')
      }
      catch(error){
        console.log(error);
        alert('Incorrect Phone Number/Password');
      }
    }

    //setting token and user phone number in cookies:
    const SetCookie = (data) => {
      Cookies.set("tokenCust", data.token, {
        expires: 7,
      });
      Cookies.set("phoneCust", data.phone, {
        expires: 7,
      });
    };

    // Method to get data from cookies
    const GetCookie = () => {
      return [Cookies.get("tokenCust"), Cookies.get("phoneCust")];
    };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Customer Login
        </h1>
        <p>Make Space For Your Vehicle</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='tel'
              className='form-control'
              id='phone'
              value={phone}
              placeholder='Enter your phone number'
              onChange={onChangePhone}
            />
          </div>
          <div className='form-group'>
            <input
              required
              type='password'
              className='form-control'
              id='password'
              value={password}
              placeholder='Enter password'
              onChange={onChangePassword}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
          <div>
            <p>Don't have an account?</p>
            <center>
              <button onClick={redirectTo} className='btn'>
                Register
              </button>
            </center>
          </div>
      </section>
      </>
  )
}

export default Customer