import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather({data}) {
  return (
    <div className="current-weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" />
      </div>

      <div className="bottom">
        <p className="temparature"> {Math.round(data.main.temp)}&deg;C </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label heading"> Details </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Feels Like </span>
            <span className="parameter-values"> {Math.round(data.main.feels_like)}&deg;C </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Wind Speed</span>
            <span className="parameter-values"> {Math.round(data.wind.speed)} Km/s </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label"> Humidity </span>
            <span className="parameter-values"> {data.main.humidity}% </span>
          </div>
        </div>
      </div>
    </div>
  );
}
