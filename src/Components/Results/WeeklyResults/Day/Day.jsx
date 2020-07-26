import React from 'react'

import classes from './Day.module.css'

function Day({day, uvIndex, min, max, humidity, icon, main}) {
    return (
      <div className={classes.Container}>
        <span className={classes.Header}>{day}</span>
        <span className={classes.Main}>{main}</span>
        <img
          className={classes.Icon}
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="icon"
        />
        <span className={classes.Temp}>
          {Math.round(min)}℃ - {Math.round(max)}℃
        </span><br/>
        <span>UV: {Math.round(uvIndex)}</span><br />
        <span>Humidity: {humidity}%</span>
      </div>
    );
}

export default Day
