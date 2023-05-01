import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import { auth } from '../../config/firebase';
import unknownuser from '../../Assets/account.png'
import { signOut } from 'firebase/auth';
const index = ({ isAuth, setIsAuth, adminAuth, setAdminAuth }) => {
  const signout = () => {
    signOut(auth).then(() => {
      console.log("user sign out")
      setIsAuth(false)
      setAdminAuth(false)
    })
  }
  return (
    <div className='navbar'>
  <nav>
        <div className="left">
          <Link className='link' to={'/'}>
            <h1 className='logo'>BookNexus</h1>
          </Link>
        </div>
        <div className="right">
          {isAuth? (
            <div className='centerdiv'>

              <Link className='btn_for_nav' to={'/dashboard'}>
                Admin
              </Link>
              <img onClick={signout} className='authuserphoto' src={auth.currentUser.photoURL} alt="" />
            </div>
          ) : <ul>

            <li>

              <Link className='btn_for_nav' to={'/dashboard'}>
                Admin
              </Link>
            </li>
            <li>
              <Link className='link_for_list' to={'/login'}>
                <img className='unknownuser' src={unknownuser} alt="" />
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
