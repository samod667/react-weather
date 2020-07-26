import React, { useContext } from "react";
import Moment from 'react-moment'

import Day from "./Day/Day";
import { DataContext } from "../../../DataContext";

import classes from "./WeeklyResults.module.css";

function WeeklyResults() {
  const data = useContext(DataContext);
  const { weeklyWeather } = data.weeklyWeather;
  const { daily } = weeklyWeather;
  console.log(daily);

  const day = daily.map((day, i) => {
    if (i === 0 || i === 7) {
      return null;
    } else if (i === 1) {
        return <Day day='Tomorrow'/>
    } else {
      return <Day className={classes.Container} day='Day' uvIndex={day.uvi} />;
    }
  });

  return <div className={classes.Container}>{day}</div>;
}

export default WeeklyResults
