import React from "react";
import "../styles/Maincontent.css";
import Addfile from "./Addfile";
import Imagepreview from "./Imagepreview";

const Maincontent = ({ heading }) => {
  return (
    <div className="maincontent">
      <Imagepreview />
      <div className="content">
        <div className="heading-container">
          <p className="heading">{heading}</p>
          <p>We know it's your thalapathy too.</p>
        </div>
        <Addfile />
        <p className="hashtag">#Ridewiththalapathy</p>
      </div>
    </div>
  );
};

export default Maincontent;
