import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  return (
    <>
      <div>
        <label htmlFor="emailInput">Your temporary email address</label>
        <div>
          <input id="emailInput" type="text" />
          <button>Copy</button>
        </div>
        <div>
          <span>Autorefresh in</span>
          <span>5</span>
          <span>Butao de refresh</span>
          <span>Refresh</span>
        </div>
      </div>
    </>
  );
}

export default App;
