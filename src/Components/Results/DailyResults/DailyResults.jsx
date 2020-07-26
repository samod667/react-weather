import React, { useContext } from "react";

import classes from "./DailyResults.module.css";

import { DataContext } from "../../../DataContext";
import Header from "./Header/Header";
import Main from "./Main/Main";
import TableData from "./TableData/TableData";

function DailyResults() {
  const data = useContext(DataContext);

  const { dailyWeather } = data.dailyWeather;

  const { name } = dailyWeather;
  const { country } = dailyWeather.sys;
  const { feels_like, humidity, temp, temp_max, temp_min } = dailyWeather.main;
  const { main, icon } = dailyWeather.weather[0];

  return (
    <div className={classes.Container}>
      <Header location={name} country={country} />
      <Main
        description={main}
        icon={icon}
        temp={temp}
        name={name}
        country={country}
      />
      <TableData
        feelsLike={feels_like}
        tempMax={temp_max}
        tempMin={temp_min}
        humidity={humidity}
      />
    </div>
  );
}

export default DailyResults;
