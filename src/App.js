import React from "react";
import "./App.css";

import Card from "./components/card";

function App() {
  return (
    <div className="cards-container">
      <Card name="Umair" age={25} />
      <Card name="Asad" age={15} />
      <Card name="Umair" age={55} />
      <Card name="Shani" age={25} />
      <Card name="ksn" age={35} />
      <Card name="Umair" age={25} />
      <Card name="sfs" age={25} />
      <Card name="Umair" age={25} />
      <Card name="Umair" age={25} />
      <Card name="Umair" age={25} />
    </div>
  );
}

export default App;
