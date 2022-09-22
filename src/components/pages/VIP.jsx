import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {
  skydiving,
  skiing,

} from "./images";

function VIP() {
  const data = [
    {
      name: "SKYDIVING",
      number: "+254115144146",
      background: skydiving,
      message: "Hi DianiApp Im interested in Sky Diving",
      description:
        "Diani beach offers some of the finest scenery in the world and skydiving onto the beach has become a large attraction amongst tourists who want to see the landscape from a birds-eye view at 12,000 ft.  ",
    },
    {
      name: "JET SKIING",
      number: "+254115144146",
      message: "Hi DianiApp Im interested in Jet Skiing",
      background: skiing,
      description:
        "Diani Beach is one of the greatest water sports destinations in East Africa.Experience the beautiful view of Diani from the open sea and get to know other fascinating parts of the coast.",
    },
  ];

  return (
    <div className="activities">
      <h2>VIP Tour</h2>
      <div className="act-container">
        {data.map((item, index) => {
          let image = item.background;
          return (
            <div>
              <div
                className="act-item"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="act-full">
                  <div className="Text">
                    <h2 style={{ color: "#fff" }}>{item.name}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
              <ReactWhatsapp
                key={index}
                number={item.number}
                message={item.message}
                className={item.className}
              >
                <button>Book</button>
              </ReactWhatsapp>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VIP;
