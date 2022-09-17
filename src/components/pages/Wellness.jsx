import React, {useState} from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import Beer from "../assets/icons/Beer.png"
import Transport from "../assets/icons/Transport.png"
import {drink, dinner, taxi, plane, fx, scooter, bike, car, crypto, food} from "../icons"


function Wellness() {
  const data = [
    {
      name: "On site Massage",
      number: "+254728000107",
      message: "Interested in Transportation",
      className: "whatsapp",
      imahe:dinner,
      desc:"image desc",
    },
    {
      name: "On Site Hair & Make up",
      number: "+254728000107",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
      imahe:fx,
      desc:"image desc",
    },
    {
      name: "On Site Nail service",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:drink,
      desc:"image desc",
    },
    {
      name: "Something special",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:food,
      desc:"image desc",
    }
  ];
 
  return (
    <div className="container">
      <div className="Tabs-container">
        {data.map((item, index) => (
          <ReactWhatsapp
            key={index}
            number={item.number}
            message={item.message}
            className={item.className}
          >
            <h4 className="Tab-item"> {item.imahe} {item.name}</h4>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Wellness;
