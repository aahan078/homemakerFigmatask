import React, { useState } from "react";
import "../Pages/register.css";
import register from "../Images/register.png";
import { toast } from "react-toastify";

export default function Register() {
const [name,namechange] = useState("");
const [email,emailchange] = useState("");
const [password,passwordchange] = useState("");
const [work,workchange] = useState("");

  const handlesubmit=(e)=>{
    e.preventDefault();
    let regobj={
      name,email,password,work
    };
    // console.log(regobj);

    fetch('http://localhost:3001/user',{
      method:'Post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
    }).then((res)=>{
toast.success('Registered successfully')
    }).catch((err)=>{
toast.error('Failed:'+err.message);
    });
  }
  return (
    <div>
      <div className="container" >
        <div className="row gx-5 gy-2 p-5 ">
          <form className="col-lg-6 col-sm-12 input-login" onSubmit={handlesubmit}>
            <h3 className="input-h3">
              Register <span>Your Self</span>{" "}
            </h3>
            <hr />
            <p className="input-p">One step away to see the result</p>

            <div className="email--input "   >
              <p>Name</p>
              <input value={name} onChange={e=>namechange(e.target.value)} type="text" placeholder="John" className="errmsg"></input>
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
