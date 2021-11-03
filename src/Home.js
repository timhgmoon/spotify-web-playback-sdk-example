import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Home = (props) => {

  const [melonChart, setMelonChart] = useState();
  

  useEffect(() => {
    fetch('https://corsanywhere.herokuapp.com/https://melon.danielko.me/api/v1/chart/live', {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(res => res.json())
      .then(json => {
        const dataToArr = Object.entries(json).map((e) =>  e[1]);
        setMelonChart(dataToArr);
      })
    }, [])
    console.log(melonChart);
  
  return (
    <>

    <Card.Body>Ranking | Song Name | Artist</Card.Body>
     {melonChart && melonChart.map(track => {
        return  (
          <Card>
            <Link to={'/songs/' + track.name} key={track.ranking}onClick={() => {
              props.handleOnClick(track)
            }}>
              <Card.Body>
                {track.ranking}. {track.name} - {track.artists} 
              </Card.Body>
            </Link>
          </Card>

            
        )
    })}
    
    </>
  )
}

export default Home;