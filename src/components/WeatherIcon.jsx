import React, {useState} from 'react'
import Weather from "./Weather"
import "./css/weather.css"
import {weather} from "./icons"


function WeatherIcon() {
  const [isOpen, setIsOpen] = useState(false)
  function set() {
    setIsOpen(true)
  }
  return (
    <>
    <div onClick={set} className="weatherflex">
      <div className="weather">
        {weather}
      </div>
    </div>
    {isOpen && <Weather setIsOpen={setIsOpen}/>}
    </>
  )
}

export default WeatherIcon