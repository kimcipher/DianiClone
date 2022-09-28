import React from "react";
import "./css/footer.css";
import {nairobi} from "./icons"
import Nai from "./assets/nAIROBI-ART.png"


function MobileFooter() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="foot-container">
      <p><img src={Nai} alt="src alt" width="250px"/></p>
      <p>
        <a href="/how-it-works"> How it works</a>{" "}
      </p>
      <p>
      NGENI is East Afrika's largest Web3 tech developer studio.
      </p>
      <p>&copy; {currentDate} DianiApp</p>
    </div>
  );
}

export default MobileFooter;
