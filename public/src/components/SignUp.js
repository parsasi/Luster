
import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import '../styles/signup.css'
import '../styles/teal-buttons.css'
import signup from '../api/signup';
import singupValidator from '../helpers/signupValidator'
import signupValidator from '../helpers/signupValidator';

export default class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.submitEventHandler = this.submitEventHandler.bind(this)
        this.state = {}
    }
    submitEventHandler(e){
        e.preventDefault()
        const user = {
            name : document.querySelector('input[name="fname"]').value,
            email : document.querySelector('input[name="email"]').value,
            password : document.querySelector('input[name="password"]').value,
            sexualPreference : document.querySelector('select[name="preference"]').value,
            gender : document.querySelector('select[name="gender"]').value,
            dob : document.querySelector('input[name="birthday"]').value,
            city : document.querySelector('input[name="city"]').value
        }
        if(signupValidator(user)){
            signup(user)
            .then(data => console.log('successfully signed up'))
            .catch(e => console.log(e))  
        }else{
            console.log('Invalid input')
        }
    } 
    render(){
        return (
        <div class="signup-box">
                <h1 class="signup-title">Sign Up</h1>
                <div class="signup-form">
                    <div>
                        <label class="signup-label" for="fname">First Name <span class="required">*</span></label> <br/>
                        <input type="text" class="signup-input" name="fname" required placeholder="First Name"/><br/>
                    </div>

                    <div>
                        <label class="signup-label" for="email">Email Address <span class="required">*</span></label> <br/>
                        <input type="email" class="signup-input" name="email" required placeholder="Email Address"/> <br/>
                    </div>

                    <div>
                        <label class="signup-label" for="password">Password <span class="required">*</span></label> <br/>
                        <input type="password" class="signup-input" name="password" required placeholder="Password"/> <br/>
                    </div>

                    <div>
                        <label class="signup-label" for="city">City <span class="required">*</span></label> <br/>
                        <input type="text" class="signup-input" name="city" required placeholder="City"/> <br/>
                    </div>

                    <div class="gender-preference">
                        <div class="gender-box">
                            <label class="signup-label" for="gender">Gender <span class="required">*</span></label> <br/>
                            <select class="signup-input" required name="gender">
                                <option value="gender" disabled defaultValue hidden>Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label class="signup-label" for="preference">Sexual Preference <span class="required">*</span></label> <br/>
                            <select class="signup-input" required name="preference">
                                <option value="preference" disabled defaultValue hidden>Preference</option>
                                <option value="women">Women</option>
                                <option value="men">Men</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <label class="signup-label"  for="birthday">Birthday <span class="required">*</span></label> <br/>
                    <input type="date" id="birthday" required name="birthday" class="signup-input"/>
                    <input id="signup-submit" type="submit" onClick={this.submitEventHandler} class="teal-button-box"/>
                </div>
        </div>
        )
    }
}
