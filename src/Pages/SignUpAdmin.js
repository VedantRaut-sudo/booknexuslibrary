import React from "react";
import "./styleforlogin.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../config/firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import adinlogin from "../Assets/pexels-berti-weber-2404185.jpg";
const SignUpAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securityKey, setSecurityKey] = useState("");
  const NAVIGATE = useNavigate();
  console.log(email, password);
  const SignUp = async () => {
    if (securityKey === "vedant") {
      await createUserWithEmailAndPassword(auth, email, password).then(() => {
        console.log("Login");
        NAVIGATE("/");
      });
    } else {
      console.log("wrong key");
      alert("wrong key");
    }
    console.log(auth.currentUser.email);
  };
  return (
    <div>
      <div className="loginpage">
        <div className="loginimgwrap">
          <img className="imglogin" src={adinlogin} alt="" />
        </div>
        <div className="login">
          <div className="loginwrap_forsignup">
            <h1 className="signupadminheading">SignUp admin</h1>
            <div className="label_signup">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email"
              />
            </div>
            <div className="label_signup">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="label_signup">
              <label htmlFor="pass">Security Key</label>
              <input
                type="password"
                onChange={(e) => {
                  setSecurityKey(e.target.value);
                }}
                placeholder="Enter Security Key"
              />
            </div>
            <button className="loginbtn" onClick={SignUp}>Sign In</button>
            <p className="newaccount">
                Already have an account? 
                <Link to={"/loginforadmin"}> Sign in as Admin</Link>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpAdmin;
