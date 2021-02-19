import React from 'react';

let iconPairs = {
  "01d": "fa-sun",                      // clear sky
  "02d": "fa-cloud-sun",                // few clouds
  "03d": "fa-cloud",                    // scattered clouds
  "04d": "fa-cloud",                    // broken clouds
  "09d": "fa-cloud-sun-rain",           // shower rain
  "10d": "fa-cloud-showers-heavy",      // rain
  "11d": "fa-bolt",                     // thunderstorm
  "13d": "fa-snowflake",                // snow
  "50d": "fa-smog",                     // mist
};

const DailyRow = (props) => (
  <div className="forecast-row">
    <p className="date">{props.time}</p>
    <i className={"fas " + iconPairs[props.icon]}></i>
    <p className="desc">{props.desc}</p>
    <p className="morn-temp">{props.max}&#176;C</p>
    <p className="even-temp">{props.min}&#176;C</p>
  </div>
);

export default DailyRow