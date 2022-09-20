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
  cryptobtc,
  hotel,
  boatsvg,
  groceries,
} from "./icons";

function Home() {
  const data = [
    {
      name: "Food Delivery 24/7",
      number: "+254728000107",
      message: "Hi DianiApp Im in need of food delivery",
      className: "whatsapp",
      image: food,
      desc: "image desc",
    },
    {
      name: "Drinks Delivery 24/7",
      number: "+254728000107",
      message: "Hi DianiApp Im in need of Drinks delivery",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Dinner Reservations",
      number: "+254728000107",
      message: "Hi Dianiapp want to make a dinner reservation",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "Order Taxi",
      number: "+254728000107",
      message: "Hi Dianiapp I need a taxi",
      className: "whatsapp",
      image: taxi,
      desc: "image desc",
    },
    {
      name: "Airport Transportation",
      number: "+254728000107",
      message: "Hi DianiApp Im interested in Airport Transportation",
      className: "whatsapp",
      image: plane,
      desc: "image desc",
    },
    {
      name: "Cash, Currencies + Exchange",
      number: "+254728000107",
      message: "Hi DianiAPP I need Ksh",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Spend Crypto",
      number: "+254728000107",
      message: "Hi DianiApp I need to spend some crypto",
      className: "whatsapp",
      image: cryptobtc,
      desc: "image desc",
    },
    {
      name: "Rent a Boat",
      number: "+254728000107",
      message: "Im Interested in Renting a boat",
      className: "whatsapp",
      image: boatsvg,
      desc: "image desc",
    },
    {
      name: "Groceries 24/7",
      number: "+254728000107",
      message: "Hi DianiApp Im Interested in (cuban cigars, wines, spirits) Brands",
      className: "whatsapp",
      image: groceries,
      desc: "image desc",
    },
    {
      name: "Accomondation Booking",
      number: "+254728000107",
      message: "Hi DianiApp Im interested in Double Decker Bicycles for Deliveries",
      className: "whatsapp",
      image: hotel,
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
              <div className="grid-left">{item.image}</div>
              <div className="grid-right">{item.name}</div>
            </h4>
          </ReactWhatsapp>
        ))}
        <ReactWhatsapp
              number="+254728000107"
              message="Hi DianiApp Im interested in renting a car scooter bike "
              className="whatsapp"
            >
          <div className="Tab-item">
            <div className="grid-left">Rent a</div> <div className="scooter"div>{scooter}{bike}{taxi}</div>     
          </div>
        </ReactWhatsapp>
      </div>
    </div>
  );
}

export default Home;
