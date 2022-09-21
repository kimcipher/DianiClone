import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "../css/carousel.css"
import {mpesa, cryptobtn, credit, paypal, one, two, three, four} from "../icons"


function HowItWorks() {
    const data = [
        {
            icon: one,
            text: "Select the service you need (food and booze, transportation, groceries, Fx,dinner/lunch reservations)"
        },
        {
            icon: two,
            text: "Click on ‘Continue to chat’ and amessage will be sent via WhatsApp to The Diani App"
        },
        {
            icon: three,
            text: "The managing team will process the customer request for the requested service. "
        },
        {
            icon: four,
            text: "A delivery guy will be sent to the customer location with the delivery."
        }

    ]
  return (
    <div>
        <h2>How It Works</h2>
        <div className="how">
            {data.map((item, index) => (
                <div className="how-item">
                    <div className="how-component-small">{item.icon}</div>
                    <div className="how-component">{item.text}</div>
                </div>
            ))}
        </div>
        {/* <div className="carcon">
            <Carousel
                showThumbs={false}
                showStatus={false}
                indicator={({onClick, isSelected}) =>
                <span onClick={onClick} className={isSelected && 'selected'}>myDot</span>
                }
            >
                    <div className="carousel-container">
                        <h3>01</h3>
                        <p>Select the service you need (food and booze, transportation, groceries, Fx, dinner/lunch reservations</p>
                        <div className="carousel-flex">
                            <button className="back-btn">Back</button><button className="next-btn">Next</button>
                        </div>
                    </div>
                    <div className="carousel-container">
                    <h3>02</h3>
                        <p>Select the service you need (food and booze, transportation, groceries, Fx, dinner/lunch reservations</p>
                        <div className="carousel-flex">
                            <button className="back-btn">Back</button><button className="next-btn">Next</button>
                        </div>
                    </div>
                    <div className="carousel-container">
                    <h3>03</h3>
                        <p>Select the service you need (food and booze, transportation, groceries, Fx, dinner/lunch reservations</p>
                        <div className="carousel-flex">
                            <button className="back-btn">Back</button><button className="next-btn">Next</button>
                        </div>
                    </div>
            </Carousel>
        </div> */}
        <div>
            <h2>Payment Platforms</h2>
            <div className="payment-flex">
                <div className="payment-item">
                    {mpesa}<h4> Mpesa</h4>
                </div>
                <div className="payment-item">
                    {cryptobtn}<h4> Crypto</h4>
                </div>
                <div className="payment-item">
                    {credit}<h4>Credit Cards </h4>
                </div>
                <div className="payment-item">
                    {paypal}<h4> Paypal</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks