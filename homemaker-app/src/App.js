import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header'
import Main from './Main';

import '../src/App.css'
import Login from './Pages/Login';
import Register from './Pages/Register';
import {ToastContainer} from 'react-toastify'
import Generate from './Pages/Generate';
import Final from './Pages/Final';
import Payement from './Pages/Payement';
import Newsweb from './Pages/Newsweb';
import Newshome from './Pages/Newshome';

export default function App() {
  return (
    <div className='app'>
<ToastContainer theme='colored'></ToastContainer>
      
      <Router>
        <Routes>
        {/* <Route exact path="/" element={<Header/>}></Route> */}
         
          <Route exact path="/" element={<Main/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/generate" element={<Generate/>}></Route>
          <Route exact path="/final" element={<Final/>}></Route>
          
          
          <Route exact path="/payement" element={<Payement/>}></Route>
          <Route exact path="/newsapp" element={<Newsweb/>}></Route>
          <Route exact path="/newshome" element={<Newshome/>}></Route>


          </Routes>
      </Router>
    </div>
  )
}
