import React from "react";

export const TextArea = props => {
  const borderRadius = 3;
  const border = 0;
  const outline = "none";
  const width = "100%";
  const height = "13vh";
  return (
    <div style={{ width: "100%" }}>
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
      <div style={{ backgroundColor: "white", padding: 10, borderRadius }}>
        <textarea
          style={{
            backgroundColor: "transparent",
            border,
            padding: 0,
            outline,
            width,
            height,
            resize: "none",
            ...props.style
          }}
        >
          {props.children}
        </textarea>
      </div>
    </div>
  );
};
