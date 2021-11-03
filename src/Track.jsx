import React, { useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import Card from 'react-bootstrap';


function WebPlayback(props) {
    const [current_track, setTrack] = useState();


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
   
    return (
        <>
        <div className="container">
            {current_track && <div>card container
                <li>{props.currentTrack.name}</li>
                <li>{props.currentTrack.artists}</li>
                <img src={current_track.album.images[0].url} alt={props.currentTrack.name}/>
            </div>}
           

        </div>   
        {current_track && <SpotifyPlayer 
                token={props.token} 
                uris={current_track.uri} 
                showSaveIcon={true} 
                initialVolume={.3}
                playerPosition='bottom'
                styles={{
                    sliderColor: 'blue',
                    sliderHeight: '10px'
                }}
            />}
        </>   
              
    )
}

export default WebPlayback
