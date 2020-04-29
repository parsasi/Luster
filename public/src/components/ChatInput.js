import React from 'react';
import '../styles/chat-page.css'
import '../styles/other-buttons.css'

export default () => (
    <div class="type-and-send-box">
        <input class="message-input" type="text"/>
        <button class="sendMessage-button-outer">Send</button>
    </div>
)