import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
    <Link to='/'>
      <p className="nav-link logo">Top-100</p>
    </Link>
    <Link to='/About'>
      <p className="nav-link small-nav">About</p>
    </Link>
    <Link to='/Login'>
      <p className="nav-link small-nav">Login</p>
    </Link>
    </nav>
  )
}

export default Nav;