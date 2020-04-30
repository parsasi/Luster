
import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import '../styles/signup.css'
import '../styles/teal-buttons.css'

export default (props) => (
    <div class="signup-box">
        <h1 class="signup-title">Sign Up</h1>
        <div class="signup-form">
            <div>
                <label class="signup-label" for="fname">First Name <span class="required">*</span></label> <br/>
                <input type="text" class="signup-input" name="fname" placeholder="First Name"/><br/>
            </div>

            <div>
                <label class="signup-label" for="email">Email Address <span class="required">*</span></label> <br/>
                <input type="email" class="signup-input" name="email" placeholder="Email Address"/> <br/>
            </div>

            <div>
                <label class="signup-label" for="password">Password <span class="required">*</span></label> <br/>
                <input type="password" class="signup-input" name="password" placeholder="Password"/> <br/>
            </div>

            <div class="gender-preference">
                <div class="gender-box">
                    <label class="signup-label" for="gender">Gender <span class="required">*</span></label> <br/>
                    <select class="signup-input" name="gender">
                        <option value="gender" disabled selected hidden>Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label class="signup-label" for="preference">Sexual Preference <span class="required">*</span></label> <br/>
                    <select class="signup-input" name="preference">
                        <option value="preference" disabled selected hidden>Preference</option>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="both">Both</option>
                    </select>
                </div>
            </div>
            <br/>
            <label class="signup-label" for="birthday">Birthday <span class="required">*</span></label> <br/>
            <input type="date" id="birthday" name="birthday" class="signup-input"/>

            <input id="signup-submit" type="submit" class="teal-button-box"/>
        </div>
    </div>
)