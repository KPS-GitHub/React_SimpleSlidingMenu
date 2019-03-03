import React from "react";
import ReactDOM from "react-dom";

import MenuContainer from "./MenuContainer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MenuContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
