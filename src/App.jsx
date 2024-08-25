import React from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ResultPage from "./pages/ResultPage";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:swapId" element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default App;
