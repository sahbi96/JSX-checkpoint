import React from "react";
import "./App.css";
import afterlife from "./afterlife.png";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Sahbi Noureddine</h1>
        <br />
        <img src={afterlife} width={800} height={500} />
        <br />
        <img src="/taleofus.jpg" width={500} height={300} />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
