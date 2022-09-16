import React, {useState} from "react";
import "../css/home.css";
import food from "../assets/icons/food.png"
import ReactWhatsapp from "react-whatsapp";
import Activity from "../assets/icons/Activity.png"
import Beer from "../assets/icons/Beer.png"
import bike from "../assets/icons/bike.png"
import ForeignExchange from "../assets/icons/ForeignExchange.png"
import Reservation from "../assets/icons/Reservation.png"
import Transport from "../assets/icons/Transport.png"
import {TypeAnimation } from 'react-type-animation'

function NightLife() {
  const data = [
    {
      name: "Dinner Reservation",
      number: "+254728000107",
      message: "Interested in Transportation",
      className: "whatsapp",
      imahe:Transport,
      desc:"image desc",
    },
    {
      name: "Table Reservation",
      number: "+254728000107",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
      imahe:ForeignExchange,
      desc:"image desc",
    },
    {
      name: "Luxury Reservation",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:food,
      desc:"image desc",
    },
    {
      name: "Browse Events",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:Beer,
      desc:"image desc",
    },
    {
      name: "DJ Parties",
      number: "+254728000107",
      message: "Interested in Activity Guide",
      className: "whatsapp",
      imahe:Activity,
      desc:"image desc",
    }
  ];
  const TEXTS = [
    "Deliveries on",
    "One Tap"
  ]
 
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

export default NightLife;
