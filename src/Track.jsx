import React, { useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import Card from 'react-bootstrap/Card';
import './responsive.css';
import './track.css';

function WebPlayback(props) {
    const [current_track, setTrack] = useState();
    const [lyrics, setLyrics] = useState();


    useEffect(() => {
        fetch(`https://api.spotify.com/v1/search?q=${props.currentTrack.name}&type=track&q=${props.currentTrack.artists}&type=artist&limit=1`, {
            method: 'GET',
            headers: {'Authorization': 'Bearer ' +  props.token}
        })
            .then(res => res.json())
            .then(json => {
                setTrack(json.tracks.items[0])
                console.log(json.tracks.items[0])
                console.log(json.tracks.items[0].album.images)
            } )
    }, [])

    useEffect(() => {
        fetch(`https://corsanywhere.herokuapp.com/https://melon.danielko.me/api/v1/lyric/${props.currentTrack.songId}`, {
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        })
          .then(res => res.json())
          .then(json => {
              setLyrics(json.lyric.split('\n'))
          })
        }, [])
        
    return (
        <>
        <style type="text/css">
            {
            }
        </style>
        <div className="main-card-container">
            {current_track && <Card className="bg-dark text-white mx-auto p-1 m-1" >
                <Card.Img variant="top" src={current_track.album.images[0].url} alt={props.currentTrack.name}/>
                <Card.Body>
                    <Card.Title>
                        {props.currentTrack.artists}
                    </Card.Title>
                    <Card.Text>
                        {props.currentTrack.name}
                    </Card.Text>
                </Card.Body>
                
            </Card>}

            {lyrics && lyrics.map(str => <p>{str}</p>)}
        </div>
        {current_track && 
                <SpotifyPlayer 
                    token={props.token} 
                    uris={current_track.uri} 
                    showSaveIcon={true} 
                    initialVolume={.3}
                    playerPosition='bottom'
                    styles={{
                        sliderColor: 'rgb(213, 126, 140)',
                        sliderHeight: '10px'
                    }}
                />
            }
        </>   
              
    )
}

export default WebPlayback
