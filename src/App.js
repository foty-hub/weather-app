import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';
import DailyRow from "./components/DailyRow";
import CurrentDisplay from './components/CurrentDisplay';

const App = () => {

  // positive coords are N/E, negative are S/W
  const long = '51.5074';
  const lat = '-0.1278';
  let locationSearch = "";
  if (localStorage.getItem("Location")){
   locationSearch = localStorage.getItem("Location");
  }
  else {
    locationSearch = "london, uk"; // default fallback value if nothing is locally stored
  }
  
  const [currentInfo, setCurrent] = useState([]);
  const [currentDesc, setDesc] = useState([]);
  const [dailyTime, setDailyTime] = useState([]);
  const [dailyDesc, setDailyDesc] = useState([]); 
  const [dailyMax, setDailyMax] = useState([]);
  const [dailyMin, setDailyMin] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [searchValue, setSearchValue] = useState(locationSearch);
  const [locationDisplay, setLocationDisplay] = useState();

  // Triggered on page load, will be set up to refresh when new location is added
  useEffect(() => {
    makeRequests(searchValue);
    localStorage.setItem("Location", searchValue);
  }, [searchValue]);

  // Handles text submission and triggers useEffect, making the API calls
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchValue(inputValue);
  };

  // Handles text input to the main search bar
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  // Returns the correct suffix for ordinal numbers (7th, 1st, 3rd)
  const nth = (d) => {
    if (d > 3 && d < 21){return d+'th'};
    switch (d % 10){
      case 1: return d+'st';
      case 2: return d+'nd';
      case 3: return d+'rd';
      default: return d+'th';
    };
  };

  // Converts javascript date strings to a more readable format
  const dateString = (dt) => {
    const dayArray = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // x1000 to convert form unix time to milliseconds
    const dateTime = new Date(dt*1000);
    const dayIndex = dateTime.getDay();
    const dateVal = nth(dateTime.getDate());
    const month = dateTime.getMonth();
    return `${dayArray[dayIndex]} ${dateVal} ${monthArray[month]}`;
  }

  // Fetches and handles openweathermap API call, updating hooks
  const fetchWeather = async (lat, lng) => {
    const weatherReq = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=a7ff38ee1c49b77064c72f94875dcc9e`;
    const weatherResponse = await fetch(weatherReq);
    const data = await weatherResponse.json();
    setCurrent(data.current);
    setDesc(data.current.weather[0].description);
    setDailyTime( data.daily.map(x => dateString(x.dt)) );        // messy fix to prevent React throwing object assignment errors
    setDailyDesc( data.daily.map(x => x.weather[0].description) );
    setDailyMax( data.daily.map(x => Math.round(x.temp.max)) );
    setDailyMin( data.daily.map(x => Math.round(x.temp.min)) );
    console.log(data);
  };

  // Fetches and handles the GMaps API call, and calls fetchWeather upon successful return
  const makeRequests = async (locationString) => {
    const locReq = `https://maps.googleapis.com/maps/api/geocode/json?address=${locationString}&key=AIzaSyCMCT2J6HObmXkBZiD-gMAdmucOoTXEn_U`;
    const locResponse = await fetch(locReq);
    const locData = await locResponse.json();
    let lat = "";
    let lng = "";

    switch(locData.status){
      case "OK":
        lat = locData.results[0].geometry.location.lat;
        lng = locData.results[0].geometry.location.lng;
        setLocationDisplay(locData.results[0].formatted_address);
        fetchWeather(lat, lng);
        break;
      case "ZERO_RESULTS":
        alert("No matching address found");
        break;
      case "INVALID_REQUEST":
        alert("Invalid request");
        break;
      case "OVER_DAILY_LIMIT":
      case "OVER_QUERY_LIMIT":
      case "REQUEST_DENIED":
      case "INVALID_REQUEST":
        alert("API request failed");
        break;
      default:
        alert("Unknown error occurred");
    }
  };

  return(
    <div className="container">
        <CurrentDisplay temp = {Math.round(currentInfo.temp)} desc = {currentDesc} onSubmit = {handleSubmit} onChange = {handleChange} location = {locationDisplay}/>
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