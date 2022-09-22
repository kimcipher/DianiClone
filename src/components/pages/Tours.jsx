import React from "react";
import "../css/home.css";
import food from "../assets/icons/food.png";
import ReactWhatsapp from "react-whatsapp";
import Activity from "../assets/icons/Activity.png";
import Beer from "../assets/icons/Beer.png";
import bike from "../assets/icons/bike.png";
import ForeignExchange from "../assets/icons/ForeignExchange.png";
import Reservation from "../assets/icons/Reservation.png";
import Transport from "../assets/icons/Transport.png";

function Tours() {
  const data = [
    {
      name: "Transportation",
      number: "+254115144146",
      message: "Interested in Transportation",
      className: "whatsapp",
      image: Transport,
      desc: "image desc",
    },
    {
      name: "Foreign Exchange",
      number: "+254115144146",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
      image: ForeignExchange,
      desc: "image desc",
    },
    {
      name: "Food",
      number: "+254115144146",
      message: "Interested in Food",
      className: "whatsapp",
      image: food,
      desc: "image desc",
    },
    {
      name: "Drinks",
      number: "+254115144146",
      message: "Interested in Drinks",
      className: "whatsapp",
      image: Beer,
      desc: "image desc",
    },
    {
      name: "Activity Guide",
      number: "+254115144146",
      message: "Interested in an Activity Guide",
      className: "whatsapp",
      image: Activity,
      desc: "image desc",
    },
    {
      name: "Errands",
      number: "+254115144146",
      message: "Interested in running Errands",
      className: "whatsapp",
      image: bike,
      desc: "image desc",
    },
    {
      name: "Health",
      number: "+254115144146",
      message: "Interested in Health",
      className: "whatsapp",
      image: Reservation,
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
            <h4 className="Tab-item">
              {" "}
              <img src={item.image} alt={item.desc} /> {item.name}
            </h4>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Tours;
