import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, plane, fx, food } from "../icons";

function NightLife() {
  const data = [
    {
      name: "Dinner Reservation",
      number: "+254115144146",
      message: "Interested in a Dinner reservation",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "Table Reservation",
      number: "+254115144146",
      message: "Interested a table resevation",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Luxury Reservation",
      number: "+254115144146",
      message: "Interested in a luxury reservation",
      className: "whatsapp",
      image: plane,
      desc: "image desc",
    },
    {
      name: "Browse Events",
      number: "+254115144146",
      message: "Interested in Browsing events",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "DJ Parties",
      number: "+254115144146",
      message: "Interested in a DJ party",
      className: "whatsapp",
      image: food,
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
            <div className="Tab-item-wellness"> {item.name}</div>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default NightLife;
