import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import { auth } from '../../config/firebase';
import unknownuser from '../../Assets/account.png'
const index = ({ isAuth }) => {
  return (
    <div className='navbar'>


      <nav>
        <div className="left">
          <Link className='link' to={'/'}>
            <h1 className='logo'>BookNexus</h1>
          </Link>
        </div>
        <div className="right">
          {isAuth ? (<img className='authuserphoto' src={auth.currentUser.photoURL} alt="" />) : <ul>

            <li>

              <Link className='btn_for_nav' to={'/dashboard'}>
                Admin
                </Link>
            </li>
            <li>
              <Link className='link_for_list'  to={'/login'}>
                <img  className='unknownuser' src={unknownuser} alt="" />
              </Link>

            </li>
            <div className="mobile_login_btn">
            </div>
          </ul>

          }
        </div>
        <div className="right_for_mobile">
          <Link className='login_mobile_link' to={'/login'}>
            {isAuth ? (
              (<img className='unknownuser' src={auth.currentUser.photoURL} alt="" />)

            ) : <img className='unknownuser' src={unknownuser} alt="" />
            }
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default index
