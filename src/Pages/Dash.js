import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo2.png";

export default function Dash() {
  return (
    <div className="home">
      <h1 style={{ color: "GrayText", textAlign: "center" }}>
        Welcome To Ritify.
      </h1>
      <div className="text-center">
        <img
          src={logo}
          alt="logo"
          style={{ height: "200px", width: "200px" }}
        ></img>
      </div>
      <br />
      <div
        style={{
          backgroundImage: `url(require("/blast.jpg"))`,
          height: "600px",
        }}
      >
        <Link to="/Player1.0">
          <div style={{ padding: "2px", textAlign: "center" }}>
            <button
              type="button"
              class="btn btn-outline-warning btn-lg"
              data-toggle="tooltip"
              data-placement="top"
              title="CLICK TO OPEN LAPTOP VERSION!!"
            >
              WEB VERSION
            </button>
          </div>
        </Link>
        <br />
        <Link to="/Player2.0">
          <div style={{ padding: "2px", textAlign: "center" }}>
            <button
              type="button"
              class="btn btn-outline-success btn-lg"
              data-toggle="tooltip"
              data-placement="top"
              title="CLICK TO OPEN MOBILE VERSION!!"
            >
              MOBILE VERSION (BETA_1.0)
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
