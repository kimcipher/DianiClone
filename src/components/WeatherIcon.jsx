import React, {useState} from 'react'
import animation from "./assets/Weather.gif"
import Weather from "./Weather"
import "./css/weather.css"


function WeatherIcon() {
  const [isOpen, setIsOpen] = useState(false)
  function set() {
    setIsOpen(true)
  }
  return (
    <>
    <div onClick={set} className="weatherflex">
      <div className="weather">
        <img src={animation} alt="Animation weather" width={100}/>
      </div>
      <h3>Check Diani weather</h3>
    </div>
    {isOpen && <Weather setIsOpen={setIsOpen}/>}
    </>
  )
}

export default WeatherIcon