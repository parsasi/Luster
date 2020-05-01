
import React from 'react';
import signinValidator  from '../helpers/signinValidator'
import {connect} from 'react-redux'
import signin from '../api/signin'
import '../styles/signin.css'
import '../styles/teal-buttons.css'


class SignIn extends React.Component{
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
            email : document.querySelector('input[name="email"]').value,
            password : document.querySelector('input[name="password"]').value
        }
        if(signinValidator(user)){
            signin(user)
            .then(data => console.log(data))
            .catch(e => {
                console.log(e)
                this.setState(() => ({error : e}))
            })
        }else{
            this.setState(() => ({error : 'Please complete the form'}))
        }
    }
    render(){
        return (
            <div class="signin">
        <div class="signin_title">Sign In</div>
        <div class="signin_msg">
            Please enter your email and password.
        </div>

        <form class="signin_form" onSubmit={this.submitEventHandler}>
            <div class="signin_form_email">
                <label for="signin_form_email">Email Address:</label>
                <input type="email" id="signin_form_email" name="email" placeholder="Email Address"/>
            </div>
            <div class="signin_form_password">
                <label for="signin_form_password">Password:</label>
                <input type="password" id="signin_form_password" name="password" placeholder="Password"/>
            </div>
            <div>
                <input type="submit" id="signin_form_submit" class="teal-button-box"/>
            </div>
        </form>
    </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  };

export default connect(mapStateToProps)(SignIn);
  