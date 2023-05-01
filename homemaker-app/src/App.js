import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './Main';

import '../src/App.css'
import Login from './Pages/Login';
import Register from './Pages/Register';
import {ToastContainer} from 'react-toastify'
import Generate from './Pages/Generate';
import Final from './Pages/Final';
import Payement from './Pages/Payement';
import Newsapp from './Pages/Newsapp';
import Fetchnews from './Pages/Fetchnews';

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
          <Route exact path="/newshome" element={<Newsapp/>}></Route>
          <Route  path="/general" element={<Fetchnews cat="general" />}></Route>
          <Route  path="/business" element={<Fetchnews cat="business" />}></Route>
          <Route  path="/entertainment" element={<Fetchnews cat="entertainment" />}></Route>
          <Route  path="/health" element={<Fetchnews cat="health" />}></Route>
          <Route  path="/science" element={<Fetchnews cat="science" />}></Route>
          <Route  path="/technology" element={<Fetchnews cat="technology" />}></Route>
          <Route  path="/sports" element={<Fetchnews cat="sports" />}></Route>
          
          
          


          </Routes>
      </Router>
    </div>
  )
}
