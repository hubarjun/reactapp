import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Addfile.css";
import { Toaster, toast } from "sonner";

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
      formData.append("file", file);

      try {
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

        setLoading(false);

        if (response.ok) {
          const data = await response.json();
          if (data.error) {
            toast.error(data.error);
          } else {
            const swapId = data.id;
            navigate(`${swapId}`, { state: { swapId } });
          }
        } else {
          const errorData = await response.json();
          if (errorData.error) {
            toast.error(errorData.error);
          } else {
            toast.error(`Error: ${response.status} ${response.statusText}`);
          }
        }
      } catch (error) {
        setLoading(false);
        toast.error(`Error uploading image: ${error.message}`);
      }
    } else {
      toast.error("Please select an image file (PNG, JPG, WEBP)");
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
          accept=".png, .jpg, .jpeg, .webp"
          onChange={handleImageChange}
          type="file"
        />
      </div>
      {loading && (
        <div>
          <p style={{ margin: "1rem" }}>
            Processing your image, please wait...
          </p>
        </div>
      )}
      <Toaster position="top-right" richColors reverseOrder={false} />{" "}
    </>
  );
};

export default Addfile;
