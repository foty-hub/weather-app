import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';
import DailyRow from "./components/DailyRow";
import CurrentDisplay from './components/CurrentDisplay';



const App = () => {

  // positive coords are N/E, negative are S/W
  const long = '51.5074';
  const lat = '-0.1278';
  const exampleReq = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const [currentInfo, setCurrent] = useState([]);
  const [currentDesc, setDesc] = useState([]);
  const [dailyTime, setDailyTime] = useState([]);
  const [dailyDesc, setDailyDesc] = useState([]);
  const [dailyMax, setDailyMax] = useState([]);
  const [dailyMin, setDailyMin] = useState([]);

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
    const dayArray = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // x1000 to convert form unix time to milliseconds
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
    setDailyTime( data.daily.map(x => dateString(x.dt)) );        // messy fix to prevent React throwing object assignment errors
    setDailyDesc( data.daily.map(x => x.weather[0].description) );
    setDailyMax( data.daily.map(x => Math.round(x.temp.max)) );
    setDailyMin( data.daily.map(x => Math.round(x.temp.min)) );
    console.log(data);
  };

  return(
    <div className="container">
        <CurrentDisplay temp = {Math.round(currentInfo.temp)} desc = {currentDesc} />
      <p className="subtitle">next 7 days</p>
      <div className="forecast">
        <DailyRow time = {dailyTime[1]} desc = {dailyDesc[1]} max = {dailyMax[1]} min = {dailyMin[1]}/>
        <DailyRow time = {dailyTime[2]} desc = {dailyDesc[2]} max = {dailyMax[2]} min = {dailyMin[2]}/>
        <DailyRow time = {dailyTime[3]} desc = {dailyDesc[3]} max = {dailyMax[3]} min = {dailyMin[3]}/>
        <DailyRow time = {dailyTime[4]} desc = {dailyDesc[4]} max = {dailyMax[4]} min = {dailyMin[4]}/>
        <DailyRow time = {dailyTime[5]} desc = {dailyDesc[5]} max = {dailyMax[5]} min = {dailyMin[5]}/>
        <DailyRow time = {dailyTime[6]} desc = {dailyDesc[6]} max = {dailyMax[6]} min = {dailyMin[6]}/>
        <DailyRow time = {dailyTime[7]} desc = {dailyDesc[7]} max = {dailyMax[7]} min = {dailyMin[7]}/>
      </div>
    </div>
  );
};

export default App;
