import React from 'react';
import ChatsAllChats from './ChatsAllChats'
import '../styles/chat-page.css'
import InChatProfile from './InChatProfile'
import SingleText from '../components/SingleText'
import ChatInput from '../components/ChatInput'
export default (props) => (
<div className="chat-page-box">
    <div class="all-chats">
        <ChatsAllChats name="Kevin Heart" />
        <ChatsAllChats name="Alison Lee" />
        <ChatsAllChats name="Karen"/>
    </div>
    <div className="current-chat">
        <InChatProfile />
        <div class="message-boxes">
            
            <SingleText text="Hey! How are you?" time="08:54" own={false}/>
            <SingleText text="I am good! How are you?" time="08:55" own={true}/>

        </div>
        <ChatInput />
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