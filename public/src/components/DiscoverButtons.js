import React from 'react'
import {connect} from 'react-redux'
import newSwipe from '../api/newSwipe'
import swiped from '../api/swiped'
class DiscoverButtons extends React.Component{
    constructor(props){
        super(props)
        this.loadNewProfile = this.loadNewProfile.bind(this)
        this.swiped = this.swiped.bind(this)
    }
    swiped(liked){
        this.loadNewProfile(liked)
    }
    loadNewProfile(liked){
        this.props.dispatch({type : 'LOADING_NEW_USER'})
        swiped(this.props.swipe.currentUser.email , liked)
        .then(data => {
            return  newSwipe()
        })
        .then(data => {
            if(data !== {}){
                this.props.dispatch({type : 'CURRENT_USER_SWIPED' , data : {liked}})
                this.props.dispatch({type : 'FINISHED_LOADING_NEW_USER' , data : data})
            }
        })
        .catch(e => console.log(e))
    }
    render(){
        return (
            <div class="like-and-dislike-buttons-box">
                <button class="like-dislike-button-outer"onClick={() => {this.swiped(false)}}>
                    <img src="./imgs/X.svg" />
                </button>
                <button class="like-dislike-button-outer" onClick={() => {this.swiped(true)}}>
                    <img src="./imgs/Heart.svg" />
                </button>
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      swipe: state.swipe
    };
  };
  
export default connect(mapStateToProps)(DiscoverButtons);
  