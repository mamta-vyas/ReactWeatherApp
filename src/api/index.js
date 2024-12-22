// import React from 'react'
const apiURL = "https://api.weatherapi.com/v1/current.json?key=6f979d469e86436495d103154242112";
export const getWeatherDataForCity  = async(city) => {
 const response = await fetch(`${apiURL}&q=${city}&aqi=yes`);
  return await response.json();
}

export const getWeatherDataForLocation  = async(lat ,lon) => {
  const response = await fetch(`${apiURL}&q=${lat},${lon}&aqi=yes`);
   return await response.json();
 }