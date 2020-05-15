import React from 'react';
import '../styles/chat-page.css'
import {connect} from 'react-redux'

class ChatAllChats extends React.Component{
    render(){
        return (
            <div class="individual-chat" id={this.props.id} onClick={()=> {this.props.dispatch({type : 'CHANGED_USER' , data : {email : this.props.id}})}}>
                 <img src="https://img.icons8.com/material-rounded/48/000000/user-male-circle.png"/>
                 <span class="chat-name">{this.props.name}</span>
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
  
export default connect(mapStateToProps)(ChatAllChats);