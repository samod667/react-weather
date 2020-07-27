import React from "react";
import classes from "./Loading.module.css";

function Loading() {
  return (
    <div className={classes.Container}>
      <div className={classes.Circle}></div>
      <div className={classes.Circle}></div>
      <div className={classes.Circle}></div>
    </div>
  );
}

export default Loading;
