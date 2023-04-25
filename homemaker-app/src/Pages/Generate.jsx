import React from 'react'
import '../Pages/generate.css'
import vector from '../Images/Vector.png'
import grp from '../Images/grp.png'

export default function Generate() {
  return (
    <div>
        <div className='container'>
            <div className='row gy-2'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <div className='gen-txt-h3 mt-5'>
                        <h2>Generate your <span>Dream house</span> </h2>
                    </div>
                    <div className='select-rooms mt-3 '>
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

              <p className='mt-3'>Choose your room type</p>

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
            
              <div className='image-uploader '>
              <p className='mt-3'>Upload an image</p>
                <div className='uploader-box mt-3 p-5'>
<img src={vector} alt='img'></img>
<p className='mt-5'>Drag and drop an image or...</p>
<button className='upload-btn mt-3'>Upload an image</button>

                </div>
              </div>

                    </div>
                </div>

                <div className='col-lg-6 col-sm-12'>
<img className='grp-img-gen' src={grp} alt='img'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
