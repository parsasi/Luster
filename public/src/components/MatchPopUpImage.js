import React from 'react';
export default class InChatProfileImage extends React.Component{
    render(){
        return(
            <div class="pop-profile_picture">
                <img draggable={false} className="pop-up-profile-picture-img" src={this.props.image} />
            </div>
        )
    }
}
