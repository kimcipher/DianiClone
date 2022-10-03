import React from "react";
import "./css/footer.css";
import Nai from "./assets/nAIROBI-ART.png";

function MobileFooter() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="foot-container">
       <p>
        <a href="/how-it-works"> How it works [?]</a>{" "}
      </p>
      <p>
      [L]DianiApp &trade;<br/><br/>
      is a partner based community dApp <br/><br/>
        within LaLoCommunitie(s)<br/><br/> 
        ecosystem.  LaLoCommunities <br/><br/>
        is a Web3+Blockchain powered <br/><br/> 
        Bookings & Deliveries<br/><br/>
        dApp for Anything. Anytime.<br/><br/>  
        A mashup of  .... <br/><br/>
      </p>
      <p>
        [  AMAZON  ]     [   UBER   ]    
      [ BOOKING.COM  ]
    </p>
    <p>
              [ JUMIA  ]   [ JUST EAT ]
    </p>
    <p>
        Serving small communities globally. Try US!
      </p>
      <p>
        <img src={Nai} alt="src alt" width="250px" />
      </p>
      <p>&copy; {currentDate} DianiApp .</p>
    </div>
  );
}

export default MobileFooter;
