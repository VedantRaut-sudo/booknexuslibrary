import React from "react";
import "./styleforlogin.css";
import { useState } from "react";
import adinlogin from "../Assets/pexels-karolina-grabowska-4218706.jpg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, googleprovider } from "../config/firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminLogin = ({ setAdminAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const NAVIGATE = useNavigate();

  console.log(email, password);
  const login = async () => {
    if (email === "admin@gmail.com") {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        console.log("Login");
        setAdminAuth(true);
        NAVIGATE("/dashboard");
      });
    } else {
      alert("you are not a valid user");
      console.log("you are not valid user");
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
          <div className="loginwrap">
            <div className="adminloginglass">
              <h1 className="mainlogintag">Admin Sign In</h1>

              <div className="label">
                <label htmlFor="email">Enter Email</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="email"
                />
              </div>
              <div className="label">
                <label htmlFor="pass">Enter Password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="password"
                />
              </div>
              <button className="loginbtn" onClick={login}>Sign In</button>
              <p className="newaccount">
                Want to create a new account? 
                <Link to={"/signupforadmin"}> Sign up as Admin</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
