import React from 'react'

import classes from './Main.module.css'

function Main({ description , icon, temp}) {
  return (
    <div className={classes.Main}>
      <span className={classes.Description}>{description}</span>
      <img
        className={classes.Icon}
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="icon"
      />
      <span className={classes.Temp}>{Math.round(temp)} °c</span>
    </div>
  );
}

export default Main
