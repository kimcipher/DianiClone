import React from 'react'
import "./css/footer.css"

function MobileFooter() {
  return (
    <div className="foot-container">
      <p> How it works </p>
      <p> LMG is wholly owned by NGENI🔥  -  Leading Web3 Engineering Group.</p>
      <p>&copy; {(new Date().getFullYear())} DianiApp</p>
    </div>
  )
}

export default MobileFooter