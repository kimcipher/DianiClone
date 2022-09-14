import {useState} from 'react'
import "./css/Nav.css"
import logo from "./assets/logo.png"
import Pop from "./Pop"

function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    function set(){
        setIsOpen(true)
    }
  return (
    <div className='nav-main'>
        <div className="Logo-container"><img src={logo} alt="Dianiapp"/></div>
        <div className="Links-container">
            <h5>Night Life</h5>
            <h5>Health</h5>
            <h5>Errands</h5>
            <h5>FTX</h5>
            <h5>VIP</h5>
        </div>
        <div className="Button-container">
            <button onClick={set}>Get Help</button>
            {isOpen && <Pop setIsOpen={setIsOpen}/>}
        </div>
    </div>
  )
}

export default Nav