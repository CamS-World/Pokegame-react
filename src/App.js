import "./App.css";

import React, { Component } from "react";

import Pokegame from "./Pokegame";

// import pokedex from "./Pokedex.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}

export default App;
