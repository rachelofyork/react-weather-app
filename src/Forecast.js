import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css"
import axios from "axios";


export default function Forecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
setLoaded(false)
    }, [props.coord]);

    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
    }

    
if (loaded){
    
    return( 
    <div className="Forecast">
        <hr/>
<div className="row">
    {forecast.slice(1, 6).map(function(eachDayForecast, index){

return (
    <div className="col" key={index}>
  <ForecastDay data={eachDayForecast} />
</div>
)
        
    })}


</div>
    </div>
    );
    }
    else {
     let apiKey = "42dc95b568e6a420992a783aadcc5090";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return null;
}
    
}
