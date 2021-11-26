import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./Forecast.css"
import axios from "axios";


export default function Forecast(props){

    function handleResponse(response){
console.log(response.data)
    }

    console.log(props);

    let apiKey = "ff8c3d30b19a1ec2572571f024a657bd";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse)

    return( 
    <div className="Forecast">
        <hr/>
<div className="row">
<div className="col">
   <div className="ForecastDay mb-1"><strong>Sun</strong></div> 
    <WeatherIcons code="01d" size={50} /> 
    <div className="ForecastTemperatures mb-2"><span className="TemperatureMax">10°C </span><span className="TemperatureMin">5°C</span></div>
</div>
</div>
    </div>
    )
}