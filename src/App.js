import React, { useState, useEffect } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Track from './Track'
import Login from './Login'
import Home from './Home';
import Nav from './Nav';


function App() {

  const [token, setToken] = useState('');
  const [currentTrack, setCurrentTrack] = useState();

  const handleOnClick = (track) => {
    setCurrentTrack(track);
  }


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
        <main>
            <Route path='/' exact render={routerProps =>
            <Home {...routerProps} handleOnClick={handleOnClick}/>} />
            <Route path='/Login' component={Login} />
            {/* <Route path='/About' render={routerProps => <Track {...routerProps} token={token} />} /> */}
            <Route path="/songs/:song" render={routerProps => <Track {...routerProps} currentTrack={currentTrack} token={token}/>} />
          </main>
        
      </div>
        {/* { (token === '') ? <Login/> : <Track token={token} /> } */}
    </>
  );
}


export default App;
