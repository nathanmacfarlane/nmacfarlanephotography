import React, { useState } from "react";
import "./Button.css";

export const Button = props => {
  const [hover, setHover] = useState(false);
  const padding = "0.75vw 1vw 0.75vw 1vw";
  const border = "0.2vw solid white";
  const fontSize = "calc(9px + 0.3vw)";
  const backgroundColor = hover && props.canHover !== false ? "white" : "black";
  const color = hover && props.canHover !== false ? "black" : "white";
  const fontFamily = "Montserrat";
  return (
    <div
      style={{
        width: "calc(50px + 5vw)",
        border,
        fontSize,
        padding,
        margin: "1vw 0px 1vw 0px",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor,
        color,
        fontFamily,
        ...props.style
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};
