import React, {useState} from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {imagebg, glassboat, dolphins, quad, golf, camel, snorkeling} from "./images"

function VIP() {
  const data = [
    {
        name: "Sunset/Sunrise Boat Trip",
        number: "+254728000107",
        background: imagebg,
        description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
        name: "Glassboat Trip",
        number: "+254728000107",
        background: glassboat,
        description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    }
  ];

 
  return (
    <div className="activities">
      <h2>VIP Tour</h2>
      <div className="act-container">
        {data.map ((item, index) => {
            let image = item.background
        return(
        <div>
            <div className="act-item" style={{ backgroundImage: `url(${image})`}}>
                <div className="act-full">
                    <div className="Text">
                        <h2 style={{color:'#fff'}}>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
            <ReactWhatsapp
                key={index}
                number={item.number}
                message={item.name}
                className={item.className}
              >
              <button>Book</button>
            </ReactWhatsapp>
         </div>
        )
    })}
      </div>
    </div>
  );
}

export default VIP;
