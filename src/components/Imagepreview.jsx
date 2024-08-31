import React from "react";
import "../styles/Maincontent.css";
import reference from "../assets/Homepage reference.png";

const Imagepreview = ({ swappedImageUrl }) => {
  return (
    <>
      {/*  <div
        className="image-container"
        style={{
          backgroundImage: swappedImageUrl
            ? `url(${swappedImageUrl})`
            : `url(../assets/Homepage reference.png)`,
        }}
      ></div> */}
      <div className="image-container">
        <img
          id="Reference-image"
          src={swappedImageUrl ? swappedImageUrl : reference}
          alt="reference Image"
        />
      </div>
    </>
  );
};

export default Imagepreview;
