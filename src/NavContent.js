import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavContent = () => {
  return (
    <>
    <Navbar>
      <Navbar.Brand>
        <Link to='/'>
          Top-100
        </Link>
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Item >
          <Link to="/About">About </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/login">Login</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    </>
   
  )
}
export default NavContent;