import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function HeaderIn() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>AutoSpot</Link>
        </div>
        <ul>
            <li>
                CUSTOMER
            </li>
            <li>
                <Link to='/customer'>
                    <FaUser /> LOGOUT
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default HeaderIn