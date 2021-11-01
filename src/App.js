import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';
// import { response } from 'express';

function App() {

  const [token, setToken] = useState('');
  const [melonChart, setMelonChart] = useState();
  const MELON_API = "https://localhost:5000https://melon.danielko.me/api/v1/chart/live";

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);
  
  // curl 'https://melon.danielko.me/api/v1/chart/live';
  // fetch('https://melon.danielko.me/api/v1/chart/live')
  // .then(res => res.json())
  // .then(console.log)
  // useEffect(() => {
  //   async function getMelonChart() {
  //     const response = await fetch(MELON_API)
  //     const json = await response.json();
  //     setMelonChart(json);
  //   }
  //   getMelonChart();
  // }, []);
  // console.log(melonChart);
 
  return (
    <>
      <div>main</div>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
  );
}


export default App;
