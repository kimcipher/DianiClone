import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./css/time-weather.css"

function Time() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  return <div className="time-weather"><div>{currentTime}</div></div>;
}

export default Time;
