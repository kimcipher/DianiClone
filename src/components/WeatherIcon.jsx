import React, {useState} from 'react'
import animation from "./assets/weatha.gif"
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
    </div>
    {isOpen && <Weather setIsOpen={setIsOpen}/>}
    </>
  )
}

export default WeatherIcon