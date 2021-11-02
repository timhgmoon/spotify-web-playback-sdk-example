import React, { useState, useEffect } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';
import Home from './Home';

function App() {

  const [token, setToken] = useState('');
  const [melonChart, setMelonChart] = useState();


  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  useEffect(() => {
    async function getMelonChart(){
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://melon.danielko.me/api/v1/chart/live', {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
    const json = await response.json();
    setMelonChart(json);
    }
    getMelonChart();
  })
  return (
    <>
      <div className="app">
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
          <main>
            <Route path='/Home' exact render={routerProps =>
            <Home {...routerProps} melonChart={melonChart} />} />
            <Route path='/Login' component={Login} />
            <Route path='/About' render={routerProps => <WebPlayback {...routerProps} token={token} />} />
          </main>
        </nav>
      </div>
      <div>main</div>
        {/* { (token === '') ? <Login/> : <WebPlayback token={token} /> } */}
    </>
  );
}


export default App;
