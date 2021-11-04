import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavContent = () => {
  return (
    <>
    <Navbar>
      <Navbar.Brand href="/">
        {/* <Link to='/'> */}
          Top-100
        {/* </Link> */}
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="/About">
          About
        </Nav.Link>

        <Nav.Link href="/Login">
            Login
        </Nav.Link>
      </Nav>
    </Navbar>
  
    
    </>
   
  )
}

export default NavContent;