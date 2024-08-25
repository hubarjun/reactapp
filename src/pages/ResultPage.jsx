import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Result from "../components/Result";

function ResultPage() {
  const location = useLocation();
  const { swapId } = location.state || {};

  if (!swapId) {
    return <div>Error: No swap ID found.</div>;
  }

  const swappedImageUrl = `http://159.65.147.187:8000/swap/images/${swapId}`;
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
    fetch(swappedImageUrl, {
      method: "GET",
      headers: {
        "Content-Type": "image/png",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "swapped_image.png"; // Set the default filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Clean up after download
      })
      .catch((error) => {
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
