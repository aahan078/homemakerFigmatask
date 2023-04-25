import React, { useRef } from "react";
import { Uploader } from "uploader";

import { useNavigate } from 'react-router-dom';




const UploadPage = () => {
  const uploadRef = useRef(null);
  const navigate = useNavigate();

  const handleImageUpload = () => {
    uploadRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    // Create a new FormData object
    const formData = new FormData();
    formData.append("image", file);

    // Upload the image to the API using upload.js

    try {
        // const Upload = Upload({ apiKey: "public_kW15bG7BLKyXdJwmFVfrC74m5kfK" });

        const uploader = Uploader({ apiKey: "public_kW15bG7BLKyXdJwmFVfrC74m5kfK" });
      const response = uploader("/api/uploader", formData);

      // Get the uploaded image URL from the response
      const imageUrl = response.data.url;

      // Navigate to the ImageDisplay page with the image URL as a parameter
      navigate(`/image/${imageUrl}`);
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input
        type="file"
        ref={uploadRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button onClick={handleImageUpload}>Choose Image</button>
    </div>
  );
};

export default UploadPage;
