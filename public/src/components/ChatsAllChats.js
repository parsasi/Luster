import React from 'react';
import '../styles/chat-page.css'


export default (props) => (
    <div class="individual-chat">
        <img src="https://img.icons8.com/material-rounded/48/000000/user-male-circle.png"/>
        <span class="chat-name">{props.name}</span>
    </div>
)