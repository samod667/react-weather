import React, { useContext } from "react";
import moment from "moment";

import Day from "./Day/Day";
import { DataContext } from "../../../DataContext";

import classes from "./WeeklyResults.module.css";

function WeeklyResults() {
  const data = useContext(DataContext);
  const { weeklyWeather } = data.weeklyWeather;
  const { daily } = weeklyWeather;

  const day = daily.map((day, i) => {
    const { min, max } = day.temp;
    const { humidity, uvi } = day;
    const { main, icon } = day.weather[0];

    const date = moment().add(i, "d").format("dddd");

    if (i === 0 || i === 7) {
      return null;
    } else {
      return (
        <Day
          key={i}
          day={date}
          min={min}
          max={max}
          humidity={humidity}
          uvIndex={uvi}
          icon={icon}
          main={main}
        />
      );
    }
  });

  return <div className={classes.Container}>{day}</div>;
}

export default WeeklyResults;
