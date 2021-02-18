import React from 'react';

const CurrentDisplay = (props) => (
    <div className="current-display">
        <h1 className="temp-today">{!isNaN(props.temp) ? props.temp : "loading..."}&#8451;</h1>
        <p className="desc-today">{props.desc}</p>
        <form onSubmit = {props.onSubmit}>
            <input type="text" autoComplete="off" className="search-bar" placeholder="eg... London, UK" onChange = {props.onChange}/>
        </form>
        <div className="location">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.4751 9.98256C19.4751 14.1151 12.4585 21.67 11.9926 21.9632C11.5267 22.2564 4.51001 14.1151 4.51001 9.98256C4.51001 5.85006 7.86007 2.5 11.9926 2.5C16.1251 2.5 19.4751 5.85006 19.4751 9.98256ZM14.4868 9.98256C14.4868 11.3601 13.3701 12.4767 11.9926 12.4767C10.6151 12.4767 9.49838 11.3601 9.49838 9.98256C9.49838 8.60506 10.6151 7.48837 11.9926 7.48837C13.3701 7.48837 14.4868 8.60506 14.4868 9.98256Z" fill="black"/></svg>
            <p className="city">{props.location}</p>
        </div>
    </div>
);

export default CurrentDisplay