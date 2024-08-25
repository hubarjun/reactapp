import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Addfile.css";

const Addfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      setLoading(true);

      const formData = new FormData();
      formData.append("image", file);
      console.log(formData);
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      try {
        /* const response = await axios.post(
          "http://159.65.147.187:8000/swap/upload/1",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
            },
          }
        );
        setLoading(false); // Set loading to false after receiving the response

        // Extract the swap id from the response
        const swapId = response.data.id;

        // Navigate to the results page with the swapId as state
        navigate("/result", { state: { swapId } }); */

        const response = await fetch(
          `http://159.65.147.187:8000/swap/upload/1`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            body: formData,
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.error) {
            console.log(data.error);
          } else {
            const swapId = data.id;
            navigate("/result", { state: { swapId } });
          }
        }
      } catch (error) {
        setLoading(false);
        console.error("Error uploading image:", error);
      }
    } else {
      alert("Please select an image file");
    }
  };

  return (
    <>
      <div className="file-container">
        <div className="add-button">
          <label htmlFor="addfile">Add my Face</label>
        </div>
        <input
          id="addfile"
          hidden
          accept="image/*"
          onChange={handleImageChange}
          type="file"
        />
      </div>
      {loading && (
        <div>
          <p style={{ textAlign: "center" }}>
            Processing your image, please wait...
          </p>
        </div>
      )}
    </>
  );
};

export default Addfile;
