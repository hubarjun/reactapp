import React from "react";
import "../styles/Maincontent.css";

const Imagepreview = ({ swappedImageUrl }) => {
  return (
    <>
      <div
        className="image-container"
        style={{
          backgroundImage: swappedImageUrl
            ? `url(${swappedImageUrl})`
            : `url(../assets/Homepage reference.png)`,
        }}
      ></div>
    </>
  );
};

export default Imagepreview;
