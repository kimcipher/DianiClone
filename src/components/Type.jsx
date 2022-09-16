import React from 'react'
import {TypeAnimation } from 'react-type-animation'

function Type() {
  return (
    <>
    
    <h2>
      <TypeAnimation
        sequence={[
          'Deliveries on Tap', // Types 'One'
          3000, // Waits 1s
          'Anything', // Deletes 'One' and types 'Two'
          3000, // Waits 2s
          '...', // Types 'Three' without deleting 'Two'
          () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
         style={{ lineHeight: '1.5' }}
      />
      </h2>
      <h3>Welcome to DianiApp</h3>
      
      </>
  )
}

export default Type