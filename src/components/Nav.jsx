import { useState } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import Pop from "./Pop";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  function set() {
    setIsOpen(true);
  }
  return (
    <div className="nav-main">
      <div className="Logo-container">
        <img src={logo} alt="Dianiapp" />
      </div>
      <div className="Links-container">
        <h5>Night Life</h5>
        <h5>Health</h5>
        <h5>Errands</h5>
        <h5>FX</h5>
        <h5>Activities</h5>
      </div>
      <div>
        <button className="Button-container" onClick={set}>
          Get Help
        </button>
        {isOpen && <Pop setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default Nav;
