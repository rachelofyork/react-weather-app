import React, { useState } from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("celsius")

    function convertToFahrenheit(event){
        event.preventDefault()
        setUnit("fahrenheit")
    }

    function convertToCelsius(event){
        event.preventDefault()
        setUnit("celsius")
    }

    if (unit === "celsius") { 
    return (
        <div className="Temperature">
<span>{Math.round(props.celsius)}</span>
        <span className="units">°C|<a href="/" onClick={convertToFahrenheit} alt="Convert to fahrenheit" className="fahrenheitConversion">°F</a></span>

        </div>
        )
    }
    else {
        return (<div className="Temperature">
<span>{Math.round(props.celsius *9/5)+32}</span>
        <span className="units"><a href="/" onClick={convertToCelsius} alt="Convert to celsius" className="celsiusConversion">°C</a>|°F</span>

        </div>)
    }
}