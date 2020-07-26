import React, { useContext } from "react";
import Moment from "react-moment";

import Day from "./Day/Day";
import { DataContext } from "../../../DataContext";

import classes from "./WeeklyResults.module.css";

function WeeklyResults() {
  const data = useContext(DataContext);
  const { weeklyWeather } = data.weeklyWeather;
  const { daily } = weeklyWeather;
  console.log(daily);

  const day = daily.map((day, i) => {
    const { min, max } = day.temp;
    const { humidity, uvi } = day;
    const { main, icon } = day.weather[0];

    if (i === 0 || i === 7) {
      return null;
    } else if (i === 1) {
      return (
        <Day
          key={i}
          day="Tomorrow"
          min={min}
          max={max}
          humidity={humidity}
          uvIndex={uvi}
          icon={icon}
          main={main}
        />
      );
    } else {
      return (
        <Day
          key={i}
          day="Day"
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
