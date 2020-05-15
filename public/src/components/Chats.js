import React from 'react';
import ChatsAllChats from './ChatsAllChats'
import '../styles/chat-page.css'
import InChatProfile from './InChatProfile'
import SingleText from '../components/SingleText'
import ChatInput from '../components/ChatInput'
import {connect} from 'react-redux'
import getMatches from '../api/getMatches'

class Chats extends React.Component{
    constructor(props){
        super(props)
        this.getAllMacthes = this.getAllMacthes.bind(this)
    }
    componentDidMount(){
        this.getAllMacthes()
    }
    getAllMacthes(){
        getMatches()
        .then(allMacthes => this.props.dispatch({type : 'LOADED_ALL_USERS' , data : allMacthes}))
    }
    render(){
        return(
            <div className="chat-page-box">
                <div class="all-chats">
                    {this.props.text.allUsers.map(item => <ChatsAllChats key={item.email} name={item.name} id={item.email} />)}
                </div>
                <div className="current-chat">
                    <InChatProfile user={this.props.text.currentUser} />
                    <div class="message-boxes">
                        {this.props.text.currentUser.messages.map(item => <SingleText text={item.text} time={item.time} own={item.own}/>)}
                        <SingleText text="Hey! How are you?" time="08:54" own={false}/>
                        <SingleText text="I am good! How are you?" time="08:55" own={true}/>
                    </div>
                    <ChatInput />
                </div>
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
  
export default connect(mapStateToProps)(Chats);
  


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