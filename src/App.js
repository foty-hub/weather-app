import React, {useEffect, useState} from "react";
import './App.css';
import DailyRow from "./components/DailyRow";
import CurrentDisplay from './components/CurrentDisplay';
import image from './london-gradient.png';

const App = () => {

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
  const [currentIcon, setCurrentIcon] = useState();
  const [dailyIcons, setDailyIcons] = useState([]);
  const [placeID, setPlaceID] = useState("");

  // Triggered on page load, retriggers when the search is submitted
  useEffect(() => {
    makeRequests(searchValue);
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
    if (d > 3 && d < 21){return d+'<sup>th</sup>'};
    switch (d % 10){
      case 1: return d+'<sup>st</sup>';
      case 2: return d+'<sup>nd</sup>';
      case 3: return d+'<sup>rd</sup>';
      default: return d+'<sup>th</sup>';
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
    setCurrentIcon(data.current.weather[0].icon.substring(0, 2));
    setDailyIcons( data.daily.map(x => x.weather[0].icon.substring(0, 2)) );  // take substring to eliminate the day/night alt icons eg. 05n, 05d
    setDailyTime( data.daily.map(x => dateString(x.dt)) );                    // messy fix to prevent React throwing object assignment errors
    setDailyDesc( data.daily.map(x => x.weather[0].description) );
    setDailyMax( data.daily.map(x => Math.round(x.temp.max)) );
    setDailyMin( data.daily.map(x => Math.round(x.temp.min)) );
    console.log(data);
  };

  const getPicture = async (placeID) => {
    const detailsReq = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=AIzaSyCMCT2J6HObmXkBZiD-gMAdmucOoTXEn_U`;
    const detailsResponse = await fetch(detailsReq, {mode: 'no-cors'}).then(data => console.log(data));
    //const detailsData = await detailsResponse.json();
    //console.log(detailsData);
  };

  // Fetches and handles the GMaps API call, and calls fetchWeather upon successful return
  const makeRequests = async (locationString) => {
    const locReq = `https://maps.googleapis.com/maps/api/geocode/json?address=${locationString}&key=AIzaSyCMCT2J6HObmXkBZiD-gMAdmucOoTXEn_U`;
    const locResponse = await fetch(locReq);
    const locData = await locResponse.json();
    console.log(locData);
    
    let lat = "";
    let lng = "";

    switch(locData.status){

      // Handles callback status
      case "OK":
        lat = locData.results[0].geometry.location.lat;
        lng = locData.results[0].geometry.location.lng;
        setLocationDisplay(locData.results[0].formatted_address);
        localStorage.setItem("Location", searchValue);
        fetchWeather(lat, lng);
        getPicture(locData.results[0].place_id);
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
    <div className="londonimage" > 
      <img src={image} alt="london-image"/>
    </div>
    <div className="todaysforecast">
      <CurrentDisplay temp = {Math.round(currentInfo.temp)} desc = {currentDesc} location={locationDisplay} 
                                onSubmit={handleSubmit} onChange={handleChange} icon={currentIcon}/> 
      <p className="subtitle">next 7 days</p>
    </div>
    <div className="forecast">
        <DailyRow time = {dailyTime[1]} desc = {dailyDesc[1]} max = {dailyMax[1]} min = {dailyMin[1]} icon = {dailyIcons[1]}/>
        <DailyRow time = {dailyTime[2]} desc = {dailyDesc[2]} max = {dailyMax[2]} min = {dailyMin[2]} icon = {dailyIcons[2]}/>
        <DailyRow time = {dailyTime[3]} desc = {dailyDesc[3]} max = {dailyMax[3]} min = {dailyMin[3]} icon = {dailyIcons[3]}/>
        <DailyRow time = {dailyTime[4]} desc = {dailyDesc[4]} max = {dailyMax[4]} min = {dailyMin[4]} icon = {dailyIcons[4]}/>
        <DailyRow time = {dailyTime[5]} desc = {dailyDesc[5]} max = {dailyMax[5]} min = {dailyMin[5]} icon = {dailyIcons[5]}/>
        <DailyRow time = {dailyTime[6]} desc = {dailyDesc[6]} max = {dailyMax[6]} min = {dailyMin[6]} icon = {dailyIcons[6]}/>
        <DailyRow time = {dailyTime[7]} desc = {dailyDesc[7]} max = {dailyMax[7]} min = {dailyMin[7]} icon = {dailyIcons[7]}/>
    </div>
  </div>
  );
};

export default App;