import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Weather app </h1>
      <Weather />
      <p>
        {" "}
        <a href="https://github.com/LSan14/my-react-app.git">Github</a>
      </p>
    </div>
  );
}

export default App;
