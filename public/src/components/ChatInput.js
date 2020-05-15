import React from 'react';
import '../styles/chat-page.css'
import '../styles/other-buttons.css'
import {connect} from 'react-redux'

class ChatInput extends React.Component{
    
    render(){
        return (
            <div class="type-and-send-box">
                <input class="message-input" type="text"/>
                <button class="sendMessage-button-outer">Send</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      user: state.user,
      text: state.text
    };
  };
  
export default connect(mapStateToProps)(ChatInput);