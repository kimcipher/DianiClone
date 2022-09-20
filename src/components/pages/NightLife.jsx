import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, plane, fx, food } from "../icons";

function NightLife() {
  const data = [
    {
      name: "Dinner Reservation",
      number: "+254773287540",
      message: "Interested in a Dinner reservation",
      className: "whatsapp",
      imahe: dinner,
      desc: "image desc",
    },
    {
      name: "Table Reservation",
      number: "+254773287540",
      message: "Interested a table resevation",
      className: "whatsapp",
      imahe: drink,
      desc: "image desc",
    },
    {
      name: "Luxury Reservation",
      number: "+254773287540",
      message: "Interested in a luxury reservation",
      className: "whatsapp",
      imahe: plane,
      desc: "image desc",
    },
    {
      name: "Browse Events",
      number: "+254773287540",
      message: "Interested in Browsing events",
      className: "whatsapp",
      imahe: fx,
      desc: "image desc",
    },
    {
      name: "DJ Parties",
      number: "+254773287540",
      message: "Interested in a DJ party",
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
