import React from "react";
import "./styles/App.css";
import Home from "../src/components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
