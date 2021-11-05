import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavContent = () => {
  return (
    <>
    <Navbar className="bg-dark text-white p-3">
      <Navbar.Brand>
        <Link to="/">
          Top-100
        </Link>
      </Navbar.Brand>
        <Nav.Link as={Link} to="/About">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Spotify Login
        </Nav.Link>
    </Navbar>
  
    
    </>
   
  )
}

export default NavContent;