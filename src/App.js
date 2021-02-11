import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';



const App = () => {

  const APP_KEY = 'a7ff38ee1c49b77064c72f94875dcc9e';
  // positive coords are N/E, negative are S/W
  const long = '51.5074';
  const lat = '-0.1278';
  const exampleReq = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${APP_KEY}`;

  // stores the current information. Temperatures are given in Kelvin, so must be converted to Celsius
  const [currentInfo, setCurrent] = useState([]);

  // triggered on page load, will be set up to refresh when new location is added
  useEffect(() => {
    fetchData();
  }, []);

  // fetches and logs the data, updates the current info
  const fetchData = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setCurrent(data.current);
    console.log(data);
  };

  // returns the HTML to be displayed
  return (
    <div className="App">
      <h1>LONDON WEATHER</h1>
        <p>{Math.round(currentInfo.temp -273.15)} °C</p>
    </div>
  );
}

export default App;
