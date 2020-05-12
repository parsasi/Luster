import React from 'react';
import '../styles/profile.css'
import calculateAge from '../helpers/calculateAge'

export default (props) => (
    <div>
        <div class="profile">
            <div class="profile_pictures">
                <div class="profile_pictures_main">
                    <img src="imgs/testimgs/kevinprof.png" />
                </div>
                <div class="profile_pictures_other">
                    <img src="imgs/testimgs/kevin2.jpg" />
                    <img src="imgs/testimgs/kevin3.jpg" />
                </div>
            </div>
            <div class="profile_info">
                <div class="profile_info_name">{props.user.name}</div>
                <div class="profile_info_desc">
                    <span class="profile_info_desc_location">{props.user.city}</span>
                    <span class="profile_info_desc_gender">{props.user.Gender}</span>
                    <span class="profile_info_desc_age">{!isNaN(calculateAge(new Date(props.user.dob))) && calculateAge(new Date(props.user.dob))}</span>
                </div>
                <div class="profile_info_blur">
                    Looking for: Relationship <br/>
                    Exercise Level: Active <br/>
                    Alcohol: Socially <br/>
                    Sign: Pisces
                </div>
            </div>
            <div class="profile_report">
                <img src="imgs/dots.svg" />
            </div>
        </div>
     </div>
)


