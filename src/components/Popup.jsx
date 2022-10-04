import React from 'react'
import "./css/popup.css"

const Popup = ({ setIsOpen }) => {
  return (
    <>
    <div className="slack">
      <h5 style={{color:'#fff'}}>DianiApp is now live<br/> Diani Digital Warriors</h5><div className='closer-con' onClick={() => setIsOpen(false)}><h5 className="closer" >+</h5></div>
    </div>
    </>
  )
}

export default Popup