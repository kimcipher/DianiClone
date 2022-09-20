import React from "react";
import "./css/footer.css";
import {nairobi} from "./pages/images"
const uri = "https://ngeni.io/static/media/nairobiart.53c3aebe.png"

function MobileFooter() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="foot-container">
      <p><img src={uri} alt="nairobi love" style={{ width:'300px'}}/></p>
      <p>
        <a href="/how-it-works"> How it works</a>{" "}
      </p>
      <p>
      Powered by LaLo Communities. A Subsidiary of NGENI IO LTD.  NGENI is East Afrika's largest Web3 tech developer studio.
      </p>
      <p>&copy; {currentDate} DianiApp</p>
    </div>
  );
}

export default MobileFooter;
