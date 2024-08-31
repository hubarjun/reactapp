import React, { Suspense, lazy } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";

const Home = lazy(() => import("./pages/Home"));
const ResultPage = lazy(() => import("./pages/ResultPage"));

const App = () => {
  return (
    <div className="app-container">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:swapId" element={<ResultPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
