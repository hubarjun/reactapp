import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Result from "../components/Result";
import { downloadImage, base_url } from "../../api";
import { Toaster, toast } from "sonner";

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
          toast.info("Sharing ");
        })
        .catch((error) => {
          toast.error("Sharing failed:", error);
        });
    } else {
      toast.warning("Sharing is not supported in this browser.");
    }
  };

  const handleDownload = () => {
    downloadImage(swapId).catch((error) => {
      toast.error("Error downloading the file:", error);
    });
  };

  return (
    <>
      <div className="result-page">
        <Header />
        <Result
          swappedImageUrl={swappedImageUrl}
          handleShare={handleShare}
          handleDownload={handleDownload}
        />
        <Footer />
      </div>
      <Toaster position="top-right" richColors reverseOrder={false} />
    </>
  );
}

export default ResultPage;
