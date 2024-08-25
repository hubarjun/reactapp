export const base_url = "/api";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${base_url}/swap/upload/1`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.error || response.statusText };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const downloadImage = async (swapId) => {
    const swappedImageUrl = `${base_url}/swap/images/${swapId}`;
  
    try {
      const response = await fetch(swappedImageUrl, {
        method: "GET",
        headers: {
          "Content-Type": "image/png",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "swapped_image.png"; // Set the default filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Clean up after download
    } catch (error) {
      console.error("Error downloading the file:", error);
      throw error;
    }
  };
