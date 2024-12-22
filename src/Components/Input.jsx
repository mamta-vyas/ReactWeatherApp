
import { useWeather } from '../context/WeatherC'

const Input = () => {

    const weather = useWeather();
    console.log(weather);
  return (
    <div className='input'>
      <input 
      className='input-field'
     placeholder="Search Here"
      value ={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
       />
    </div>
  )
}

export default Input;
