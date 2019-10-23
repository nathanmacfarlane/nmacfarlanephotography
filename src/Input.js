import React from "react";

export const Input = props => {
  const width = props.width || "80%";
  const height = props.height || "calc(12px + 3vh)";
  const borderRadius = 3;
  const border = 0;
  const padding = "0px 1vw 0px 1vw";
  const outline = "none";
  return (
    <div>
      {props.title && (
        <div
          style={{
            padding: "0.5vw 0px 0.5vw 0px",
            fontSize: "calc(12px + 0.5vw)"
          }}
        >
          {props.title} {props.required && <>*</>}
          <br />
        </div>
      )}
      <div style={{ backgroundColor: "white", padding, borderRadius }}>
        <input
          placeholder={props.placeholder}
          style={{
            backgroundColor: "transparent",
            width,
            height,
            border,
            padding: 0,
            outline,
            ...props.style
          }}
        />
      </div>
    </div>
  );
};
