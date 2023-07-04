import "./App.css";
import React from "react";
import Hero from "./Hero";
import TextState from "./context/textState";

function App() {
  return (
    <>
      <TextState>
        <Hero />
      </TextState>
    </>
  );
}

export default App;
