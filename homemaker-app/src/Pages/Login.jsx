import React from 'react'
import grp from '../Images/grp.png'
import '../Pages/login.css'

export default function Login() {
  return (
    <div>
      <div className='container'>
        <div className='row gx-5 gy-2 p-5 '>
          <div className='col-lg-6 col-sm-12 input-login'>
            
              <h3 className='input-h3'>Sign into your <span>account</span> </h3>

              <div className='email--input '>
                <p>E-mail</p>
                <input type='email' placeholder='example@example.com'></input>
                <p>Password</p>
                <input type='password' placeholder='*********'></input>
              </div>

             <button className='input--btn-1 mt-5'>To log in</button>
             <h3 className='mt-2 text-center'>No account? <a href='register'><span>Register</span></a> </h3>
          </div>

          <div className='col-lg-6 col-sm-12 input-side-img'>
<img src={grp} alt='img' ></img>
          </div>
        </div>
      </div>
    </div>
  )
}
