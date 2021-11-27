import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastDay(props){
function maxTemp(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`
}

function minTemp(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`
}

function formatDay(){
let date = new Date(props.data.dt * 1000);
let day = date.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
return days[day]; 

}

    return ( 
    <div>
    <div className="ForecastDay mb-1"><strong>{formatDay()}</strong></div> 
    <WeatherIcons code={props.data.weather[0].icon} size={50} /> 
    <div className="ForecastTemperatures mb-2"><span className="TemperatureMax">{maxTemp()}</span><span className="TemperatureMin">{minTemp()}</span></div>
    </div>
    )
}