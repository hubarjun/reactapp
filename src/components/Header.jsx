import React from "react";
import "../styles/Header.css";
import agsLogo from "../assets/AGS Entertainment Logo HD.png";
import goatLogo from "../assets/GOAT Logo with AGS.png";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="logo1">
        <img
          id="ags-logo"
          onClick={() =>
            (window.location.href =
              "https://www.instagram.com/agsentertainment/")
          }
          src={agsLogo}
          alt="AGS Entertainment"
        />
      </div>
      <div className="logo2">
        <img id="goat-logo" src={goatLogo} alt="THE GOAT" />
      </div>
    </div>
  );
};

export default Header;
