import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/landingpage.css'

export default (props) => (
    <div class="landing">
        <div className="landing_welcome_container">
        <img class="landing_welcome" src="imgs/logo.svg" />
        </div>
        <div class="landing_reveal">
            <span class="landing_reveal1">Hi there, nice to meet you!</span>
            <span class="landing_reveal2">At Lustr, we’re here to help<br/>you find your perfect match.</span>
            <span class="landing_reveal3">We use algorithms to start you<br/>with your best match first …</span>
            <span class="landing_reveal4">… and slowly reveal profiles as<br/>your conversation continues.</span>
        </div>
        <div class="landing-page-buttons-box">
            <button class="teal-button-box">
                <Link to="/signin">Sign In</Link>
            </button>

            <button class="teal-button-box">
                <Link to='/signup'>Sign Up</Link>
            </button>
        </div>
    </div>
)


