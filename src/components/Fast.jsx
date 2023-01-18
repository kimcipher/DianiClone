import React, { useState } from "react";
import "./css/home.css";
import ReactWhatsapp from "react-whatsapp";
import {
  phone,
  battery,
  shopping,
  amazonpkgo,
  simcard,
  camera,
  laptop,
  dress,
  tshirt,
  shoe,
  flippers,
} from "./icons";

function Fast() {
  return (
    <>
      <div className="container">
        <h4 style={{ marginTop: "30px" }}>FAST SHOPPING {shopping}</h4>
        <div className="Tabs-container">
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need shopping 🛒"}
            className="whatsapp"
          >
            <div
              className="Tab-item"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="flex-car-item">{dress}</div>
              <div className="flex-car-item">{tshirt}</div>
              <div className="flex-car-item">{shoe}</div>
              <div className="flex-car-item">{flippers}</div>
              <div
                className="flex-car-item"
                style={{ marginTop: "0", width: "95px" }}
              >
                Buy now Delivered Now
              </div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Tech gadgets 📱"}
            className="whatsapp"
          >
            <div
              className="Tab-item"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="flex-car-item">{phone}</div>
              <div className="flex-car-item">{camera}</div>
              <div className="flex-car-item">{battery}</div>
              <div className="flex-car-item">{laptop}</div>
              <div
                className="flex-car-item"
                style={{ marginTop: "0", width: "95px" }}
              >
                Tech Gadgets
              </div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need to purchase sim cards 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="grid-left">{simcard}</div>
              <div className="grid-right">Buy sim cards</div>
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
            message={
              "Hello DianiApp 😊 I need Package Delivery(Amazon UK/EUR) 📦"
            }
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON UK/EUR &#60;9Days</div>
            </div>
          </ReactWhatsapp>
        </div>
      </div>
    </>
  );
}

export default Fast;
