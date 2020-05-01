
import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import '../styles/signup.css'
import '../styles/teal-buttons.css'
import signup from '../api/signup';
import {connect} from 'react-redux'
import signupValidator from '../helpers/signupValidator';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.submitEventHandler = this.submitEventHandler.bind(this)
        this.state = {
            error : ''
        }
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
            .then(data => {
                this.props.dispatch({
                    type : 'USER_SIGNED_UP',
                })
                this.props.history.push("/signin");
            })
            .catch(e => {
                this.setState(() => ({error : e}))
            })  
        }else{
            console.log('Invalid input')
        }
    } 
    render(){
        return (
        <div className="signup-box">
                <h1 className="signup-title">Sign Up</h1>
                <div className="signup-form">
                    <div>
                        <label className="signup-label" htmlFor="fname">First Name <span className="required">*</span></label> <br/>
                        <input type="text" className="signup-input" name="fname" required placeholder="First Name"/><br/>
                    </div>

                    <div>
                        <label className="signup-label" htmlFor="email">Email Address <span className="required">*</span></label> <br/>
                        <input type="email" className="signup-input" name="email" required placeholder="Email Address"/> <br/>
                    </div>

                    <div>
                        <label className="signup-label" htmlFor="password">Password <span className="required">*</span></label> <br/>
                        <input type="password" className="signup-input" name="password" required placeholder="Password"/> <br/>
                    </div>

                    <div>
                        <label className="signup-label" htmlFor="city">City <span className="required">*</span></label> <br/>
                        <input type="text" className="signup-input" name="city" required placeholder="City"/> <br/>
                    </div>

                    <div className="gender-preference">
                        <div className="gender-box">
                            <label className="signup-label" htmlFor="gender">Gender <span className="required">*</span></label> <br/>
                            <select className="signup-input" required name="gender">
                                <option value="gender" disabled defaultValue hidden>Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="signup-label" htmlFor="preference">Sexual Preference <span className="required">*</span></label> <br/>
                            <select className="signup-input" required name="preference">
                                <option value="preference" disabled defaultValue hidden>Preference</option>
                                <option value="women">Women</option>
                                <option value="men">Men</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <label className="signup-label"  htmlFor="birthday">Birthday <span className="required">*</span></label> <br/>
                    <input type="date" id="birthday" required name="birthday" className="signup-input"/>
                    <input id="signup-submit" type="submit" onClick={this.submitEventHandler} className="teal-button-box"/>
                </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  };

export default connect(mapStateToProps)(SignUp);
  