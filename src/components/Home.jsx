import React from "react";
import "./css/home.css";
import ReactWhatsapp from "react-whatsapp";
import {
  drink,
  dinner,
  taxi,
  plane,
  fx,
  scooter,
  bike,
  car,
  crypto,
  food,
  basket,
  bikedeli
} from "./icons";

function Home() {
  const data = [
    {
      name: "Food Delivery 24/7",
      number: "+254728000107",
      message: "Interested in Transportation",
      className: "whatsapp",
      imahe: food,
      desc: "image desc",
    },
    {
      name: "Drinks Delivery 24/7",
      number: "+254728000107",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
      imahe: drink,
      desc: "image desc",
    },
    {
      name: "Dinner Reservation",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe: dinner,
      desc: "image desc",
    },
    {
      name: "Order Taxi",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe: taxi,
      desc: "image desc",
    },
    {
      name: "Airport Transportation",
      number: "+254728000107",
      message: "Interested in Activity Guide",
      className: "whatsapp",
      imahe: plane,
      desc: "image desc",
    },
    {
      name: "Ksh & FX",
      number: "+254728000107",
      message: "Interested in running Errands",
      className: "whatsapp",
      imahe: fx,
      desc: "image desc",
    },
    {
      name: "SPEND CRYPTO",
      number: "+254728000107",
      message: "Interested in Health",
      className: "whatsapp",
      imahe: crypto,
      desc: "image desc",
    },
    {
      name: "Rent a Boat",
      number: "+254728000107",
      message: "Im Interested in Renting a car, bike, scooter",
      className: "whatsapp",
      imahe: car,
      desc: "image desc",
    },
    {
      name: "Brands (cuban cigars, wines and spirits)",
      number: "+254728000107",
      message: "Im Interested in Brands",
      className: "whatsapp",
      imahe: basket,
      desc: "image desc",
    },
    {
      name: "Double Decker Bicycles for Deliveries",
      number: "+254728000107",
      message: "Im Interested in Brands",
      className: "whatsapp",
      imahe: bikedeli,
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
              <div className="grid-left">{item.imahe}</div>
              <div className="grid-right">{item.name}</div>
            </h4>
          </ReactWhatsapp>
        ))}
        <div className="Tab-item">
          <div className="grid-left">Rent a</div> <div className="scooter"div>{car}{scooter}{bike}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
