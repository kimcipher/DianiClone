import React from "react";
import { mpesa, crypto, credit, paypal } from "./icons";
import "./css/Payment.css";
const Payment = () => {
  return (
    <div className="Payment-container">
      {mpesa} {crypto} {credit} {paypal}
    </div>
  );
};

export default Payment;
