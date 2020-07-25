import React, { useContext, useEffect } from "react";

import classes from "./DailyResults.module.css";

import { DataContext } from "../../../DataContext";

function DailyResults() {
  const { dailyWeather } = useContext(DataContext);
  console.log(dailyWeather);
  const { name } = dailyWeather;
  const { feels_like, humidity, temp } = dailyWeather.main;
  const {main, icon} = dailyWeather.weather[0];

  return (
    <div className={classes.Container}>
      <h3>Weather in {name}</h3>

      <img
        className={classes.Icon}
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="icon"
      />
      <span className={classes.Description}>{main}</span>
      <span className={classes.Temp}>{Math.round(temp)} C</span>
    </div>
  );
}

export default DailyResults;
