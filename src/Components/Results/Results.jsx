import React, { useContext } from 'react'
import { Context } from "../../Context";

import DailyResults from './DailyResults/DailyResults'
import WeeklyResults from "./WeeklyResults/WeeklyResults";
import Loading from './Loading/Loading'

import classes from './Results.module.css'

function Results() {
    const { isLoading } = useContext(Context);
    return (
      <div className={classes.Container}>
        {isLoading.isLoading === true ? <Loading /> : null}
        <DailyResults />
        <WeeklyResults />
      </div>
    );
}

export default Results
