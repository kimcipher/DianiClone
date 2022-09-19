import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, plane, fx, food } from "../icons";

function NightLife() {
  const data = [
    {
      name: "Dinner Reservation",
      number: "+254728000107",
      message: "Interested in Transportation",
      className: "whatsapp",
      imahe: dinner,
      desc: "image desc",
    },
    {
      name: "Table Reservation",
      number: "+254728000107",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
      imahe: drink,
      desc: "image desc",
    },
    {
      name: "Luxury Reservation",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe: plane,
      desc: "image desc",
    },
    {
      name: "Browse Events",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe: fx,
      desc: "image desc",
    },
    {
      name: "DJ Parties",
      number: "+254728000107",
      message: "Interested in Activity Guide",
      className: "whatsapp",
      imahe: food,
      desc: "image desc",
    },
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
            <h4 className="Tab-item"> {item.name}</h4>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default NightLife;
