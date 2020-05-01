import React from 'react';

export default (props) => (
    <div class="individual-image">                           
        <img className={!!props.isMain ? "main-profile-pic" : "profile-pic"} src={props.url}/>
    </div>
)


