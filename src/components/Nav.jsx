import { useState } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import Pop from "./Pop";
import AddToHomescreen from 'react-add-to-homescreen'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  function set() {
    setIsOpen(true);
  }
  const handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };
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
        {/* <h5><AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} /></h5> */}
      </div>
      <div>
        <button className="Button-container" onAddToHomescreenClick={handleAddToHomescreenClick}>
          Add to Home
        </button>
        {isOpen && <Pop setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}

export default Nav;
