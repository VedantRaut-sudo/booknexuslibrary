import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="upperfooter">
        <div className="section">
          <h3>About</h3>

          <ul>
            <li>Contact US</li>

            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="section">
          <h3>Support</h3>
          <ul>
            <li>Complaint</li>

            <li>Term's & Condition</li>
          </ul>
        </div>
        <div className="section">
          <h3>Library Timing</h3>
          <ul>
            <li>Timings: 10 AM - 6 PM (Mon - Sat)</li>
            <li>Call: +91 6260207329</li>
            <li>E-Mail: booknx@gmail.com</li>
          </ul>
        </div>
        <div className="section">
          <h3>Request</h3>
          <ul>
            <li>
              To add new book kindly email us with you recommended book names.
            </li>
          </ul>
        </div>
      </div>
      <div className="lowerfooter">
        <div className="leftfooter">
          <div className="socialmedia">
            <img
              className="socialimg"
              src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
              alt=""
            />
            <img
              className="socialimg"
              src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"
              alt=""
            />
            <img
              className="socialimg"
              src="https://cdn-icons-png.flaticon.com/128/1384/1384017.png"
              alt=""
            />
          </div>
        </div>
        <div className="centerfooter">
          <h3>© BOOKNEXUS</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
