import { useState, useEffect } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import Pop from "./Pop";
import AddToHomescreen from 'react-add-to-homescreen'

function Nav() {
  //   const [supportsPWA, setSupportsPWA] = useState(false)
  //   const [promptInstall, setPromptInstall] = useState(null)

  //   useEffect(() => {
  //     const handler = e => {
  //       e.preventDefault();
  //       console.log('we are being triggered');
  //       setSupportsPWA(true);
  //       setPromptInstall(e);
  //     };
  //     window.addEventListener("beforeinstallprompt", handler);

  //     return () => window.removeEventListener("transitioned", handler);
  //   }, []);

  //   const sample = evt => {
  //     evt.preventDefault();
  //     if(!promptInstall){
  //       return;
  //     }
  //     promptInstall.prompt();
  //   };
  //   if(!supportsPWA){
  //     return null;    
  // }
  return (
    <div className="nav-main">
      <div className="Logo-container">
        <img src={logo} alt="Dianiapp" />
      </div>
      <div className="Links-container">
        <a href="/"><h5>Popular</h5></a>
        <a href="/Wellness"><h5>Wellness</h5></a>
        <a href="/NightLife"><h5>Night Life</h5></a>
        <a href="/VIP"><h5>VIP</h5></a>
        <a href="/Activities"><h5>Activities</h5></a>
        {/* <h5><AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} /></h5> */}
      </div>
      <div>
        <button className="Button-container" >
            Add to Home
          </button>
      </div>
    </div>
  );
}

export default Nav;
