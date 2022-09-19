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
  bikedeli,
  boat,
  cryptobtc
} from "./icons";

function Home() {
  const data = [
    {
      name: "Food Delivery 24/7",
      number: "+254728000107",
      message: "Hi DianiApp Im in need of food delivery",
      className: "whatsapp",
      imahe: food,
      desc: "image desc",
    },
    {
      name: "Drinks Delivery 24/7",
      number: "+254728000107",
      message: "Hi DianiApp Im in need of Drinks delivery",
      className: "whatsapp",
      imahe: drink,
      desc: "image desc",
    },
    {
      name: "Dinner Reservation",
      number: "+254728000107",
      message: "Hi Dianiapp want to make a dinner reservation",
      className: "whatsapp",
      imahe: dinner,
      desc: "image desc",
    },
    {
      name: "Order Taxi",
      number: "+254728000107",
      message: "Hi Dianiapp I need a taxi",
      className: "whatsapp",
      imahe: taxi,
      desc: "image desc",
    },
    {
      name: "Airport Transportation",
      number: "+254728000107",
      message: "Hi DianiApp Im interested in Airport Transportation",
      className: "whatsapp",
      imahe: plane,
      desc: "image desc",
    },
    {
      name: "Ksh & FX",
      number: "+254728000107",
      message: "Hi DianiAPP I need Ksh",
      className: "whatsapp",
      imahe: fx,
      desc: "image desc",
    },
    {
      name: "SPEND CRYPTO",
      number: "+254728000107",
      message: "Hi DianiApp I need to spend some crypto",
      className: "whatsapp",
      imahe: cryptobtc,
      desc: "image desc",
    },
    {
      name: "Rent a Boat",
      number: "+254728000107",
      message: "Im Interested in Renting a boat",
      className: "whatsapp",
      imahe: boat,
      desc: "image desc",
    },
    {
      name: "Brands (cuban cigars, wines and spirits)",
      number: "+254728000107",
      message: "Hi DianiApp Im Interested in (cuban cigars, wines and spirits) Brands",
      className: "whatsapp",
      imahe: basket,
      desc: "image desc",
    },
    {
      name: "Double Decker Bicycles for Deliveries",
      number: "+254728000107",
      message: "Hi DianiApp Im interested in Double Decker Bicycles for Deliveries",
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
        <ReactWhatsapp
              number="0728000107"
              message="Hi DianiApp Im interested in renting a car scooter bike "
              className="whatsapp"
            >
          <div className="Tab-item">
            <div className="grid-left">Rent a</div> <div className="scooter"div>{car}{scooter}{bike}</div>     
          </div>
        </ReactWhatsapp>
      </div>
    </div>
  );
}

export default Home;
