import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Pages/newsnav.css'
import { useNavigate } from 'react-router-dom';

export default function Newsweb() {
    const navigate = useNavigate();
    const gotonewshome=()=>{
        navigate('/newshome');
    }
  return (
    <div>
 <Navbar bg="dark" variant="dark" expand="lg" className='nav-news'>
      <Container >
        <Navbar.Brand href="#">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={gotonewshome}>Home</Nav.Link>
            <Nav.Link href="#action1">General</Nav.Link>
            <Nav.Link href="#action2">Business</Nav.Link>
            <Nav.Link href="#action3">Entertainment</Nav.Link>
            <Nav.Link href="#action4">Health</Nav.Link>
            <Nav.Link href="#action5">Science</Nav.Link>
            <Nav.Link href="#action6">Technology</Nav.Link>
            <Nav.Link href="#action7">Sports</Nav.Link>
        
          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
