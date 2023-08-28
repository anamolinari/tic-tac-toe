import React, { useState } from "react";
import Player from "./components/Player";
import Game from "./components/Game";
import "./styles.css";

function App() {

  return (
    <div className="App">
      <Player />
      <Game />
    </div>
  );
};

export default App;

