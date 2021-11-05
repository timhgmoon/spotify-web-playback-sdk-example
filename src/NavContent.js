import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavContent = (props) => {
  const checkSpotifyLogin = () => {
    if(props.token === '') {
      return <Nav.Link as={Link} to="/auth/login">Spotify Login</Nav.Link>
    } else {
      return <Nav.Item>Logged In</Nav.Item>
    }
  }
  
  return (
    <>
    <Navbar className="bg-dark text-white">
      <Navbar.Brand>
        <Link to='/'>
          Top-100
        </Link>
      </Navbar.Brand>
        <Nav.Link as={Link} to="/About">
          About
        </Nav.Link>
        {checkSpotifyLogin()}
    </Navbar>
    </>
   
  )
}
export default NavContent;