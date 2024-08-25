import React from "react";
import "../styles/Maincontent.css";
import Addfile from "./Addfile";
import Imagepreview from "./Imagepreview";

const Maincontent = () => {
  return (
    <div className="maincontent">
      <Imagepreview />
      <div className="content">
        <div className="heading-container">
          <p className="heading">Hop a ride with G.O.A.T</p>
          <p>We know it's your thalapathy too.</p>
        </div>
        <Addfile />
        <p className="hashtag">#Ridewiththalapathy</p>
      </div>
    </div>
  );
};

export default Maincontent;
