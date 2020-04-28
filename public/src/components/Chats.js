import React from 'react';
import ChatsAllChats from './ChatsAllChats'
import '../styles/chat-page.css'
import InChatProfile from './InChatProfile'
import SingleText from '../components/SingleText'

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
            
            <SingleText text="Hey! How are you?" time="08:54" own={false}/>
            <SingleText text="I am good! How are you?" time="08:55" own={true}/>

        </div>
        <div class="type-and-send-box">
            <input class="message-input" type="text"/>
            <div class="sendMessage-button-outer">Send</div>
        </div>
    </div>
</div>
)


// <div class="individual-message bubbleWrapper">
//                 <div class="inlineContainer">
//                     <div class="otherBubble other">
                        
//                     </div>
//                 </div><span class="other"></span>
//             </div>


// <div class="bubbleWrapper">
//                 <div class="inlineContainer own">
//                     <div class="ownBubble own">
//                         I'm doing good, how are you?
//                     </div>
//                 </div><span class="own">08:55</span>
//             </div>