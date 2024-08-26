import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Addfile.css";
import { Toaster, toast } from "sonner";
import { uploadImage } from "../../api";

const Addfile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setLoading(true);

      const { success, data, error } = await uploadImage(file);

      setLoading(false);

      if (success) {
        const swapId = data.id;
        navigate(`${swapId}`, { state: { swapId } });
      } else {
        toast.error("unable to swap please try any other image");
      }
    } else {
      toast.error("Please select an image file (PNG, JPG, WEBP)");
    }
  };

  return (
    <>
      <label htmlFor="addfile" className="file-container">
        {loading ? (
          <div className="spinner"></div> // Show spinner when loading
        ) : (
          <div className="add-button">Add my Face</div> // Show button when not loading
        )}
        {!loading && (
          <input
            id="addfile"
            hidden
            accept=".png, .jpg, .jpeg, .webp"
            onChange={handleImageChange}
            type="file"
          />
        )}
      </label>
      {loading && (
        <div>
          <p style={{ margin: "1rem" }}>
            Processing your image, please wait...
          </p>
        </div>
      )}
      <Toaster position="top-right" richColors reverseOrder={false} />
    </>
  );
};

export default Addfile;
