import React from "react";

import classes from "./Day.module.css";

function Day({ day, uvIndex, min, max, humidity, icon, main }) {
  return (
    <div className={classes.Container}>
      <span className={classes.Header}>{day}</span>
      <span className={classes.Main}>{main}</span>
      <img
        className={classes.Icon}
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="icon"
      />
      <div className={classes.Container2}>
        <p className={classes.Temp} style={{ fontWeight: "600" }}>
          <span style={{ color: "#00b8ff" }}>{Math.round(min)}°c</span> -
          <span style={{ color: "#FF0000" }}> {Math.round(max)}°c</span>
        </p>

        <span>UV: {Math.round(uvIndex)}</span>

        <span>Humidity: {humidity}%</span>
      </div>
    </div>
  );
}

export default Day;
