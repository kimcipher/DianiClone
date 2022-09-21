import React from 'react'
import "./css/footer.css"

function MobileNav() {
  return (
    <div className="nav-mobile-container">
        <a href="/" activeClassName='active'><h5 className="flex">⭐ Popular</h5></a>
        <a href="/Wellness" activeClassName='active'><h5>Wellness</h5></a>
        <a href="/NightLife" activeClassName='active'><h5>Night Life</h5></a>
        {/* <a href="/Tours"><h5>VIP</h5></a> */}
        <a href="/VIP" activeClassName='active'><h5>VIP</h5></a>
        <a href="/Activities" activeClassName='active'><h5>Tours + Activities</h5></a>
    </div>
  )
}

export default MobileNav