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
  scootersmall,
  bikesmall,
  bike,
  food,
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


} from "./icons";

function Home() {
  const data = [
    {
      name: "Groceries 24/7",
      number: "+254115144146",
      message: "Hi DianiApp 😊 I want to order some grocceries 🧅",
      className: "whatsapp",
      image: groceries,
      desc: "image desc",
    },
    // {
    //   name: "Travel Gadgets",
    //   number: "+254115144146",
    //   message: "Hi DianiApp 😊, I need to get some travel gadgets 📦",
    //   className: "whatsapp",
    //   image: packageicon,
    //   desc: "image desc",
    // },
    // {
    //   name: "Order Taxi 24/7",
    //   number: "+254115144146",
    //   message: "Hi Dianiapp 😊 I want to order a taxi 🚕",
    //   className: "whatsapp",
    //   image: taxi,
    //   desc: "image desc",
    // },
    // {
    //   name: "Cash, Currencies + Exchange",
    //   number: "+254115144146",
    //   message: "Hi DianiAPP 😊 I need some Ksh 💰",
    //   className: "whatsapp",
    //   image: fx,
    //   desc: "image desc",
    // },
    // {
    //   name: "Dinner Reservations",
    //   number: "+254115144146",
    //   message: "Hi Dianiapp 😊 want to make a dinner reservation 🍽️",
    //   className: "whatsapp",
    //   image: dinner,
    //   desc: "image desc",
    // },
    // {
    //   name: "Airport Transportation",
    //   number: "+254115144146",
    //   message: "Hi DianiApp 😊 I need to get to the airport ✈️",
    //   className: "whatsapp",
    //   image: plane,
    //   desc: "image desc",
    // },
    // {
    //   name: "Spend Crypto",
    //   number: "+254115144146",
    //   message: "Hi DianiApp 😊 I want to spend some crypto ₿",
    //   className: "whatsapp spex",
    //   image: cryptobtc,
    //   desc: "image desc",
    // },
    // {
    //   name: "Rent a Boat",
    //   number: "+254115144146",
    //   message: "Hi DianiApp 😊 Im want to rent a boat 🛥️",
    //   className: "whatsapp",
    //   image: boatsvg,
    //   desc: "image desc",
    // },
    // {
    //   name: "Accommodation Booking",
    //   number: "+254115144146",
    //   message: "Hi DianiApp 😊, I need to get accomodation 🏨",
    //   className: "whatsapp",
    //   image: hotel,
    //   desc: "image desc",
    // },
    // {
    //   name: "Mail/Package Delivery",
    //   number: "+254115144146",
    //   message: "Hi DianiApp 😊, I need to get a package delivered 📦",
    //   className: "whatsapp",
    //   image: packageicon,
    //   desc: "image desc",
    // },
  ];

  return (
    <div className="container">
      <h4>INSTANT GO {rocket}</h4>
      <div className="Tabs-container">
      <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi DianiApp 😊 I want to order some Mail/Package delivery"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="grid-left">{food} </div>
              <div className="grid-right"> &nbsp; {drink} &nbsp;&nbsp; Food   &  Drinks 24/7</div>
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
            <div className="grid-left">{boatsvg}</div> <div className="grid-right">{icongrup} Cars/Taxis Ebikes Scooter Boats </div>     
          </div>
        </ReactWhatsapp>
        {/* {scooter}&nbsp; {bikesmall}&nbsp;&nbsp; {taxi}&nbsp; */}
        {/* <h4>HIRE A {rocket}</h4> */}
        <ReactWhatsapp
              number="+254115144146"
              message="Hi DianiApp Im interested in renting a car scooter bike "
              className="whatsapp"
            >
          <div className="Tab-item" style={{display:"flex", justifyContent:"space-around", paddingBottom:"55px"}}>
            <div className="grid-left" ><p style={{background:"none"}}>{packageicon}<br/>Mail/Parcel <br/> Delivery </p></div> 
            <div className="grid-left" ><p style={{background:"none"}}>Hire <br/>{geek} <br/>Tech Guru</p></div> 
            <div className="grid-left" ><p style={{background:"none"}}>Hire <br/>{fix}<br/> Repair/fixIT</p></div> 
            {/* <div className="scooter"><p style={{background:"none"}}>Guru<br/>{geek}</p><p style={{background:"none"}}>Repair <br/>{fix}</p></div>      */}
          </div>
        </ReactWhatsapp>
         

        <h4>24/7 BOOKINGS {bookingicon}</h4>
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

          <h4>BANKING & FX {kes}</h4>
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

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{walletconnecticon}</div>
              <div className="grid-right"> Connect to Wallet </div>
            </div>
          </ReactWhatsapp>

          <h4>FAST SHOPPING {shopping}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{packageicon}</div>
              <div className="grid-right"> Buy Now . Delivered Now . </div>
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
            <div className="grid-left">{amazon}</div>
              <div className="grid-right"> AMAZON USA &#60;7 Days</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hi Dianiapp I want to book accomodation."}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{amazon}</div>
              <div className="grid-right"> AMAZON UK/EUR &#60;9Days</div>
            </div>
          </ReactWhatsapp>


      </div>
      
    </div>
  );
}

export default Home;
// caribean jinja diani north coast 