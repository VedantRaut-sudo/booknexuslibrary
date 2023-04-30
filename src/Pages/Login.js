import React from "react";
import './styleforlogin.css'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleprovider } from "../config/firebase";
import { Link } from "react-router-dom";
import loginimg from '../Assets/pexels-karolina-grabowska-4218706.jpg'
const Login = ({setIsAuth}) => {
  const NAVIGATE = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleprovider).then(() => {
      NAVIGATE("/");
      setIsAuth(true);
    });
  };
 
  const handlelinktoadminlogin=()=>{
    NAVIGATE('/loginforadmin')
  }
  return (
    <div>
      {/* get Login
      <div className="login_wrap">
        <button onClick={loginWithGoogle}>Sign up with Google</button>
        <Link to={'/loginforadmin'}>adminlogin</Link>
      </div> */}
       <div className="loginpage">
      <div className="loginimgwrap">
        <img className="imglogin" src={loginimg} alt="" />
      </div>
      <div className="login">
        <div className="loginwrap">
          <h1 className="mainlogintag">Discover the power of reading today.</h1>
          <h5 className="mainloginslogan">Connect. Discover. Learn.</h5>
          <div className="btn2">

          <button className="button-50" onClick={loginWithGoogle}>Sign in with Google</button>
          <button className="btntoalready button-50" onClick={handlelinktoadminlogin}>Login as Admin</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
