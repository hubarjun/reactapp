import React from "react";
import "../styles/Maincontent.css";
import Imagepreview from "./Imagepreview";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";

const Result = ({ swappedImageUrl, handleShare, handleDownload }) => {
  return (
    <div className="maincontent">
      <Imagepreview swappedImageUrl={swappedImageUrl} />
      <div className="content">
        <div className="heading-container">
          <p className="heading">Finally You're with the GOAT</p>
          <p>We know it's your thalapathy too.</p>
        </div>
        <div className="action-buttons">
          <button className="action-button" onClick={handleShare}>
            <FaRegShareFromSquare />
            <span>Share</span>
          </button>
          <button className="action-button" onClick={handleDownload}>
            <IoCloudDownloadOutline />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
