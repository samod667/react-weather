import React, { useContext } from 'react'
import { Context } from "../../Context";

import DailyResults from './DailyResults/DailyResults'
import WeeklyResults from "./WeeklyResults/WeeklyResults";


import classes from './Results.module.css'

function Results() {
    
    return (
      <div className={classes.Container}>
        <DailyResults />
        <WeeklyResults />
      </div>
    );
}

export default Results
