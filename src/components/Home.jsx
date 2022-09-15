import React, {useState} from "react";
import "./css/home.css";
import ReactWhatsapp from "react-whatsapp";
import Activity from "./assets/icons/Activity.png"
import Beer from "./assets/icons/Beer.png"
import bike from "./assets/icons/bike.png"
import ForeignExchange from "./assets/icons/ForeignExchange.png"
import Reservation from "./assets/icons/Reservation.png"
import Transport from "./assets/icons/Transport.png"
import {TypeAnimation } from 'react-type-animation'
import { useEffect } from "react";

function Home() {
  const data = [
    {
      name: "Transportation",
      number: "+254728000107",
      message: "Interested in Transportation",
      className: "whatsapp",
      imahe:Transport,
      desc:"image desc",
    },
    {
      name: "Foreign Exchange",
      number: "+254728000107",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
      imahe:ForeignExchange,
      desc:"image desc",
    },
    {
      name: "Food",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:Beer,
      desc:"image desc",
    },
    {
      name: "Drinks",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
      imahe:Beer,
      desc:"image desc",
    },
    {
      name: "Activity Guide",
      number: "+254728000107",
      message: "Interested in Activity Guide",
      className: "whatsapp",
      imahe:Activity,
      desc:"image desc",
    },
    {
      name: "Errands",
      number: "+254728000107",
      message: "Interested in running Errands",
      className: "whatsapp",
      imahe:bike,
      desc:"image desc",
    },
    {
      name: "Health",
      number: "+254728000107",
      message: "Interested in Health",
      className: "whatsapp",
      imahe:Reservation,
      desc:"image desc",
    },
  ];
  const TEXTS = [
    "Deliveries on",
    "One Tap"
  ]
 
  return (
    <div className="container">
      <h2>
      <TypeAnimation
        sequence={[
          'Deliveries on', // Types 'One'
          3000, // Waits 1s
          'One Tap', // Deletes 'One' and types 'Two'
          3000, // Waits 2s
          '...', // Types 'Three' without deleting 'Two'
          () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        // style={{ fontSize: '2em' }}
      />
      </h2>
      <h3>Welcome to DianiApp</h3>
      <div className="Tabs-container">
        {data.map((item, index) => (
          <ReactWhatsapp
            key={index}
            number={item.number}
            message={item.message}
            className={item.className}
          >
            <h4 className="Tab-item"> <img src={item.imahe} alt={item.desc}/> {item.name}</h4>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Home;
