import React, { useEffect, useState } from "react";
// import axios from "axios";
import {useNavigate } from "react-router-dom";
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import "../Pages/generate.css";
import vector from "../Images/Vector.png";
import grp from "../Images/grp.png";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import Header from "../Header";


export default function Generate() {
  const [image, setImage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
console.log("imageUrldatas",image)




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

    const imageURL = data.secure_url;
    console.log("imageUrl",imageURL)
    setImage(imageURL);
    if(image){
      // setLoading(true);
      toast.success("Image uploaded")
    navigate("/final",
    {
      state:{imagedata:imageURL}
    })
  }else{Swal.fire(
    'No Image?', 
    'Select an Image first',
    'warning'
  )}
    console.log(data);
  }).catch((err)=>{
    toast.error('Upload Failed')
    console.log(err)
  })

 
 
}

// const handleImageUpload = async (event) => {
//   const file = ( event.target.files[0]);
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", "zdbqreqo");
//   formData.append("cloud_name","dj7haln6x")

//   try {
//     const response = await fetch(
//       "https://api.cloudinary.com/v1_1/dj7haln6x/image/upload", 
//       {
//         method: "POST",
//         body: formData
//       }
//     );
// console.log(response);
//     //  uploaded image URL from the response
//     const data = await response.json();
//     const imageURL = data.url;

//     // Set the uploaded image URL to the state
//     setImage(imageURL);

//   } catch (error) {
//     console.error("Error uploading image to Cloudinary: ", error);
//   }
// };

// // Function to navigate to the Final page with the uploaded image URL
// const handleNext = () => {
//   navigate(`/final/${encodeURIComponent(image)}`);
// };

  return (
    <div>
       <Header/>
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
               
                  <img className="vector-img" src={vector} alt="img"></img>
                  <p className="mt-5">Drag and drop an image or...</p>
                  {/* <input type="file" onChange={handleImageUpload} /> */}
                  {/* {image && <img src={image} alt="Uploaded" />} */}
                  <input className="input-gen-1" type="file" onChange={(e)=>setImage(e.target.files[0])} ></input>
                
                  <button onClick={handleNext} className="upload-btn mt-3">
                  {/* {loading ? (
          <div className="loader"></div>
        ) : (
          "Upload an image"
        )} */}
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
