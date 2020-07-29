import React from "react";

function Error() {
  const style = {
    color: "red",
    textAlign: "center",
    border: "2px solid red",
    padding: "10px",
    fontSize: "14px",
  };

  return (
    <div style={style}>
      <h3>Something went wrong with your search...</h3>
      <h3>Please try again</h3>
    </div>
  );
}

export default Error;
