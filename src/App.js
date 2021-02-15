import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';



const App = () => {

  const APP_KEY = 'a7ff38ee1c49b77064c72f94875dcc9e';
  // positive coords are N/E, negative are S/W
  const long = '51.5074';
  const lat = '-0.1278';
  const exampleReq = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${APP_KEY}`;

  // stores the current information. Temperatures are given in Kelvin, so must be converted to Celsius
  const [currentInfo, setCurrent] = useState([]);
  const [currentDesc, setDesc] = useState([]);
  const [dailyInfo, setDaily] = useState([]);
  //const nextDay = new Date();

  // triggered on page load, will be set up to refresh when new location is added
  useEffect(() => {
    fetchData();
  }, []);

  function nth(d) {
    if (d > 3 && d < 21){return d+'th'};
    switch (d % 10){
      case 1: return d+'st';
      case 2: return d+'nd';
      case 3: return d+'rd';
      default: return d+'th';
    };
  };

  function dateString(dt){
    // x1000 to convert form unix time to milliseconds
    const dayArray = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const dateTime = new Date(dt*1000);
    const dayIndex = dateTime.getDay();
    const dateVal = nth(dateTime.getDate());
    const month = dateTime.getMonth();
    return `${dayArray[dayIndex]} ${dateVal} ${monthArray[month]}`;
  }

  // fetches and logs the data, updates the current info
  const fetchData = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setCurrent(data.current);
    setDesc(data.current.weather[0].description);
    setDaily( data.daily.map(x => dateString(x.dt)) );
    console.log(data);
    console.log(dailyInfo);
  };

  // can and should make a more elegant way of returning all the daily information
  return(
    <div className="container">
      <h1 className="temp-today">{Math.round(currentInfo.temp)}&#8451;</h1>
      <p className="desc-today">{currentDesc}</p>
      <div className="location">
        <img src="location-icon.svg" alt="location-icon"/>
        <p className="city">London, UK</p>
        <a href="#">Change Location</a>
      </div>
      <p className="subtitle">next 7 days</p>
      <div className="forecast">
        <div className="forecast-row">
          <p className="date">{dailyInfo[1]}</p>
          <p className="desc">Cloudy</p>
          <p className="morn-temp">1&#8451;</p>
          <p className="even-temp">-2&#8451;</p>
        </div>
        <div className="forecast-row">
          <p className="date">{dailyInfo[2]}</p>
          <p className="desc">Cloudy</p>
          <p className="morn-temp">1&#8451;</p>
          <p className="even-temp">-2&#8451;</p>
        </div>
        <div className="forecast-row">
          <p className="date">{dailyInfo[3]}</p>
          <p className="desc">Cloudy</p>
          <p className="morn-temp">1&#8451;</p>
          <p className="even-temp">-2&#8451;</p>
        </div>
        <div className="forecast-row">
          <p className="date">{dailyInfo[4]}</p>
          <p className="desc">Cloudy</p>
          <p className="morn-temp">1&#8451;</p>
          <p className="even-temp">-2&#8451;</p>
        </div>
        <div className="forecast-row">
          <p className="date">{dailyInfo[5]}</p>
          <p className="desc">Cloudy</p>
          <p className="morn-temp">1&#8451;</p>
          <p className="even-temp">-2&#8451;</p>
        </div>
        <div className="forecast-row">
          <p className="date">{dailyInfo[6]}</p>
          <p className="desc">Cloudy</p>
          <p className="morn-temp">1&#8451;</p>
          <p className="even-temp">-2&#8451;</p>
        </div>
        <div className="forecast-row">
          <p className="date">{dailyInfo[7]}</p>
          <p className="desc">Cloudy</p>
          <p className="morn-temp">1&#8451;</p>
          <p className="even-temp">-2&#8451;</p>
        </div>
      </div>
    </div>
  );
}

export default App;
