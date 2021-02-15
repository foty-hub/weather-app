import React from 'react';

const DailyRow = (e) => (
  <div className="forecast-row">
    <p className="date">{e.time}</p>
    <p className="desc">{e.desc}</p>
    <p className="morn-temp">{e.max}&#8451;</p>
    <p className="even-temp">{e.min}&#8451;</p>
  </div>
);

export default DailyRow