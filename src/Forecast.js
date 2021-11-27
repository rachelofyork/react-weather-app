import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css"
import axios from "axios";


export default function Forecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
    }

    
if (loaded){
    
    return( 
    <div className="Forecast">
        <hr/>
<div className="row">
<div className="col">
  <ForecastDay data={forecast[0]} />
</div>
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
