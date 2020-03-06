import React from "react";
import HolaMundo from "./components/HolaMundo";
import Fondo from "./components/Fondo";

const App = () => {
  return (
    <div>
      <header>
        <HolaMundo></HolaMundo>
        <Fondo></Fondo>
      </header>
    </div>
  );
};

export default App;
