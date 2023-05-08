import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { useState, useEffect } from 'react'

function Owner() {
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    const onChangePhone = (event) => {
        setPhone(event.target.value);
        console.log(phone);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onSubmit = () => {

    }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Owner Login
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

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>

          <div>
            <p>Don't have an account?</p>
            <center>
                <button className='btn'>Register</button>
            </center>
          </div>
        </form>
      </section>
    </>
  )
}

export default Owner