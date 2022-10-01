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
        <Payment/>
        
    </div>
  )
}

export default DefaultNav