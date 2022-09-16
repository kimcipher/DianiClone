import React, {useState} from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import {drink, dinner, taxi, plane, fx, scooter, bike, car, crypto, food} from "../icons"

function Activities() {
  const data = [
    {
      name: "Food Delivery 24/7",
      number: "+254728000107",
      message: "Interested in Transportation",
      className: "whatsapp",
      imahe:food,
      desc:"image desc",
    },
    {
      name: "Drinks Delivery 24/7",
      number: "+254728000107",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
      imahe:drink,
      desc:"image desc",
    },
    {
      name: "Dinner Reservation",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:dinner,
      desc:"image desc",
    },
    {
      name: "Order Taxi",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:taxi,
      desc:"image desc",
    },
    {
      name: "Airport Transportation",
      number: "+254728000107",
      message: "Interested in Activity Guide",
      className: "whatsapp",
      imahe:plane,
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
            <h4 className="Tab-item">{item.imahe}{item.name}</h4>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Activities;
