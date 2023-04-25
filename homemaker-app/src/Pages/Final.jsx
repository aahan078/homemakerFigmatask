import React from 'react'
import { useParams } from "react-router-dom";
import '../Pages/final.css'

export default function Final() {
    const { imageURL } = useParams();
  return (
    <div className='container'>

        <h3 className='text-center mt-5 txt-final-h3'>Your<span>Work</span></h3>

        <div className='final-img-box mt-5'>
        <img src={imageURL} alt="Uploaded" />
        </div>
    </div>
  )
}
