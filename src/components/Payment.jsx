import React from "react";
import { mpesa, crypto, credit, paypal, kes } from "./icons";
import "./css/Payment.css";
const Payment = () => {
  return (
    <div className="Payment-container">
      {kes} {crypto} {credit} {paypal} {mpesa}
    </div>
  );
};

export default Payment;
