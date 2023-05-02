import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../src/Images/logo.png'
import {useNavigate } from "react-router-dom";
import '../src/header.css'
import { Link } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();
  const gotohome =()=>{
navigate('/');
  }


  return (
    <div className="">
      <Navbar collapseOnSelect  expand="lg" bg="white" className="nav">
        <Container>
          <Navbar.Brand >
            <img className="logo-img-1" onClick={gotohome} src={logo} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
           
            </Nav>
            <Nav className="btns-nav">
              <Nav.Link >
                <Link to="/payement"><button className="nav--btn-1">Billing</button></Link>
                
              </Nav.Link>
              <Nav.Link eventKey={2} >
                <button className="btns-nav-2">Upgrade to pro</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    </div>
  );
}

