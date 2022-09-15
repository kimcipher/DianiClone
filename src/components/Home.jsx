import React from "react";
import "./css/home.css";
import ReactWhatsapp from "react-whatsapp";

function Home() {
  const data = [
    {
      name: "Transportation",
      number: "+254728000107",
      message: "Interested in Transportation",
      className: "whatsapp",
    },
    {
      name: "Foreign Exchange",
      number: "+254728000107",
      message: "Interested in Foreign Exchange",
      className: "whatsapp",
    },
    {
      name: "Drinks",
      number: "+254728000107",
      message: "Interested in Drinks",
      className: "whatsapp",
    },
    {
      name: "Activity Guide",
      number: "+254728000107",
      message: "Interested in Activity Guide",
      className: "whatsapp",
    },
    {
      name: "Errands",
      number: "+254728000107",
      message: "Interested in running Errands",
      className: "whatsapp",
    },
    {
      name: "Health",
      number: "+254728000107",
      message: "Interested in Health",
      className: "whatsapp",
    },
  ];
  return (
    <div className="container">
      <h2>
        Deliveries On
        <br /> One Tap
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
            <h4 className="Tab-item">{item.name}</h4>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Home;
