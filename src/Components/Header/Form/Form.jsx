import React, { useState, useContext } from "react";
import { Context } from "../../../Context";

import classes from "./Form.module.css";

function Form({ submit }) {
  function handleUserInput(input) {
    setUserInput((prevState) => {
      return { ...prevState, userInput: input };
    });
  }

  const { userInput, setUserInput } = useContext(Context);

  return (
    <div className={classes.Container}>
      <form className={classes.Form} onSubmit={submit}>
        <input
          className={classes.Input}
          onChange={(e) => handleUserInput(e.target.value)}
          type="text"
          placeholder="Enter Location"
        />
        <button className={classes.SubmitBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
