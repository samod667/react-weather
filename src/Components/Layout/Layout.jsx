import React, { useState } from "react";
import { Context } from "../../Context";
import axios from "axios";

import Header from "../Header/Header";
import Results from '../Results/Results' 
import ErrorMsg from '../Results/ErrorMsg/Error'

import classes from "./Layout.module.css";

import { DataContext } from '../../DataContext'
import DailyResults from "../Results/DailyResults/DailyResults";

function Layout() {
  const [userInput, setUserInput] = useState("");
  const [dailyWeather, setDailyWeather] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [error, setError] = useState(false)

  function handleUserRequest(e) {
    e.preventDefault();
    const API_KEY = "568850fc8ca011f081228dd677ed823f";
    const dailyURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.userInput}&units=metric&appid=${API_KEY}`;

    setShowResult(false)
    setIsLoading(() => ({ isLoading: true }))

    axios
      .get(`${dailyURL}`)
      .then((res) => {
        // console.log(res.data);
        
        setError(false)
        
        setDailyWeather((prevState) => {
          return { ...prevState, dailyWeather: res.data };
          
        });
        setIsLoading(() => ({ isLoading: false }));
        
       
      }).then(() => {
        setShowResult(true);
        
      })
      
      .catch((e) => {
        console.log(e)
        setIsLoading(() => ({ isLoading: false }));
        handleError()
      });
      
  }

  function handleError() {
    setError((prev) => {
      return ({...prev, error: true})
    })
    setShowResult(false)
  }

  return (
    <div className={classes.Layout}>
      <Context.Provider value={{ userInput, setUserInput, isLoading }}>
        <Header submit={handleUserRequest} />
        <DataContext.Provider value={dailyWeather}>
          {showResult ? <Results /> : null}
          
        </DataContext.Provider>
        {error ? <ErrorMsg /> : null}
      </Context.Provider>
    </div>
  );
}

export default Layout;
