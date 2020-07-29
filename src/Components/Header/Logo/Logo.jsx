import React from "react";

import classes from "./Logo.module.css";

function Logo() {
  return (
    <div style={{ cursor: "pointer" }} onClick={() => window.location.reload()}>
      <span className={classes.Logo}>
        <i className="fas fa-5x fa-sun"></i>
      </span>
      <span className={classes.Text}> iWeather</span>
    </div>
  );
}

export default Logo;
