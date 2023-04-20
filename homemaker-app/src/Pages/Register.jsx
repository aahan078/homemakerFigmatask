import React from 'react'
import '../Pages/register.css'
import register from '../Images/register.png'

export default function Register() {
  return (
    <div >
<div className='container'>
<div className='row gx-5 gy-2 p-5 '>
          <div className='col-lg-6 col-sm-12 input-login'>
            
              <h3 className='input-h3'>Register  <span>Your Self</span> </h3>
              <hr/>
              <p>One step away to see the result</p>

              <div className='email--input '>
                <p>Name</p>
                <input type='email' placeholder='John'></input>
                <p>E-mail</p>
                <input type='email' placeholder='example@example.com'></input>
                <p>Profession</p>
                <input type='email' placeholder='example@example.com'></input>
                <p>Where do you know about us</p>
                <div className="dropdown">
  <button className="btn  dropdown-toggle drop-btn-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Google
  </button>
  <ul class="dropdown-menu drop-menu">
    <li><a className="dropdown-item" href="#">Google</a></li>
    <li><a className="dropdown-item" href="#">Amis</a></li>
    <li><a className="dropdown-item" href="#">Publicities</a></li>
    <li><a className="dropdown-item" href="#">Twitter</a></li>
  </ul>
</div>
              </div>

             <button className='input--btn-1 mt-5'>Confirm</button>
             <h3 className='mt-2 text-center'>Sign into  <a href='login'><span>your account</span></a> </h3>
          </div>

          <div className='col-lg-6 col-sm-12 input-side-img'>
<img src={register} alt='img' ></img>
          </div>
        </div>
</div>

    </div>
  )
}
