import React from 'react';
export default class InChatProfileImage extends React.Component{
    componentDidUpdate(){
        if(document.querySelector('.chat-profile-picture-img')){
            document.querySelector('.chat-profile-picture-img').setAttribute('style' , `filter: blur(${this.props.blur}px);`)
        }
    }
    render(){
        return(
            <div class="chat-profile-picture">
                <img className="chat-profile-picture-img" src={this.props.image} />
            </div>
        )
    }
}
