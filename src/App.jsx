// import UilReact from '@iconscout/react-unicons/icons/uil-react'

import { useEffect, useState } from "react";
import Description from "./component/description";
import { getFromWeatherData } from "./weatherservies";

// import TopButton from './component/TopButton';
export default function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Paris")
  const [unit,setunit] = useState("metric")
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFromWeatherData(city,unit)
      setWeather(data);
    }
    fetchData()
  }, [unit,city]);
  const handleUnitClick = (e)=>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1)
    const isCelsius = currentUnit === "*C"
    button.innerText = isCelsius ? "*F" : "*C"
    setunit(isCelsius ? "metric " : "imperial")
  }
  const enterKeyPressed  = (e)=>{
    if(e.keyCode === 13){
      setCity(e.currentTarget.value)
    }
  }
  return (
    <div className='app' style={{ backgroundImage: "url(https://github.com/theyashpatel/yt-weather-app-react-custom-css/blob/main/src/assets/cold.jpg?raw=true)" }} >
      <div className="overlay">
        {
          weather && (
            <div className="container">
              <div className="section section__inputs">
                <input onKeyDown={enterKeyPressed} type="text" name='city' placeholder='Enter City...' />
                <button onClick={(e)=> handleUnitClick(e)}>*F</button>
              </div>
              <div className="section section__temperature">
                <div className='icon'>
                  <h3>{`${weather.name},${weather.country}`}</h3>
                  <img style={{ height: "50px" }} src={weather.iconUrl} alt="sun images" />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${weather.temp.toFixed()} ${unit === "metric" ? "C" : "F"}`}</h1>
                </div>
              </div>
              {/* bottom description */}
              <Description weather={weather} units={unit}/>
            </div>
          )
        }

      </div>
    </div>
  )
}
