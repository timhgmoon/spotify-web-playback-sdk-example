import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <a className="btn-spotify" href="/auth/login" >
                    Login with Spotify 
                </a> */}
                    <Link to="/auth/login" className="btn-spotify">
                    Login with Spotify 
                    </Link>
            </header>
        </div>
    );
}

export default Login;

