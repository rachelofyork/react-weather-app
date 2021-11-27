import React from "react";
import DateFormatted from "./DateFormatted" 
import WeatherIcons from "./WeatherIcons" 
import Temperature  from "./Temperature";

export default function WeatherInfo(props){

    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <h6 className="mb-3"> <DateFormatted  date={props.data.date}/></h6>

    <h4 className="mb-3 weatherDescription">{props.data.description}</h4>
    <div className="row mb-3">
        
        <div className="col-4 mt-3"> <WeatherIcons code={props.data.icon} alt={props.data.description} size={64}/> </div>
       <div className="col-4 temperature"><Temperature celsius={props.data.temperature}/> </div>
        <div className="col-4 weatherDetails pt-3"><strong>Humidity: {props.data.humidity}% <br />Wind: {Math.round(props.data.wind)}km/h </strong></div>

    </div>

    </div>
    

    )}