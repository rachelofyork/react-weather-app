import "./Weather.css"


export default function Weather(){
    return(
    <div className="weather">
<form>
        <div className="container">
           <div className="row">
                <div className="col-9"><input type = "search" placeholder="Search for a city..." /></div>
        <div className="col-3"><input type="submit" value="Search" className="btn" /></div>
           </div>
        </div>
    </form>
    
    <h1>London</h1>




    </div>

    )

    
}
