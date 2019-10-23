import React, { useState, useEffect } from "react";
import "./App.css";
import { Image } from "./Image";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

function App() {
  const [page, setPage] = useState("About");
  const [landscape, setLandscape] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", resized);
    resized();
  }, []);

  const resized = () => {
    if (window.innerWidth < window.innerHeight) {
      setLandscape(false);
    } else {
      setLandscape(true);
    }
  };

  const leftStyles = {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const about = (
    <div style={leftStyles}>
      <div
        style={{
          textAlign: "center",
          padding: "7vw",
          width: "100%"
        }}
      >
        <h3 style={{ fontSize: "calc(12px + 0.5vw)" }}>NATHAN MACFARLANE</h3>
        <h1 style={{ fontSize: "calc(12px + 4vw)" }}>
          Photographer // Developer
        </h1>
        <p style={{ fontFamily: "Montserrat", fontSize: "calc(12px + 0.5vw)" }}>
          SLO Native, Outdoor enthusiast, Ironman finisher, Caramel latte lover,
          Cal Poly SLO Alumni, Product engineer at Ridgeline Apps
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            title="INQUIRES"
            onClick={() => setPage("Inquires")}
            style={{ margin: 5 }}
          />
          <Button
            title="INSTAGRAM"
            onClick={() =>
              window.open("https://www.instagram.com/natey_mac", "_blank")
            }
            style={{ margin: 5 }}
          />
          <Button title="LR PRESETS" style={{ margin: 5 }} />
        </div>
      </div>
    </div>
  );

  const inquires = (
    <div style={leftStyles}>
      <div style={{ width: "70%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h2 style={{ fontSize: "calc(12px + 1vw)" }}>CONTACT</h2>
        </div>
        <Input title="Name" required={true} />
        <Input title="Email" required={true} />
        <TextArea title="Message" required={true} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button title="SUBMIT" />
          <Button title="CANCEL" onClick={() => setPage("About")} />
        </div>
      </div>
    </div>
  );

  return landscape ? (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh"
      }}
    >
      <div style={{ width: "50%", height: "100%" }}>
        {page === "About" ? about : inquires}
      </div>
      <div style={{ width: "50%" }}>
        <Image />
      </div>
    </div>
  ) : (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "50%" }}>{page === "About" ? about : inquires}</div>
      <div style={{ height: "50%" }}>
        <Image />
      </div>
    </div>
  );
}

export default App;
