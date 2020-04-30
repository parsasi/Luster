import React from 'react';
import '../styles/edit-profile.css'
import '../styles/my-profile.css'
import '../styles/other-buttons.css'
export default (props) => (
<div className="edit-profile-images">
    <div className="all-profile-images">
        <div className="individual-image main">
            <img className="remove-image" src="./imgs/X.png"/>
            <img className="profile-pic " src="./imgs/testimgs/aleciaprof.jpg"/>
            <img className="primary-image" src="./imgs/Group 55.png"/>
        </div>
        <div className="individual-image">
            <img className="remove-image" src="./imgs/X.png"/>
            <img className="profile-pic" src="./imgs/testimgs/alecia2.jpg"/>
        </div>
        <div className="individual-image">
            <img className="remove-image" src="./imgs/X.png"/>
            <img className="profile-pic" src="./imgs/testimgs/alecia3.jpg"/>
        </div>
        <div className="individual-image">
            <img className="remove-image" src="./imgs/X.png"/>
            <img className="profile-pic" src="./imgs/testimgs/alecia4.jpg"/>
        </div>
        <div className="individual-image">
            <img className="remove-image" src="./imgs/X.png"/>
            <img className="profile-pic" src="./imgs/testimgs/alecia5.jpg"/>
        </div> 
    </div>
    <button className="white-button-outer upload-button">
        Upload
    </button>
    <div className="photo-info">
        <img  src="./imgs/Group 55.png"/>
        primary photo
    </div>
</div>
)