import React from "react";
import "../styles/Header.css";
import agsLogo from "../assets/AGS Logo.png";
import goatLogo from "../assets/GOAT Logo.png";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="logo1">
        <img id="ags-logo" src={agsLogo} alt="AGS Entertainment" />
      </div>
      <div className="logo2">
        <img id="goat-logo" src={goatLogo} alt="THE GOAT" />
      </div>
    </div>
  );
};

export default Header;
