import React from 'react';
import '../styles/chat-page.css'
import '../styles/other-buttons.css'
import getCurrentTime from '../helpers/getCurrentTime'
import {connect} from 'react-redux'

class ChatInput extends React.Component{
    constructor(props){
        super(props)
        this.sendMessage = this.sendMessage.bind(this)
        this.addMessage = this.addMessage.bind(this)
        this.textInput = this.textInput.bind(this)
    }

    addMessage(text , own){
        this.props.dispatch({type : 'ADD_TEXT' , data : {message : {text , time : getCurrentTime() , own}}})
        this.props.dispatch({type : 'REDUCE_BLUR'})
    }
    sendMessage(text  = document.querySelector('.message-input').value, own = true){
        this.addMessage(text , own)
        if(document.querySelector('.message-input')) document.querySelector('.message-input').value = "";
    }
    textInput(e){
        if(e.charCode === 13){
            this.sendMessage()
        }
    }
    render(){
        return (
            <div className="type-and-send-box">
                <input className="message-input" onKeyPress={this.textInput} type="text"/>
                <button className="sendMessage-button-outer" onClick={this.sendMessage}>Send</button>
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