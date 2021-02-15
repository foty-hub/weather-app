import React from 'react';

const CurrentDisplay = (e) => (
    <div className="current-display">
        <h1 className="temp-today">{e.temp}&#8451;</h1>
        <p className="desc-today">{e.desc}</p>
        <div className="location">
            <img src="./location-icon.svg" alt="location-icon"/>
            <p className="city">London, UK</p>
            <a href="#">Change Location</a>
        </div>
    </div>
);

export default CurrentDisplay