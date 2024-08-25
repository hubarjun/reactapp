import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const { swapId } = location.state || {};

  if (!swapId) {
    return <div>Error: No swap ID found.</div>;
  }

  const swappedImageUrl = `http://159.65.147.187:8000/swaps/${swapId}.png`;

  return (
    <div className="result-page">
      <h2>Swapped Image</h2>
      <img
        src={swappedImageUrl}
        alt="Swapped Result"
        style={{ width: "300px", margin: "20px auto", display: "block" }}
      />
      <a
        href={swappedImageUrl}
        download
        style={{ display: "block", textAlign: "center", marginTop: "20px" }}
      >
        Download Swapped Image
      </a>
    </div>
  );
}

export default ResultPage;
