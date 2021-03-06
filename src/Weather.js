import React, { useState } from "react"
import "./Weather.css"
import WeatherInfo from "./WeatherInfo"  
import Forecast from "./Forecast"  
import axios from "axios"
import Loader from "react-loader-spinner";


export default function Weather(props){
    
const [weatherData, setWeatherData] = useState({ready:false})
const [city, setCity] = useState(props.defaultCity)

function handleResponse(response){
    setWeatherData({
        ready: true,
        coord: response.data.coord,
        temperature: response.data.main.temp,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
icon: response.data.weather[0].icon,

});
   
}

function search(){
let apiKey = "42dc95b568e6a420992a783aadcc5090";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function getLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position){
    console.log(position)
let apiKey = "42dc95b568e6a420992a783aadcc5090";
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
event.preventDefault();
search();
}


function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready) {


    return(
    <div className=" weather">
<form onSubmit={handleSubmit} className="mt-3 mb-2">
               <span className="search"><input type = "search" placeholder=" Search for a city..." autoFocus="on" onChange={handleCityChange} /></span>
       <span className="submit"><input type="submit" value="Search" className="btn" /></span>      
        <button onClick={getLocation} className="locationButton ms-1">????</button>
    </form>
     
    

    <WeatherInfo data={weatherData} />
     <Forecast coord={weatherData.coord} />
    </div>
    );
     } else {
    search();
    return (
      <Loader type="Grid" color="#f57ae9" height={100} width={100} className="loader" />
    );
      
   
}


}
