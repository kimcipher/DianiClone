import React from 'react'
import "./css/footer.css"
import {NavLink} from "react-router-dom"
function MobileNav() {
  return (
    <nav>
    <div className="nav-mobile-container">
      
        <NavLink to="/" activeclassname='active'><h5 className="flex">⭐ Popular</h5></NavLink>
        <NavLink to="/Wellness" activeclassname='active'><h5>Wellness</h5></NavLink>
        <NavLink to="/NightLife" activeclassname='active'><h5>Night Life</h5></NavLink>
        {/* <a href="/Tours"><h5>VIP</h5></a> */}
        <NavLink to="/VIP" activeclassname='active'><h5>VIP</h5></NavLink>
        <NavLink to="/Activities" activeclassname='active'><h5>Tours + Activities</h5></NavLink>
      
    </div>
    </nav>
  )
}

export default MobileNav