 import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {snorkeling, camel, golf, sunset, quad, glassboat} from "./images"

function Activities() {
  const data = [
    {
        name: "Snorkeling",
        message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
        number: "+254115144146",
        background: snorkeling,
        description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
      name: "Snorkeling",
      message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
      number: "+254115144146",
      background: camel,
      description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
      name: "Snorkeling",
      message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
      number: "+254115144146",
      background: golf,
      description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
      name: "Snorkeling",
      message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
      number: "+254115144146",
      background: sunset,
      description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
      name: "Snorkeling",
      message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
      number: "+254115144146",
      background: quad,
      description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
      name: "Snorkeling",
      message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
      number: "+254115144146",
      background: glassboat,
      description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
  ];

 
  return (
    <div className="activities">
      <h2>Activities & Tours</h2>

      <div className="act-container">
        {data.map ((item, index) => {
            let image = item.background
            return(
                <div>
                    <div className="act-item">
                        <img src={image} alt="#"/>
                    </div>
                    <ReactWhatsapp
                        key={index}
                        number={item.number}
                        message={item.message}
                        className="none"
                    >
                    <h4>Book Now</h4>
                    </ReactWhatsapp>
                </div>
            )
        })}
      </div>

    </div>
  );
}

export default Activities;
