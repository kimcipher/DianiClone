 import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {imagebg, glassboat, dolphins, quad, golf, camel, snorkeling} from "./images"

function Activities() {
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
    },
    {
        name: "Dolphin Watching",
        number: "+254728000107",
        background: dolphins,
        description: "Get to see the bottlenose dolphins up-close and personal in their natural environment. Diani will change your perception of the animals that  are considered to have the near intelligence capacity of humans. You can also get a chance to swim with the dolphins. During the months of February-March and November -December, you can also spot the whale sharks and have a chance to swim with these gentle giants.", 
    },
    {
        name: "Quad Bike Tour",
        number: "+254728000107",
        background: quad,
        description: "Get to drive around diani on a guided trip on dirt roads through small villages and beautiful scenery that is rarely seen and visited by tourists. All trips are available for everyone who holds a valid driving license.",
    },
    {
        name: "Golf",
        number: "+254728000107",
        background: golf,
        description: "The Leisure Beach and Golf Resort has one of the best International 18 hole golf courses in East Africa. In fact it is the only golf course on the south coast of Kenya. The club annually hosts in October “Diani Beach Masters”. Here both professionals and amateurs can meet and play over a 2 day period. This is definitely one of the highlights in the East African golfing calendar        ",
    },
    {
        name: "Camel Rides",
        number: "+254728000107",
        background: camel,
        description: "Camel riding along Diani Beach is loads of fun and can also be a great way to get to the different beach restaurants along the coastline.         ",
    },
    {
        name: "Snorkeling",
        number: "+254728000107",
        background: snorkeling,
        description: "This is an underwater activity that is much easier to do and is safe to trying even for kids from 10 years and above.You will have an opportunity to explore the underwater environment ",
    }
  ];

 
  return (
    <div className="activities">
      <h2>Activities & Tours</h2>
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

export default Activities;
