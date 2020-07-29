import React from "react";
import { useSpring, animated } from "react-spring";

import DailyResults from "./DailyResults/DailyResults";
import WeeklyResults from "./WeeklyResults/WeeklyResults";

import classes from "./Results.module.css";

function Results() {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <animated.div className={classes.Container} style={fade}>
      <DailyResults />
      <WeeklyResults />
    </animated.div>
  );
}

export default Results;
