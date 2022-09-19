import React, {useState, useEffect} from 'react';
import ReactWeather, {useOpenWeather} from 'react-open-weather'

const WEATHER_API_KEY = "0bff0698379b96eaf19daa753dfa7f0d"
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
     <ReactWeather
     isLoading={isLoading}
     errorMessage={errorMessage}
     data={data}
     lang="en"
     locationLabel="Diani"
     unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
     showForeCast
     />
  </>
  )
}

export default Weather