import React, {useState} from "react";
import "./css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { ethers } from "ethers"
import {
  drink,
  dinner,
  taxi,
  plane,
  fx,
  scooter,
  scootersmall,
  bikesmall,
  bike,
  foodgrp,
  cryptobtc,
  hotel,
  boatsvg,
  groceries,
  packageicon,
  ksh,
  rocket,
  phone,
  battery,
  bed,
  boat,
  geek,
  fix,
  walletconnecticon,
  amazon,
  bookingicon,
  kes,
  cryptobtnnew,
  shopping,
  icongrup,
  icongroup,
  amazonpkgo,
  bankfx,
  renta
} from "./icons";

function Home() {
  const data = [
    {
      name: "Groceries 24/7",
      number: "+254115144146",
      message: "Hi DianiApp 😊 I want to order some groceries 🧅",
      className: "whatsapp",
      image: groceries,
      desc: "image desc",
    },
    
  ];

  return (
    <div className="container">
      <h4 style={{marginTop:"30px"}}>INSTANT GO {rocket}</h4>
      <div className="Tabs-container">
      <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi DianiApp 😊 I need Mail/Package delivery 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="">{foodgrp} </div>
              <div className="grid-right"> &nbsp;&nbsp; Food   &  Drinks 24/7</div>
            </div>
          </ReactWhatsapp>
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
         
       {/* <h4>RENT A {rocket}</h4> */}
       <ReactWhatsapp
              number="+254115144146"
              message="Hi DianiApp 😊 I need to rent a Scooter/ E-Bike/ Car/ Taxi /Boat 🚗"
              className="whatsapp"
            >
          <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
            <div className="flex-car-item">Scooter<br/>{scooter}</div>  
            <div className="flex-car-item">E-Bikes<br/>{bike}</div> 
            <div className="flex-car-item">{renta}</div> 
            <div className="flex-car-item">Car/Taxi<br/>{taxi}</div> 
            <div className="flex-car-item">Boat<br/>{boat}</div>    
          </div>
        </ReactWhatsapp>
        {/* {scooter}&nbsp; {bikesmall}&nbsp;&nbsp; {taxi}&nbsp; */}
        {/* <h4>HIRE A {rocket}</h4> */}
        <ReactWhatsapp
              number="+254115144146"
              message={"Hello DianiApp 😊 I need  ParcelDelivery / Hire a Tech Guru/ Repair 🛠️"}
              className="whatsapp"
            >
          <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
            <div className="" ><p style={{background:"none"}}>{packageicon}<br/>Parcel <br/> Delivery </p></div> 
            <div className="" ><p style={{background:"none"}}>Hire <br/>{geek} <br/>Tech Guru</p></div> 
            <div className="" ><p style={{background:"none"}}>Hire <br/>{fix}<br/> Repair/FixIT</p></div> 
            {/* <div className="scooter"><p style={{background:"none"}}>Guru<br/>{geek}</p><p style={{background:"none"}}>Repair <br/>{fix}</p></div>      */}
          </div>
        </ReactWhatsapp>
      

        <h4 style={{marginTop:"30px"}}>24/7 BOOKINGS {bookingicon}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a accomodation 🛌"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{bed}</div>
              <div className="grid-right"> Accomodation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a reservation 🍽️"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{dinner}</div>
              <div className="grid-right"> Dinner Reservation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a Airport Transportation ✈️"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{plane}</div>
              <div className="grid-right"> Airport Transportation</div>
            </div>
          </ReactWhatsapp>

          <h4 style={{marginTop:"30px"}}>BANKING & FX {bankfx}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a Cash & currency exchange 💰"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{ksh}</div>
              <div className="grid-right"> Cash. Currencies. Exchange</div>
            </div>
          </ReactWhatsapp>

        <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a to spend some crypto 💸"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{cryptobtnnew}</div>
              <div className="grid-right"> Spend Crytpo</div>
            </div>
          </ReactWhatsapp>
          {/* {!currentAccount && (
              <button className="whatsapp" onClick={connectWallet}>
              <div className="Tab-item">
                <div className="grid-left">{walletconnecticon}</div>
                <div className="grid-right"> Connect to Wallet </div>
              </div>
            </button>
          )} */}
          

          <h4 style={{marginTop:"30px"}}>FAST SHOPPING {shopping}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a shopping 🛒"}
            className="whatsapp"
          >
            <div className="Tab-item" style={{paddingTop:"15px",paddingBottom:"15px", fontSize:"0.9em", }}>
              <div className="grid-right" style={{marginLeft:'20px'}}>{icongroup}</div><div className="grid-right" style={{marginLeft:'20px'}}>Buy Now. Deliver Now</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a Tech gadgets 📱"}
            className="whatsapp"
          >
            <div className="Tab-item" style={{display:"flex", justifyContent:"space-around", paddingBottom:"-10px"}}>
              <div className="flex-car-item" style={{marginTop:"15px"}}>{phone}</div>  
              <div className="flex-car-item">Tech Gadgets</div> 
              <div className="flex-car-item">{battery}</div> 
              <div className="flex-car-item">Battery</div> 
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Package Delivery(Amazon US) 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON USA &#60;7 Days</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a Package Delivery(Amazon UK/EUR) 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON UK/EUR &#60;9Days</div>
            </div>
          </ReactWhatsapp>


      </div>
      
    </div>
  );
}

export default Home;
// caribean jinja diani north coast 