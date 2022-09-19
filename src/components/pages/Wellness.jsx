import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import {drink, dinner, fx, food} from "../icons"


function Wellness() {
  const data = [
    {
      name: "On site Massage",
      number: "+254728000107",
      message: "Hi DianiApp I'm Interested in a Massage",
      className: "whatsapp",
      imahe:dinner,
      desc:"image desc",
    },
    {
      name: "On Site Hair & Make up",
      number: "+254728000107",
      message: "Hi DianiApp I'm Interested in On site hair & make up",
      className: "whatsapp",
      imahe:fx,
      desc:"image desc",
    },
    {
      name: "On Site Nail service",
      number: "+254728000107",
      message: "Hi DianiApp I'm Interested in On site nail service",
      className: "whatsapp",
      imahe:drink,
      desc:"image desc",
    },
    {
      name: "Something special",
      number: "+254728000107",
      message: "Hi DianiApp I'm Interested in Something special",
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
            <h4 className="Tab-item"> {item.name}</h4>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Wellness;
