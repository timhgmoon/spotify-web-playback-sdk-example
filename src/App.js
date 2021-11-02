import React, { useState, useEffect } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Track from './Track'
import Login from './Login'
import './App.css';
import Home from './Home';
import Nav from './Nav';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <>
      <div className="app">

        <Nav />
        {/* <nav>
          <Link to='/'>
            <p className="nav-link logo">Top-100</p>
          </Link>
          <Link to='/About'>
            <p className="nav-link small-nav">About</p>
          </Link>
          <Link to='/Login'>
            <p className="nav-link small-nav">Login</p>
          </Link> */}
        {/* </nav> */}
          <main>
            <Route path='/' exact render={routerProps =>
            <Home {...routerProps} />} />
            <Route path='/Login' component={Login} />
            <Route path='/About' render={routerProps => <Track {...routerProps} token={token} />} />
          </main>
        
      </div>
        {/* { (token === '') ? <Login/> : <Track token={token} /> } */}
    </>
  );
}


export default App;
