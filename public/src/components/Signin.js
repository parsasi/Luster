
import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import '../styles/signin.css'
import '../styles/teal-buttons.css'

export default (props) => (
    <div class="signin">
        <div class="signin_title">Sign In</div>
        <div class="signin_msg">
            Please enter your email and password.
        </div>

        <form class="signin_form">
            <div class="signin_form_email">
                <label for="signin_form_email">Email Address:</label>
                <input type="email" id="signin_form_email" placeholder="Email Address"/>
            </div>
            <div class="signin_form_password">
                <label for="signin_form_password">Password:</label>
                <input type="password" id="signin_form_password" placeholder="Password"/>
            </div>
            <div>
                <input type="submit" id="signin_form_submit" class="teal-button-box"/>
            </div>
        </form>
    </div>
)