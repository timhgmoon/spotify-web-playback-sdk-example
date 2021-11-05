import React from 'react';
// import {Link, Route } from 'react-router-dom';

function Login(props) {
    return (
        <div className="App">
            <header className="App-header">
                <a className="btn-spotify" href="/auth/login" >
                    {props.token ? 'Login with Spotify' : 'Logged in'}
                </a>
           
            </header>
        </div>
    );
}

export default Login;

