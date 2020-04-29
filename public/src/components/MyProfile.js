
import React from 'react';
import '../styles/my-profile.css'
import MyProfilePictures from './MyProfilePictures'
import {Link } from 'react-router-dom';

export default (props) => (
     <div class="edit-profile-page-box">
     <div class="edit-profile-top">
         <div class="profile-name">Alecia</div>
         <button class="editProfile-button-outer">
             <img src="./imgs/Edit.svg"/>
             Edit Profile
         </button>

     </div>

     <div class="profile-content">

         <MyProfilePictures />
         <div class="all-profile-info">
             <div class="profile-info"><b>Age:</b> 24</div>
             <div class="profile-info"><b>Gender:</b> Female</div> 
             <div class="profile-info"><b>Location:</b> Burnaby</div>
             <div class="profile-info"><b>Looking For:</b> Relationship</div>
             <div class="profile-info"><b>Exercise Level:</b> Active</div>
             <div class="profile-info"><b>Alcohol:</b> Socially</div>
             <div class="profile-info"><b>Sign:</b> Taurus</div>
             <div class="profile-info"><b>Pets:</b> Lots</div>
             <div class="profile-info"><b>Cannabis:</b> Socially</div>
         </div>
     </div>
 </div>
)