import React from 'react';
import '../styles/chat-page.css'


export default (props) => (
    <div className="in-chat-profile">
    <div>
        <div class="profile_info_name">Kevin</div>
        <div class="chat-profile-picture">
            <img src="imgs/testimgs/kevinprof.png" />
        </div>
    </div>
    <div className="profile_info">
        <div className="profile_info_desc">
            <span class="profile_info_desc_location">Vancouver</span> 
            <span class="profile_info_desc_gender">Male</span>
            <span class="profile_info_desc_age">25</span>
        </div>
        <div className="profile_info_blur">
            Looking for: Relationship 
            Exercise Level: Active
            Alcohol: Socially
            Sign: Pisces
        </div>
    </div>
</div>
)


