import React, {useState} from "react";
import "../css/home.css";
import food from "../assets/icons/food.png"
import ReactWhatsapp from "react-whatsapp";
import Beer from "../assets/icons/Beer.png"
import ForeignExchange from "../assets/icons/ForeignExchange.png"
import Transport from "../assets/icons/Transport.png"

function Wellness() {
  const data = [
    {
      name: "On site Massage",
      number: "+254728000107",
      message: "Interested in Transportation",
      className: "whatsapp",
      imahe:Transport,
      desc:"image desc",
    },
    {
      name: "On Site Hair & Make up",
      number: "+254728000107",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
      imahe:ForeignExchange,
      desc:"image desc",
    },
    {
      name: "On Site Nail service",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:food,
      desc:"image desc",
    },
    {
      name: "Something special",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:Beer,
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
            <h4 className="Tab-item"> <img src={item.imahe} alt={item.desc}/> {item.name}</h4>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Wellness;
