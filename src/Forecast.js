import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./Forecast.css"


export default function Forecast(){
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