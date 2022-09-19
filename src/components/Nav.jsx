import { useState, useEffect } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import toast from "react-hot-toast";

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
          <h5>Activities</h5>
        </a>
      </div>
      <div>
        {supportsPWA ? (
          <button
            className="Button-container"
            onClick={(e) => addToHomeScreen(e)}
          >
            Add to Home
          </button>
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default Nav;
