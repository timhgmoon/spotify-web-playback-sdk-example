import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';
// import { response } from 'express';

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
    console.log(json);
    }
    getMelonChart();
  })
  return (
    <>
      <div>main</div>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
  );
}


export default App;
