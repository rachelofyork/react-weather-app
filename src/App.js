import './App.css';
import Weather from "./Weather.js"


function App() {
  return (
    <div className="App mt-3">
     <div className = "container">
        
        <Weather />
      <footer>This project was coded by <a href="https://zen-visvesvaraya-696ae0.netlify.app/index.html" alt="Link to Rachel's portfolio" target="_blank" rel="noreferrer">Rachel Hollingworth</a> and is <a href="https://github.com/rachelofyork/react-weather-app" alt="Link to code on GitHub" target="_blank" rel="noreferrer">open-sourced</a> </footer>
     </div>
    </div>
    
  );
}


export default App;
