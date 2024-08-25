import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Result from "../components/Result";
import { downloadImage, base_url } from "../../api";

function ResultPage() {
  const location = useLocation();
  const { swapId } = useParams();

  if (!swapId) {
    return <div>Error: No swap ID found.</div>;
  }

  const swappedImageUrl = `${base_url}/swap/images/${swapId}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my swapped image!",
          url: window.location.href,
          text: "See my face swap result here!",
        })
        .then(() => {
          console.log("Sharing successful");
        })
        .catch((error) => {
          console.error("Sharing failed:", error);
        });
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  const handleDownload = () => {
    downloadImage(swapId).catch((error) => {
      console.error("Error downloading the file:", error);
    });
  };

  const handleCopyURL = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy URL:", error);
      });
  };

  return (
    <>
      <div className="result-page">
        <Header />
        <Result
          swappedImageUrl={swappedImageUrl}
          handleShare={handleShare}
          handleCopyURL={handleCopyURL}
          handleDownload={handleDownload}
        />
        <Footer />
      </div>
    </>
  );
}

export default ResultPage;
