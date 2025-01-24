import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Child from "./Child";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import GameOfThronesCharacters from "./Effect/EffectsComponent";
import HomePage from "./HomePage/HomePage";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div>
      <header>
        <h1>This is React</h1>
        <Child person={person} />
        <MyStateComponent />
        <GameOfThronesCharacters />
      </header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="Props" element={<PropsComponent person={person} />} />
        <Route path="state" element={<MyStateComponent />} />
        <Route path="effect" element={<GameOfThronesCharacters />} />
      </Routes>
    </div>
  );
}

export default App;
