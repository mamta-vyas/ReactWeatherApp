import React from 'react'
import { useWeather } from '../context/WeatherC'
const Card = () => {
    const weather = useWeather();
  return (
    <div>
        <img src={weather?.data?.condition?.icon} alt="weather-img" />
     <p>{weather?.data?.location?.name} {" -> "} {weather?.data?.location?.region} {"->"} {weather?.data?.location?.country}</p>
     <p>{weather?.data?.current?.temp_c} C</p>
     <p>{weather?.data?.condition?.text}</p>
     <p>{weather?.data?.current?.pm10}</p>
    
    </div>
  )
}

export default Card
