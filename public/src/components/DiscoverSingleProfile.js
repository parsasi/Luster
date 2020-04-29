import React from 'react';
import '../styles/profile.css'


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
                <div class="profile_info_name">Kevin</div>
                <div class="profile_info_desc">
                    <span class="profile_info_desc_location">Vancouver</span>
                    <span class="profile_info_desc_gender">Male</span>
                    <span class="profile_info_desc_age">25</span>
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
            <div class="like-and-dislike-buttons-box">
                <button class="like-dislike-button-outer">
                    <img src="./imgs/X.svg" />
                </button>
                <button class="like-dislike-button-outer">
                    <img src="./imgs/Heart.svg" />
                </button>
            </div>    
     </div>
)


