import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Owner from './Owner'
import {Link} from 'react-router-dom'

function Customer() {
    let navigate = useNavigate();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    const onChangePhone = (event) => {
        setPhone(event.target.value);
        console.log(phone);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const redirectTo = () => {
      console.log('pushing')
      navigate("/customerRegister");
    }

    const onSubmit = () => {

    }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Customer Login
        </h1>
        <p>Make Space For Your Vehicle</p>
      </section>

      <section className='form'>
        <form>
          <div className='form-group'>
            <input
              type='tel'
              className='form-control'
              id='phone'
              name='phone'
              value={phone}
              placeholder='Enter your phone number'
              onChange={onChangePhone}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChangePassword}
            />
          </div>
        </form>
        <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
          <div>
            <p>Don't have an account?</p>
            <center><button onClick={redirectTo} className='btn'>
              Register
            </button></center>
          </div>
      </section>
      </>
  )
}

export default Customer