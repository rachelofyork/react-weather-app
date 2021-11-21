import "./Weather.css"


export default function Weather(){
    return(
    <div className="container weather">
<form className="mt-3 mb-2">
               <span className="search"><input type = "search" placeholder=" Search for a city..." autoFocus="on" /></span>
       <span className="submit"><input type="submit" value="Search" className="btn" /></span>
       <button className="currentLocation">Current Location</button>
           
        
    </form>
    
    <h1>London</h1>
    <h6 className="mb-3">Last updated: Sunday 18:32</h6>

    <h4 className="mb-3">Sunny</h4>

    <div className="row mb-3">
        <div className="col-4"> <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Weather icon"/> </div>
        <div className="col-4 temperature"><span>10</span><span className="units"><a href="#" alt="Convert to celsius" className="celsiusConversion">°C</a>|<a href="#" alt="Convert to fahrenheit" className="fahrenheitConversion">°F</a></span></div>
        <div className="col-4 weatherDetails pt-2"><strong>Precipitation: 20% <br /> Humidity: 69% <br />Wind: 10km/h </strong></div>

    </div>




    </div>

    )

    
}
