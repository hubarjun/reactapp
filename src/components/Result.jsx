import React from "react";
import "../styles/Maincontent.css";
import Imagepreview from "./Imagepreview";

const Result = ({
  swappedImageUrl,
  handleShare,
  handleCopyURL,
  handleDownload,
}) => {
  return (
    <div className="maincontent">
      <Imagepreview swappedImageUrl={swappedImageUrl} />
      <div className="content">
        <div className="heading-container">
          <p className="heading">Hop a ride with G.O.A.T</p>
          <p>We know it's your thalapathy too.</p>
        </div>
        <div className="action-buttons">
          <button className="action-button" onClick={handleShare}>
            Share
          </button>
          <button className="action-button" onClick={handleDownload}>
            Download
          </button>
          <button className="action-button" onClick={handleCopyURL}>
            Copy URL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
