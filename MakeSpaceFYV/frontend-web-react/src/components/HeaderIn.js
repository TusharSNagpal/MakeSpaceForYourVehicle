import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'
function HeaderIn() {
    const logout = () => {
        Cookies.remove('phoneCust')
        Cookies.remove('tokenCust')
    }
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
                <Link to='/customer ' onClick={logout}>
                    <FaUser /> LOGOUT
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default HeaderIn