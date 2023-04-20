import React from 'react'
import img1 from '../src/Images/img1.png'
import img2 from '../src/Images/aiimg.png'
import lines from '../src/Images/lines2.png'
import original from '../src/Images/originalroom.png'
import newimg from '../src/Images/generated.png'


import '../src/section1.css'

export default function Section1() {
  return (
    <div>
           <div className="container">
        <div className="h3-txt-1 mt-2"><h3>Generating <span>your Dream</span> House</h3>
        <img src={img1} alt="img"></img>
        </div> 
        <div className="h3-txt-2 ">
            <div className="h3-txt-2-sub"><img src={img2} className="aiimg" alt="img"></img>
            <h3> <span>using AI</span>  for everyone.</h3>
           </div>
           <div className="h3-subimg"><img src={lines} alt="img" className=""></img></div>
           
            
        </div>
        <div className="p-txt-1">
            <p>Take a picture of your room and see how your room looks in different themes. 100% free – remodel your room today.</p>
        </div>
        <div className="btn-2 mt-2 text-center">
            <a href='login'><button>Generate your dream house</button></a>
            
        </div>
        <div className='row text-center mt-5 gx-5 gy-2'>
        <div className='col-lg-6 col-sm-12 '>
            <div><h3>Original Room</h3></div>
            <div><img className='newimgs-section' src={original} alt='img'></img></div>
        </div>
        <div className='col-lg-6 col-sm-12 '>
            <div><h3>Generated Room</h3></div>
            <div><img className='newimgs-section' src={newimg} alt='img'></img></div>
        </div>
      </div>
      <p className='mt-5'>© 2023 Home Shapers. Tous droits réservés.</p>
      </div>


      
    </div>
  )
}
 