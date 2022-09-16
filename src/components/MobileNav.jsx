import React from 'react'
import "./css/footer.css"

function MobileNav() {
  return (
    <div className="nav-mobile-container">
        <a href="/"><h5>Popular</h5></a>
        <a href="/Wellness"><h5>Wellness</h5></a>
        <a href="/NightLife"><h5>Night Life</h5></a>
        <a href="/Tours"><h5>VIP</h5></a>
        <a href="/VIP"><h5>Tours</h5></a>
        <a href="/Activities"><h5>Activities</h5></a>
    </div>
  )
}

export default MobileNav