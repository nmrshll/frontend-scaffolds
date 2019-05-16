import React from "react";
import { Counters } from "./components/molecules/Counter";
import "./styles/css/tailwind.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>

    <Counters />
  </div>
);

export default App;
