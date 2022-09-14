import React from "react";
import "./css/pop.css";
import Vector from "./assets/Vector";

const Pop = ({ setIsOpen }) => {
  return (
    <div className="main-pop">
      <div className="popup-main">
        <div className="close" onClick={() => setIsOpen(false)}>
          <Vector />
        </div>
        <h4 className="spec">Call/text: +254 728765987</h4>
        <h4>Email: help@dianiapp.com</h4>
      </div>
    </div>
  );
};

export default Pop;
