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
  amazonpkgo
} from "./icons";

function Home() {
  const [currentAccount, setCurrentAccount] = useState("")
  const checkIfWalletIsConnected = async() => {
    try{
      const {ethereum} = window;
      if (!ethereum) {
        console.log("Make sure you have metamask");
      } else {
        console.log("We have the ethereum object", ethereum);
      }
  
      const accounts = await ethereum.request({method: "eth_accounts"});
  
      if (accounts.length !== 0){
        const account = accounts[0];
        console.log("Found and authorized account : ", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account available")
      }
    } catch(error){
      console.log(error)
    }


    
  }
  const connectWallet = async() => {
    try{
      const {ethereum} = window;

      if(!ethereum) {
        alert("Get Metamask");
        return;
      }
      const accounts = await ethereum.request({ method:"eth_requestAccounts"});

      console.log("connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch(error){
      console.log(error)
    }
  }
  const data = [
    {
      name: "Groceries 24/7",
      number: "+254115144146",
      message: "Hi DianiApp 😊 I want to order some grocceries 🧅",
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
            message={"Hi DianiApp 😊 I want to order some Mail/Package delivery"}
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
              message="Hi DianiApp Im interested in renting a car scooter bike "
              className="whatsapp"
            >
          <div className="Tab-item">
            <div className="">{icongrup}</div> <div className="grid-right"> Cars/Taxis Ebikes Scooter Boats </div>     
          </div>
        </ReactWhatsapp>
        {/* {scooter}&nbsp; {bikesmall}&nbsp;&nbsp; {taxi}&nbsp; */}
        {/* <h4>HIRE A {rocket}</h4> */}
        <ReactWhatsapp
              number="+254115144146"
              message="Hi DianiApp Im interested in renting a car scooter bike "
              className="whatsapp"
            >
          <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
            <div className="" ><p style={{background:"none"}}>{packageicon}<br/>Mail/Parcel <br/> Delivery </p></div> 
            <div className="" ><p style={{background:"none"}}>Hire <br/>{geek} <br/>Tech Guru</p></div> 
            <div className="" ><p style={{background:"none"}}>Hire <br/>{fix}<br/> Repair/FixIT</p></div> 
            {/* <div className="scooter"><p style={{background:"none"}}>Guru<br/>{geek}</p><p style={{background:"none"}}>Repair <br/>{fix}</p></div>      */}
          </div>
        </ReactWhatsapp>
         

        <h4 style={{marginTop:"30px"}}>24/7 BOOKINGS {bookingicon}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{bed}</div>
              <div className="grid-right"> Accomodation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{dinner}</div>
              <div className="grid-right"> Dinner Reservation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{plane}</div>
              <div className="grid-right"> Airport Transportation</div>
            </div>
          </ReactWhatsapp>

          <h4 style={{marginTop:"30px"}}>BANKING & FX {kes}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{ksh}</div>
              <div className="grid-right"> Cash. Currencies. Exchange</div>
            </div>
          </ReactWhatsapp>

        <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{cryptobtnnew}</div>
              <div className="grid-right"> Spend Crytpo</div>
            </div>
          </ReactWhatsapp>
          {!currentAccount && (
              <button className="whatsapp" onClick={connectWallet}>
              <div className="Tab-item">
                <div className="grid-left">{walletconnecticon}</div>
                <div className="grid-right"> Connect to Wallet </div>
              </div>
            </button>
          )}
          

          <h4 style={{marginTop:"30px"}}>FAST SHOPPING {shopping}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item" style={{paddingTop:"15px",paddingBottom:"15px", fontSize:"0.9em", }}>
              <div className="grid-right" style={{marginLeft:'20px'}}>{icongroup}</div><div className="grid-right" style={{marginLeft:'20px'}}>Buy Now. Delivered Now</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{phone} &nbsp; {battery}</div>
              <div className="grid-right"> &nbsp;&nbsp; Tech Gadgets </div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON USA &#60;7 Days</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
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