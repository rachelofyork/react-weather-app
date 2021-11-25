import React from "react";
import DateFormatted from "./DateFormatted" 
import WeatherIcons from "./WeatherIcons" 

export default function WeatherInfo(props){

    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <h6 className="mb-3"> <DateFormatted  date={props.data.date}/></h6>

    <h4 className="mb-3 weatherDescription">{props.data.description}</h4>
    <div className="row mb-3">
        
        <div className="col-4"> <WeatherIcons code={props.data.icon} alt={props.data.description}/> </div>
        <div className="col-4 temperature"><span>{Math.round(props.data.temperature)}</span><span className="units"><a href="https://www.bbc.co.uk/news" alt="Convert to celsius" className="celsiusConversion">°C</a>|<a href="https://www.bbc.co.uk/news" alt="Convert to fahrenheit" className="fahrenheitConversion">°F</a></span></div>
        <div className="col-4 weatherDetails pt-2"><strong>Precipitation: tbc% <br /> Humidity: {props.data.humidity}% <br />Wind: {Math.round(props.data.wind)}km/h </strong></div>

    </div>

    </div>
    

    )
    }
    


