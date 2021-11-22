import React, { useState } from "react"
import "./Weather.css"
import WeatherInfo from "./WeatherInfo"  
import axios from "axios"


export default function Weather(props){
    
const [weatherData, setWeatherData] = useState({ready:false})
const [city, setCity] = useState(props.defaultCity)

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

function search(){
const apiKey = "ff8c3d30b19a1ec2572571f024a657bd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
    <div className="container weather">
<form onSubmit={handleSubmit} className="mt-3 mb-2">
               <span className="search"><input type = "search" placeholder=" Search for a city..." autoFocus="on" onChange={handleCityChange} /></span>
       <span className="submit"><input type="submit" value="Search" className="btn" /></span>
       <button className="currentLocation">Current Location</button>
           
        
    </form>
    

    <WeatherInfo data={weatherData} />
    </div>
    );
     } else {
    search();
    return "Loading...";
      
}
}
