import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'
import React from 'react' 
import "../Panel/css/main.css"

function Buy({currentAccount}) {
    new RampInstantSDK({ userAddress: currentAccount})
    console.log("######",currentAccount)
  return (
    <div>
        <form style={{}}>
            <input type="text" placeholder='Title' />
            <input type="text" placeholder='Category' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Buy