import React from "react";
import { useParams } from "react-router-dom";

const ImageDisplayPage = () => {
  const { imageUrl } = useParams();

  return (
    <div>
      <h1>Image Display</h1>
      <div style={{ border: "1px solid black", padding: "1rem" }}>
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};

export default ImageDisplayPage;
