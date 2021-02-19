import React from 'react';

let iconPairsDaily = {
  "01": "fa-sun",                      // clear sky
  "02": "fa-cloud-sun",                // few clouds
  "03": "fa-cloud",                    // scattered clouds
  "04": "fa-cloud",                    // broken clouds
  "09": "fa-cloud-sun-rain",           // shower rain
  "10": "fa-cloud-showers-heavy",      // rain
  "11": "fa-bolt",                     // thunderstorm
  "13": "fa-snowflake",                // snow
  "50": "fa-smog",                     // mist
};

const DailyRow = (props) => (
  <div className="forecast-row">
    <p className="date">{props.time}}</p>
    <i className={"fas " + iconPairsDaily[props.icon]}></i>
    <p className="desc">{props.desc}</p>
    <p className="morn-temp">{props.max}&#176;C</p>
    <p className="even-temp">{props.min}&#176;C</p>
  </div>
);

export default DailyRow