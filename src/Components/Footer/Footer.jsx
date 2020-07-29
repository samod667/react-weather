import React from "react";

function Footer() {
  const style = {
    position: "fixed",
    bottom: "0",
    left: "0",
    fontSize: "12px",
    color: "white",
    textAlign: "left",
    padding: "0",
    margin: "0 0 0 5px",
  };

  return (
    <React.Fragment>
      <p style={style}>
        by dor sam{" "}
        <span role="img" aria-label="dragon">
          🐲
        </span>
      </p>
    </React.Fragment>
  );
}

export default Footer;
