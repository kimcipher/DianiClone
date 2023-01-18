import React from "react";
import "./text.css";
import Logo from "../assets/logosmall.png";

function Preloader() {
  return (
    <>
      <div className="">
        <h2 style={{ marginTop: "45vh" }}>
          {" "}
          <br />
          Diani App
        </h2>
        <p style={{backgroundColor:"transparent", color:"#fff", textDecoration:"none"}}>Deliveries Bookings Anything Anytime 24/7</p>
      </div>
    </>
  );
}

export default Preloader;
