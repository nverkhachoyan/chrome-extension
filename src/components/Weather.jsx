import {useState, useEffect} from 'react'
import './Weather.css'


// https://api.weatherapi.com/v1/forecast.json?key=yourkey&q=${`${
//           position
//             ? position.coords.latitude + " " + position.coords.longitude
//             : input
//         }`}&days=3&aqi=yes&alerts=no`

function Weather({isShown}) {
    const [weatherData, setWeatherData] = useState(null)

    async function fetchWeatherData(city = 'Los Angeles') {
      try {
        // WEATHER_API_KEY
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=50aae4809eb94e328e241030221908&q=34.052235,-118.243683&aqi=yes&alerts=no`, {
          mode: 'cors'
        })
        const data = await response.json()
        setWeatherData(data)
      } catch(e) {
        console.error(e)
      }
    }

    useEffect(() => {
        fetchWeatherData()    
    }, [])

  return (
    <div 
    className='weather' 
    style={{
        transition: '0.3s ease-in-out',
        opacity: isShown ? 1 : 0}}>
        {weatherData && <h3 className='weather-description'>{weatherData.current.condition.text}</h3>}
        {weatherData && <img className='weather-description weather-icon' src={weatherData.current.condition.icon} />}

        {weatherData && <h3 className='weather-temp'>{Math.floor(weatherData.current.temp_f)} F</h3>}
    </div>
  )
}

export default Weather