import React from 'react';
import ReactWeather, {useOpenWeather} from 'react-open-weather'
import "./css/weather-body.css"

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const base_weather_uri = `https://api.openweathermap.org/data/2.5/weather?`

const lattitude =  4.2798
const longitude = 39.5947


const Weather = ({setIsOpen}) => {
  const {data, isLoading, errorMessage} = useOpenWeather({
    key: WEATHER_API_KEY,
    lat: lattitude,
    lon: longitude,
    lang: 'en',
    unit: 'metric',
  });
  return (
  <>
  <div className="weather-main-container">
    <div className="close"  onClick={() => setIsOpen(false)}>
      <h3>CLOSE</h3>
    </div>
     <ReactWeather
     isLoading={isLoading}
     errorMessage={errorMessage}
     onClick={!setIsOpen}
     data={data}
     lang="en"
     locationLabel="Diani"
     unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
     showForeCast
     />
     </div>
  </>
  )
}

export default Weather