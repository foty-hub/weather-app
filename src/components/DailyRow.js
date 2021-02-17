import React from 'react';

const DailyRow = (props) => (
  <div className="forecast-row">
    <p className="date">{props.time}</p>
    <p className="desc">{props.desc}</p>
    <p className="morn-temp">{props.max}&#8451;</p>
    <p className="even-temp">{props.min}&#8451;</p>
  </div>
);

export default DailyRow