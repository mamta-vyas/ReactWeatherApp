import React, { useEffect } from 'react';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import { useWeather } from './context/WeatherC';

function App() {

  const weather = useWeather();
  console.log(weather)

  useEffect(() =>{
    weather.fetchCurrentUserLocationData();
  }
  ,[])
  // const refresh = () => {
  //   return weather.data = null;
  // }
  return (
    <div className="App">
   <div className='App-card'>
   <h1>Weather App</h1>
     <Input />
     <Button onClick={weather.fetchData} value="Search"/>
     <Card />
     <Button   value="Refresh"/>
   </div>

    </div>
  );
}

export default App;
