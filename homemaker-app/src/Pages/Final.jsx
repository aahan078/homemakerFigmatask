import React from 'react'
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../Pages/final.css'

export default function Final() {
  const location = useLocation();

  
   
   
    // const imageURL = location.state?.imageURL;
  return (
    <div className='container'>

        <h3 className='text-center mt-5 txt-final-h3'>Your<span>Work</span></h3>

        <div className='final-img-box mt-5'>
        <img src={location.state.imagedata} alt="Uploaded" />
       
        </div>

        <button className='final-btn-1  mt-5'>Next</button>
    </div>
  )
}
