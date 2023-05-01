import React from "react";
import './styleforlogin.css'
import {

  signInWithPopup,
  
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleprovider } from "../config/firebase";
import loginimg from '../Assets/pexels-karolina-grabowska-4218706.jpg'
const Login = ({setIsAuth}) => {
  const NAVIGATE = useNavigate();
  const loginWithGoogle =async () => {
  await  signInWithPopup(auth, googleprovider).then(() => {
      NAVIGATE("/");
      setIsAuth(true);
    });
  };
 
  const handlelinktoadminlogin=()=>{
    NAVIGATE('/loginforadmin')
  }
  return (
    <div>
      
       <div className="loginpage">
      <div className="loginimgwrap">
        <img className="imglogin" src={loginimg} alt="" />
      </div>
      <div className="login">
        <div className="loginwrap">
          <h1 className="mainlogintag">Open a book, unlock new worlds.</h1>
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
