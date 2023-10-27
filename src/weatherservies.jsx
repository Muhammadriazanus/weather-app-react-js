const API_KEY = "0e220abc423e08a415b86410cde97eb8";
const makeIconUrl = (iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFromWeatherData = async (city, units = "metric") => {
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    const data = await fetch(Url)
        .then((res) => res.json())
        .then((data) => data)
    const { weather,
         main:
          { 
            temp,
            feels_like, 
            temp_min,
            temp_max,
            pressure, 
            humidity 
        },
    wind:{speed},
    sys : {country},
    name,
    } = data
    const{description,icon} = weather[0]
    return{
        description,
        iconUrl:makeIconUrl(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name
    }
}
export { getFromWeatherData }