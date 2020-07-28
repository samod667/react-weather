import React from "react";

// import classes from "./TableData.module.css";
import './TableData.css'

function TableData({ feelsLike, humidity, tempMin, tempMax }) {
  return (
    <div className="TableData">
      <table>
        <tbody>
          <tr className="tr">
            <td>Feels Like:</td>
            <td>{Math.round(feelsLike)} °c</td>
          </tr>
          <tr>
            <td>Max Temp:</td>
            <td>{Math.round(tempMax)} °c</td>
          </tr>
          <tr>
            <td>Min Temp:</td>
            <td>{Math.round(tempMin)} °c</td>
          </tr>
          <tr>
            <td>Humidity:</td>
            <td>{Math.round(humidity)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
