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
        <a href="/"><h5>Popular</h5></a>
        <a href="/Wellness"><h5>Wellness</h5></a>
        <a href="/NightLife"><h5>Night Life</h5></a>
        <a href="/Tours"><h5>VIP</h5></a>
        <a href="/VIP"><h5>Tours</h5></a>
        <a href="/Activities"><h5>Activities</h5></a>
        {/* <h5><AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} /></h5> */}
      </div>
      <div>
        <button className="Button-container" onClick={handleAddToHomescreenClick}>
            Add to Home
          </button>
      </div>
    </div>
  );
}

export default Nav;
