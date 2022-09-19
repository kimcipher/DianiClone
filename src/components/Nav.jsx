import { useState, useEffect } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import Pop from "./Pop";
import AddToHomescreen from 'react-add-to-homescreen'

function Nav() {

      var deferredPrompt;
      window.addEventListener('beforeinstallprompt', function(e) {
        console.log('beforeinstallprompt Event fired');
        e.preventDefault();
    
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
    
        console.log(e)
      });
      const sample = (e) => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if(choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          }
          deferredPrompt = null;
        });
      }
      // if(deferredPrompt !== undefined) {
      //   // The user has had a postive interaction with our app and Chrome
      //   // has tried to prompt previously, so let's show the prompt.
      //   deferredPrompt.prompt();
    
      //   // Follow what the user has done with the prompt.
      //   deferredPrompt.userChoice.then(function(choiceResult) {
    
      //     console.log(choiceResult.outcome);
    
      //     if(choiceResult.outcome == 'dismissed') {
      //       console.log('User cancelled home screen install');
      //     }
      //     else {
      //       console.log('User added to home screen');
      //     }
    
      //     // We no longer need the prompt.  Clear it up.
      //     deferredPrompt = null;
      //   });
      // }
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
        <button className="Button-container">
            Add to Home
          </button>
      </div>
    </div>
  );
}

export default Nav;
