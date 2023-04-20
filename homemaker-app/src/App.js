import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header'
import Main from './Main';

import '../src/App.css'
import Login from './Pages/Login';
import Register from './Pages/Register';

export default function App() {
  return (
    <div className='app'>

      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}
