import React from "react";
import wip from "./imgs/wip.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src={wip} alt="work-in-progress" />
        <p>... in progress ...</p>
      </div>
    </div>
  );
}

export default App;
