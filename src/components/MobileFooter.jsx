import React from "react";
import "./css/footer.css";

function MobileFooter() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="foot-container">
      <p>
        <a href="/how-it-works"> How it works</a>{" "}
      </p>
      <p>
        Diani App is powered by LaLo Communities - a wholly owned 
        platform focused on briidging the gap bet'n tech powered 
        servicies and the last kilometer for underserved communities .
      </p>
      <p>&copy; {currentDate} DianiApp</p>
    </div>
  );
}

export default MobileFooter;
