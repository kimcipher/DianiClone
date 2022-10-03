import React from 'react'
import "./css/DefaultNav.css"
import Time from "./Time"
import Payment from "./Payment"
import WeatherIcon from './WeatherIcon'

function DefaultNav() {

  return (
    <div className="def-nav-main">
        <Time/>
        <WeatherIcon/>
        <h4>Accepted</h4>
        <Payment/>
        
    </div>
  )
}

export default DefaultNav