import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Owner from './Owner'

function CustomerRegister() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [pincode, setPincode] = useState();
    const [password, setPassword] = useState();

    const onChangeName = (event) => {
      setName(event.target.value);
      console.log(phone);
    }

    const onChangePhone = (event) => {
        setPhone(event.target.value);
        console.log(phone);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangePincode = (event) => {
      setPincode(event.target.value);
    }

    const onChangeAddress = (event) => {
      setAddress(event.target.value);
    }

    const onChangeConfirmPass = (event) => {
      setConfirmPass(event.target.value);
    }

    const onSubmit = () => {
        
    }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Customer- Create new account
        </h1>
        <p>Make Space For Your Vehicle</p>
      </section>

      <section className='form'>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your name'
              onChange={onChangeName}
            />
          </div>
          <div className='form-group'>
            <input
              type='tel'
              className='form-control'
              placeholder='Enter your phone number'
              onChange={onChangePhone}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your address'
              onChange={onChangeAddress}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='121001'
              onChange={onChangePincode}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
              onChange={onChangePassword}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Re-enter password'
              onChange={onChangeConfirmPass}
            />
          </div>
        </form>
        <div className='form-group'>
          <button className='btn btn-block'>
            Submit
          </button>
        </div>
        <div>
          <p>Already have an account?</p>
          <center>
            <button onClick = {navigate('/customer')} className='btn'>Login</button>
          </center>
        </div>
      </section>
      </>
  )
}

export default CustomerRegister