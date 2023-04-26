import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Pages/generate.css";
import vector from "../Images/Vector.png";
import grp from "../Images/grp.png";

export default function Generate() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "zdbqreqo"); // Replace with your Cloudinary upload preset
// formData.append("cloud_name","dj7haln6x");
//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dj7haln6x/image/upload", // Replace with your Cloudinary cloud name
//         formData
//       );

//       // Get the uploaded image URL from the response
//       const imageURL = response.data.secure_url;

//       // Set the uploaded image URL to the state
//       setImage(imageURL);
//     } catch (error) {
//       console.error("Error uploading image to Cloudinary: ", error);
//     }
//   };

//   // Function to navigate to the Final page with the uploaded image URL
//   const handleNext = () => {
//     navigate({
//       pathname: "/final",
//       state: { imageURL: image },
//     });
//   };

const handleNext =()=>{
  const data = new FormData()
  data.append('file',image)
  data.append("upload_preset", "zdbqreqo");
  data.append("cloud_name","dj7haln6x");

  fetch("https://api.cloudinary.com/v1_1/dj7haln6x/image/upload",{
    
      method:"post",
      body:data
    
  }).then((res)=>
    res.json()
  ).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err)
  })
}

  return (
    <div>
      <div className="container">
        <div className="row gy-2">
          <div className="col-lg-6 col-sm-12 p-5">
            <div className="gen-txt-h3 mt-5">
              <h2>
                Generate your <span>Dream house</span>{" "}
              </h2>
            </div>
            <div className="select-rooms mt-3 ">
              <p>Choose your room theme</p>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle drop-btn-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Modern
                </button>
                <ul className="dropdown-menu drop-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Minimalist
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tropical
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Vintage
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Professional
                    </a>
                  </li>
                </ul>
              </div>

              <p className="mt-3">Choose your room type</p>

              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle drop-btn-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Living Room
                </button>
                <ul className="dropdown-menu drop-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Salon
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bureau
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chambre
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Salle de jeux
                    </a>
                  </li>
                </ul>
              </div>

              <div className="image-uploader ">
                <p className="mt-3">Upload an image</p>
                <div className="uploader-box mt-3 p-5">
                  <img src={vector} alt="img"></img>
                  <p className="mt-5">Drag and drop an image or...</p>
                  {/* <input type="file" onChange={handleImageUpload} /> */}
                  {/* {image && <img src={image} alt="Uploaded" />} */}
                  <input type="file" onChange={(e)=>setImage(e.target.files[0])} ></input>
                  <button onClick={handleNext} className="upload-btn mt-3">
                    Upload an image
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <img className="grp-img-gen" src={grp} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
