
import React from 'react';
import MyProfilePictures from './MyProfilePictures'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom';
import getMyProfile from '../api/getMyProfile'
import calculateAge from '../helpers/calculateAge'
import MyProfileQuizAnswers from './MyProfileQuizAnswers'
import Modal from 'react-modal'
import Loading from './Loading'
import Quizes from './Quizes'
class MyProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userProfile : {
                name : '',
                dob : 0,
                gender : '',
                city : ''
            },
            loading: false
        }
    }
    componentDidMount(){
        this.setState(() => ({loading : true}))
        getMyProfile()
        .then(user => {
            console.log(user)
            this.setState(() => ({userProfile : user , loading : false}))
        })
        .catch(console.log)
    }
    render(){
        
        return (
            <div class="edit-profile-page-box">
            {this.state.loading && <Loading />}
            {!!localStorage.getItem('justSignedUp') && <Modal isOpen={true}><Quizes /></Modal>}
                <div class="edit-profile-top">
                    <div class="profile-name">{this.state.userProfile.name}</div>
                    <button class="editProfile-button-outer">
                        <img src="./imgs/Edit.svg"/>
                        <Link to="/edit">Edit Profile</Link>
                    </button>

                </div>
                <div class="profile-content">
                    <MyProfilePictures />
                    <div class="all-profile-info">
                        <div class="profile-info"><b>Age:</b> {calculateAge(new Date(this.state.userProfile.dob))}</div>
                        <div class="profile-info"><b>Gender:</b> {this.state.userProfile.gender}</div> 
                        <div class="profile-info"><b>Location:</b> {this.state.userProfile.city}</div>
                        <MyProfileQuizAnswers quiz={this.state.userProfile.quiz}/>
                    </div>
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
  
export default connect(mapStateToProps)(MyProfile);
  