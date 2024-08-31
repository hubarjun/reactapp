import React from "react";
import "../styles/Loadingpage.css";
import loaderAgsLogo from "../assets/AGS Entertainment Logo HD.png";

const LoadingPage = () => {
  return (
    <div id="loading-screen">
      <img src={loaderAgsLogo} alt="Ags Entertainment" />
      <div className="loader"></div>
    </div>
  );
};

export default LoadingPage;
