import React, { useState } from "react";
import { Context } from "../../Context";
import axios from "axios";

import Header from "../Header/Header";
import Results from "../Results/Results";
import ErrorMsg from "../Results/ErrorMsg/Error";
import Loading from '../Results/Loading/Loading'
import Footer from '../Footer/Footer'

import classes from "./Layout.module.css";

import { DataContext } from "../../DataContext";

function Layout() {
  const [userInput, setUserInput] = useState("");
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(false);

  //ON USER SUBMIT FUNCTION
  function handleUserRequest(e) {
    e.preventDefault();
    const API_KEY = "568850fc8ca011f081228dd677ed823f";
    const dailyURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.userInput}&units=metric&appid=${API_KEY}`;
    // const dailyURL = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${API_KEY}`;

    setShowResult(false);

    setIsLoading(true);
    let lat;
    let lon;
    //FETCH DAILY RESULTS
    axios
      .get(`${dailyURL}`)
      .then((res) => {
        // console.log(res.data);

        setError(false);

        setDailyWeather((prevState) => {
          return { ...prevState, dailyWeather: res.data };
        });
        lat = res.data.coord.lat;
        lon = res.data.coord.lon;
        //FETCH WEEKLY RESULTS
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`
          )
          .then((res) => {
            // console.log(res.data);
            setWeeklyWeather((prevState) => {
              return { ...prevState, weeklyWeather: res.data };
            });
          })
          .then(() => {
            setIsLoading(false);
            setShowResult(true);
          });
      })
      //STOP LOADING SCREEN AND DISPLAY RESULTS

      .catch((e) => {
        //HANDLE ERROR

        setIsLoading(false);
        handleError();
      });
  }

  //HANDLE ERROR FUNCTION
  function handleError() {
    setError((prev) => {
      return { ...prev, error: true };
    });
    setShowResult(false);
  }

  return (
    <div className={classes.Layout}>
      <Context.Provider value={{ userInput, setUserInput, isLoading }}>
        <Header submit={handleUserRequest} />

        <DataContext.Provider value={{ dailyWeather, weeklyWeather }}>
          {showResult ? <Results /> : null}
        </DataContext.Provider>
        {error ? <ErrorMsg /> : null}
        {isLoading ? <Loading /> : null}
      </Context.Provider>
      <Footer />
    </div>
  );
}

export default Layout;
