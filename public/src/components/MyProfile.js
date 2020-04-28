
import React from 'react';
import '../styles/my-profile.css'
import {Link } from 'react-router-dom';

export default (props) => (
     <div class="edit-profile-page-box">
     <div class="edit-profile-top">
         <div class="profile-name">Alecia</div>
         <div class="editProfile-button-outer">
             <img src="./imgs/Edit.svg"/>
             Edit Profile
         </div>

     </div>

     <div class="profile-content">

         <div class="all-profile-images">
             <div class="individual-image">                           
                 <img class="main-profile-pic" src="./imgs/testimgs/aleciaprof.jpg"/>
             </div>
             <div class="individual-image">
                 <img class="profile-pic" src="./imgs/testimgs/alecia2.jpg"/>
             </div>
             <div class="individual-image">
                 <img class="profile-pic" src="./imgs/testimgs/alecia3.jpg"/>
             </div>
             <div class="individual-image">
                 <img class="profile-pic" src="./imgs/testimgs/alecia4.jpg"/>
             </div>
             <div class="individual-image">
                 <img class="profile-pic" src="./imgs/testimgs/alecia5.jpg"/>
             </div> 
         </div>
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