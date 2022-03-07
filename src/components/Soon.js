import React, { Component } from "react";
import "./sooncss.css";
import logo from "../Pages/logo2.png";

export default class Soon extends Component {
  render() {
    return (
      <div className="cardtop">
        <div className="header">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              style={{ height: "200px", width: "200px" }}
            ></img>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p><b>
              New Optimised Music Player coming soon. Please check back to know more. Shoot us
              an email if you're curious.</b>
            </p>
          </div>
          <a href="mailto:riteshm2099@gmail.com">
            <div className="cta">Send us an email</div> 
          </a>
        
        </div>
      </div>
    );
  }
}
