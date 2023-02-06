import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";
function Forecast({ data }) {
  const WEEK_DAYS = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <label htmlFor="" className="title">
        {" "}
        Daily Forecast{" "}
      </label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label htmlFor="" className="days">
                    {forecastDays[index]}
                  </label>
                  <label htmlFor="" className="min-max-temp">
                    Max: {Math.round(item.main.temp_min)}&deg;C
                    / Min: {Math.round(item.main.temp_max)}
                    &deg;C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-forecast-grid">
              <div className="daily-forecast-grid-item">
                  <label htmlFor="">Overview</label>
                  <label htmlFor="">{item.weather[0].description}</label>
                </div>
                <div className="daily-forecast-grid-item">
                  <label htmlFor="">Feels Like</label>
                  <label htmlFor="">
                    {Math.round(item.main.feels_like)}&deg;C
                  </label>
                </div>
                <div className="daily-forecast-grid-item">
                  <label htmlFor="">Humidity</label>
                  <label htmlFor="">{item.main.humidity}%</label>
                </div>
                <div className="daily-forecast-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{Math.round(item.wind.speed)} Km/s</label>
                </div>
                <div className="daily-forecast-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{item.main.pressure} hPa</label>
                </div>
                

                <div className="daily-forecast-grid-item">
                  <label htmlFor="">Clouds</label>
                  <label htmlFor="">{item.clouds.all}</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
