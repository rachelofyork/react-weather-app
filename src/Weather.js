import React, { useState } from "react"
import "./Weather.css"
import DateFormatted from "./DateFormatted"  
import axios from "axios"


export default function Weather(props){
    
const [weatherData, setWeatherData] = useState({ready:false})

function handleResponse(response){
    console.log(response.data)
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
icon: "http://openweathermap.org/img/wn/01d@2x.png"

});
    
    
}

if (weatherData.ready) {


    return(
    <div className="container weather">
<form className="mt-3 mb-2">
               <span className="search"><input type = "search" placeholder=" Search for a city..." autoFocus="on" /></span>
       <span className="submit"><input type="submit" value="Search" className="btn" /></span>
       <button className="currentLocation">Current Location</button>
           
        
    </form>
    
    <h1>{weatherData.city}</h1>
    <h6 className="mb-3"> <DateFormatted  date={weatherData.date}/></h6>

    <h4 className="mb-3 weatherDescription">{weatherData.description}</h4>

    <div className="row mb-3">
        <div className="col-4"> <img src={weatherData.icon} alt={weatherData.description}/> </div>
        <div className="col-4 temperature"><span>{Math.round(weatherData.temperature)}</span><span className="units"><a href="https://www.bbc.co.uk/news" alt="Convert to celsius" className="celsiusConversion">°C</a>|<a href="https://www.bbc.co.uk/news" alt="Convert to fahrenheit" className="fahrenheitConversion">°F</a></span></div>
        <div className="col-4 weatherDetails pt-2"><strong>Precipitation: tbc% <br /> Humidity: {weatherData.humidity}% <br />Wind: {Math.round(weatherData.wind)}km/h </strong></div>

    </div>




    </div>

    )
    }

    else {
 const apiKey = "ff8c3d30b19a1ec2572571f024a657bd"
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)

    return "Loading..."
    }
    
}
