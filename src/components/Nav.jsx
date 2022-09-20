import { useState, useEffect } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import toast from "react-hot-toast";
import {addHome} from "./icons"

function Nav() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const addToHomeScreen = (e) => {
    e.preventDefault();
    if (promptInstall) {
      promptInstall.prompt();
    }
    if (!supportsPWA) {
      toast.error("PWA not supported");
    }
  };

  const currentTime = new Date().toLocaleTimeString();
  console.log(currentTime);
  const separator = "-"
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const today = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  return (
    <div className="nav-main">
      <div className="Logo-container">
        <img src={logo} alt="Dianiapp" />
      </div>
      <div className="Links-container">
        <a href="/">
          <h5>Popular</h5>
        </a>
        <a href="/Wellness">
          <h5>Wellness</h5>
        </a>
        <a href="/NightLife">
          <h5>Night Life</h5>
        </a>
        <a href="/VIP">
          <h5>VIP</h5>
        </a>
        <a href="/Activities">
          <h5>Tours + Activities</h5>
        </a>
      </div>
      <div className="date-time">
        <div className="time">
          <h3 style={{margin: "0px", fontSize:"20px", color:'#fff'}}>{currentTime}</h3>
        </div>
      </div>
      <div className="pwa-btn">
        {supportsPWA ? (
          <div onClick={(e) => addToHomeScreen(e)}>{addHome}</div>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
