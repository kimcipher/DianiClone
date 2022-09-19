import React from 'react'
import {TypeAnimation } from 'react-type-animation'

function Type() {
  return (
    <>
    
    <h2 style={{ marginTop:'20px',fontSize:'36px'}}>
      <TypeAnimation
        sequence={[
          'Deliveries on Tap', // Types 'One'
          3000, // Waits 1s
          'Anything', // Deletes 'One' and types 'Two'
          3000, // Waits 2s
          '...', // Types 'Three' without deleting 'Two'
          () => { // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
         style={{ lineHeight: '1.5' }}
      />
      </h2>
      <h3 style={{ color:'#EA6CFB', fontSize:'18px'}}>One Tap, One App, 24/7.</h3>
      </>
  )
}

export default Type