import React, { useState } from "react";
import grp from "../Images/grp.png";
import "../Pages/login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();



  const handleLogin = async (event) => {
    event.preventDefault(); 

    if (!username || !password) {
      toast.warning('Please enter a valid username and password');
    } else {
      try {
        const response = await fetch('http://localhost:3001/user');
        const data = await response.json();

        const user = data.find(user => user.username === username && user.password === password);

        if (user) {
          // Authentication successful, perform necessary actions
          
          toast.success("Login Success");

              usenavigate("/generate");
        } else {
          toast.warning('Invalid username or password');
        }
      } catch (error) {
        toast.error('Failed to authenticate. Please try again.');
      }
    }
  };


  // const Proceedlogin = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log("proceed");

  //     fetch("http://localhost:3001/user")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((resp) => {
  //         console.log(resp);
  //         if (Object.keys(resp).length === 0) {
  //           toast.error("Please Enter valid username");
  //         }else{
  //           if (resp[0].password === password) {
  //             toast.success("Success");

  //             usenavigate("/");
  //           } else {
  //             toast.error("Please Enter valid credentials");
  //           }
  //         }
  //       })
  //       .catch((err) => {
  //         toast.error("Login Failed due to :" + err.message);
  //       });
  //   }
  // };

  // const validate = () => {
  //   let result = true;
  //   if (username === "" || username === null) {
  //     result = false;
  //     toast.warning("Please Enter Username");
  //   }
  //   if (password === "" || password === null) {
  //     result = false;
  //     toast.warning("Please Enter Password");
  //   }
  //   return result;
  // };
  return (
    <div>
      <div className="container">
        <div className="row ">
          <form
            onSubmit={handleLogin}
            className="col-lg-6 col-sm-12 p-5 input-login"
          >
            <h3 className="input-h3">
              Sign into your <span>account</span>{" "}
            </h3>

            <div className="email--input mt-3 ">
              <p>Username</p>
              <input
                value={username}
                onChange={(e) => usernameupdate(e.target.value)}
                type="text"
                placeholder="username"
              ></input>
              <p>Password</p>
              <input
                value={password}
                onChange={(e) => passwordupdate(e.target.value)}
                type="password"
                placeholder="*********"
              ></input>
            </div>

            <button type="submit" className="input--btn-1 mt-5">
              To log in
            </button>
            <h3 className="mt-2 text-center">
              No account?{" "}
              <a href="register">
                <span>Register</span>
              </a>{" "}
            </h3>
          </form>

          <div className="col-lg-6 col-sm-12 input-side-img">
            <img src={grp} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
