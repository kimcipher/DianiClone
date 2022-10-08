import React from "react";
import { mpesanew, crypto, credit, paypal, kes } from "./icons";
import "./css/Payment.css";
const Payment = () => {
  return (
    <div className="Payment-container">
      <h4 style={{fontSize:"0.8em"}}>We Accept : </h4> &nbsp;&nbsp;&nbsp; {kes} &nbsp; {credit} &nbsp; {mpesanew}  &nbsp; {crypto}  &nbsp; {paypal}
    </div>
  );
};

export default Payment;
 