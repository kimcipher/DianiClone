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
  packageicon
} from "./icons";

function Home() {
  const data = [
    {
      name: "Food Delivery 24/7",
      number: "+254115144146",
      message: "Hi DianiApp 😊, I want to order some food 🍝",
      className: "whatsapp",
      image: food,
      desc: "image desc",
    },
    { 
      name: "Drinks Delivery 24/7",
      number: "+254115144146",
      message: "Hi DianiApp 😊 I want to order some Drinks 🥂",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Groceries 24/7",
      number: "+254115144146",
      message: "Hi DianiApp 😊 I want to order some grocceries 🧅",
      className: "whatsapp",
      image: groceries,
      desc: "image desc",
    },
    {
      name: "Order Taxi 24/7",
      number: "+254115144146",
      message: "Hi Dianiapp 😊 I want to order a taxi 🚕",
      className: "whatsapp",
      image: taxi,
      desc: "image desc",
    },
    {
      name: "Cash, Currencies + Exchange",
      number: "+254115144146",
      message: "Hi DianiAPP 😊 I need some Ksh 💰",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Dinner Reservations",
      number: "+254115144146",
      message: "Hi Dianiapp 😊 want to make a dinner reservation 🍽️",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "Airport Transportation",
      number: "+254115144146",
      message: "Hi DianiApp 😊 I need to get to the airport ✈️",
      className: "whatsapp",
      image: plane,
      desc: "image desc",
    },
    {
      name: "Spend Crypto",
      number: "+254115144146",
      message: "Hi DianiApp 😊 I want to spend some crypto ₿",
      className: "whatsapp spex",
      image: cryptobtc,
      desc: "image desc",
    },
    {
      name: "Rent a Boat",
      number: "+254115144146",
      message: "Hi DianiApp 😊 Im want to rent a boat 🛥️",
      className: "whatsapp",
      image: boatsvg,
      desc: "image desc",
    },
    {
      name: "Accommodation Booking",
      number: "+254115144146",
      message: "Hi DianiApp 😊, I need to get accomodation 🏨",
      className: "whatsapp",
      image: hotel,
      desc: "image desc",
    },
    {
      name: "Mail/Package Delivery",
      number: "+254115144146",
      message: "Hi DianiApp 😊, I need to get a package delivered 📦",
      className: "whatsapp",
      image: packageicon,
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
            <div className="Tab-item">
              <div className="grid-left">{item.image}</div>
              <div className="grid-right">{item.name}</div>
            </div>
          </ReactWhatsapp>
        ))}
        <ReactWhatsapp
              number="+254115144146"
              message="Hi DianiApp Im interested in renting a car scooter bike "
              className="whatsapp"
            >
          <div className="Tab-item">
            <div className="grid-left">Rent a</div> <div className="scooter">{scooter}{bike}{taxi}</div>     
          </div>
        </ReactWhatsapp>
      </div>
    </div>
  );
}

export default Home;
