import React from 'react'
import "./css/footer.css"

function MobileFooter() {
  return (
    <div className="foot-container">
      <p><a href="/how-it-works"> How it works</a> </p>
      <p>Powered by LaLo Communities Nairobi. LaLo Communities 
        is wholly owned by NGENI  -  leading Web3 Engineering Group.</p>
      <p>&copy; {(new Date().getFullYear())} DianiApp</p>
    </div>
  )
}

export default MobileFooter