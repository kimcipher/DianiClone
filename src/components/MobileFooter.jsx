import React, { useState } from "react";
import "./css/footer.css";
import Nai from "./assets/nAIROBI-ART.png";
import Logo from "./assets/logosmall.png";
import {
  amazon,
  uber,
  bookingcom,
  justEat,
  jumialogo,
  lalologo,
} from "./icons";
import WalletConnect from "./WalletConnect";

const MobileFooter = ({ setItIsOpen }) => {
  const currentDate = new Date().getFullYear();

  const clicked = () => {
    setItIsOpen(true);
    console.log("clicked");
  };
  return (
    <div className="foot-container">
      <p>
        <a href="/how-it-works"> HOW IT WORKS ❓</a>{" "}
      </p>
      <p>
        <WalletConnect />
      </p>

      <p>
        <br />
        <br />
        <img src={Logo} alt="logo" height={"15px"} /> DianiApp &trade; is a partner-based dApp <br />
        <p
          onClick={clicked}
          style={{ color: "#fff", marginBottom: "-25px" }}
        >
          {" "}
          <span style={{ color: "#fff" }}>Within</span>{" "}
          <span style={{ textTransform: "uppercase", color: "#ff99ff" }}>
            LaLo Communitites
          </span>
        </p>{" "}
        <br /> 
        <span style={{ color: "#fff" }}> ecosystem. DianiApp is a</span>{" "}
        <br />
        Web3+Blockchain powered
        <br />
        Bookings & Deliveries
        <br />
        dApp for Anything. Anytime.
        <br /> A mashup of ....
        <br />
        <br />
      </p>
      <p style={{ marginBottom: "-15px" }}>{jumialogo}</p>
      <p>
        {amazon} &nbsp; &nbsp; {uber} &nbsp; &nbsp;
        {bookingcom}&nbsp; &nbsp; {justEat}
      </p>

      <p>Serving small communities 🌎.</p>
      <p>
        <img
          src={Nai}
          alt="src alt"
          width="250px"
          style={{ marginBottom: "-10px" }}
        />
      </p>

      <p>&copy; {currentDate} DianiApp. All Rights Reserved</p>
    </div>
  );
};

export default MobileFooter;
