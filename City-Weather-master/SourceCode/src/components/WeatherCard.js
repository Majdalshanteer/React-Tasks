import React from "react";
import { Link } from "react-router-dom";

import "../style/WeatherCard.css";
import Weather_Icons from "../images/WeatherIcons.js";

function WeatherCard({
  Image,
  Temp,
  City,
  Country,
  Description,
  Wind_Speed,
  Humidity,
  Tempmax,
  Tempmin,
  Pressure,
  Pre,
}) {
  //date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //day
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];


  return (
      <div className="container">
        <div className="weather-side">
         
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname" id="dayName">
             {day}
            </h2>
            <span className="date-day" id="dayDate">
              {date}
            </span>
            <i className="location-icon" data-feather="map-pin"></i>
            <span className="location" id="location">
              {City},{Country}
            </span>
          </div>
          <div className="weather-container">
            <i className="weather-icon" data-feather="sun"></i>
            <div classNameName="Icon_Temp">
              <img style={{width:"60px"}} src={Weather_Icons[Image]} alt="Icon" />
            </div>
            <h1 className="weather-temp" id="tempC">
              {Temp} ℃
            </h1>
            <h3 className="weather-desc" id="weatherDesc">
              {Description}
            </h3>
          </div>
        </div>
        <div className="info-side">
          <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation" id="pressure">
                {" "}
                <span className="title">PRECIPITATION</span>
                <span className="value" id="percipitation">
                  {Pre} %
                </span>
                <div className="clear"></div>
              </div>
              <div className="humidity">
                {" "}
                <span className="title">HUMIDITY</span>
                <span className="value" id="humidity">
                  {Humidity} %
                </span>
                <div className="clear"></div>
              </div>
              <div className="wind">
                {" "}
                <span className="title">WIND</span>
                <span className="value" id="windSpeed">
                  {Wind_Speed} m/sec
                </span>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="week-container">
            <ul className="week-list">
              <li className="active">
                <i className="day-icon" data-feather="sun"></i>
                <span className="day-name">temp_min</span>
                <span className="day-temp" id="tempMin">
                  {Tempmin}℃
                </span>
              </li>
              <li>
                <i className="day-icon" data-feather="cloud"></i>
                <span className="day-name">temp_max</span>
                <span className="day-temp" id="tempMax">
                  {Tempmax} ℃
                </span>
              </li>
              <li>
                <i className="day-icon" data-feather="cloud-snow"></i>
                <span className="day-name">pressure</span>
                <span className="day-temp" id="pre">
                  {Pressure}mb
                </span>
              </li>

              <div className="clear"></div>
            </ul>
          </div>
          <div className="location-container">
            <button className="location-button">
              <Link to="/City-Weather">New Search</Link>
            </button>
          </div>
        </div>
      </div>
  
  );
}

export default WeatherCard;
