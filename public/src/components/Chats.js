import React from 'react';
import ChatsAllChats from './ChatsAllChats'
import '../styles/chat-page.css'
import InChatProfile from './InChatProfile'

export default (props) => (
<div className="chat-page-box">
    <div class="all-chats">
        <ChatsAllChats />
        <ChatsAllChats />
        <ChatsAllChats />
    </div>
    <div className="current-chat">
        <InChatProfile />
        <div class="message-boxes">
            <div class="individual-message bubbleWrapper">
                <div class="inlineContainer">
                    <div class="otherBubble other">
                        Hey! How are you?
                    </div>
                </div><span class="other">08:54</span>
            </div>

            <div class="bubbleWrapper">
                <div class="inlineContainer own">
                    <div class="ownBubble own">
                        I'm doing good, how are you?
                    </div>
                </div><span class="own">08:55</span>
            </div>
        </div>
        <div class="type-and-send-box">
            <input class="message-input" type="text"/>
            <div class="sendMessage-button-outer">Send</div>
        </div>
    </div>
</div>
)