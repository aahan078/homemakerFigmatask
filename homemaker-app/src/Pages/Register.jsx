import React, { useState } from "react";
import "../Pages/register.css";
import register from "../Images/register.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
const [username,usernamechange] = useState("");
const [email,emailchange] = useState("");
const [password,passwordchange] = useState("");
const [work,workchange] = useState("");

const navigate=useNavigate();

const isValidate=()=>{
  let isproceed=true;
  let errormessage = 'Please enter the value in '
  if(username==null || username==""){
isproceed=false;
errormessage += 'Username '
  }
  if(email==null || email==""){
isproceed=false;
errormessage += 'E-mail '
  }
  if(password==null || password==""){
isproceed=false;
errormessage += 'Password '
  }
  if(work==null || work==""){
isproceed=false;
errormessage += 'Profession '
  }
  if(!isproceed){
    toast.warning(errormessage)
  }else{
    if(/^[a -zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

    }else{
      isproceed= false;
      toast.warning('Please enter the valid e-mail')
    }
  }
  return isproceed
}

  const handlesubmit=(e)=>{
    e.preventDefault();
    let regobj={
      username,email,password,work
    };
    if(isValidate()){

    
    
  
    console.log(regobj);

    fetch('http://localhost:3001/user',{
      method:'Post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
    }).then((res)=>{
toast.success('Registered successfully')
navigate('/login');
    }).catch((err)=>{
toast.error('Failed:'+err.message);
    });
  }
  }
  return (
    <div>
      <div className="container">
        <div className="row gx-5 gy-2 p-5 ">
          <form className="col-lg-6 col-sm-12 input-login" onSubmit={handlesubmit}>
            <h3 className="input-h3">
              Register <span>Your Self</span>{" "}
            </h3>
            <hr />
            <p className="input-p">One step away to see the result</p>

            <div className="email--input "   >
              <p>Username</p>
              <input  value={username} onChange={e=>usernamechange(e.target.value)} type="text" placeholder="John" className="errmsg"></input>
              <p>E-mail</p>
              <input value={email} onChange={e=>emailchange(e.target.value)} type="email" placeholder="example@example.com" className="errmsg"></input>
              <p>Password</p>
              <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" placeholder="*******" className="errmsg"></input>
              <p>Profession</p>
              <input value={work} onChange={e=>workchange(e.target.value)} type="text" placeholder="UI/UX Designer" className="errmsg"></input>
              <p>Where do you know about us</p>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle drop-btn-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Google
                </button>
                <ul className="dropdown-menu drop-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Google
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Amis
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Publicities
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <button type='submit' className="input--btn-1-r mt-5">Confirm</button>
          </form>

          <div className="container col-lg-6 col-sm-12 input-side-img-r">
            <img src={register} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
