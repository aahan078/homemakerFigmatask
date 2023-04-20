import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../src/Images/logo.png'
import img1 from '../src/Images/img1.png'
import img2 from '../src/Images/aiimg.png'
import lines from '../src/Images/lines.png'
import '../src/header.css'

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="" className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
           
            </Nav>
            <Nav className="btns-nav">
              <Nav.Link href="#deets">
                <button className="nav--btn-1">BILLING</button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <button className="btns-nav-2">UPGRADE TO PRO</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
            <button>Generate your dream house</button>
        </div>
      </div>
    </div>
  );
}
