import React from 'react';
import {connect} from 'react-redux'
import '../styles/discovery-profile.css'
import DiscoverSingleProfile from './DiscoverSingleProfile'
import newSwipe from '../api/newSwipe'
import DiscoverButtons from './DiscoverButtons'
import Loading from './Loading'
// import Modal from 'react-modal'
import MatchedPopUp from './MatchPopUp'
class DiscoverProfile extends React.Component{
    constructor(props){
        super(props)
        this.loadNewProfile = this.loadNewProfile.bind(this)
    }
    componentWillMount(){
        this.props.dispatch({type : 'LOADING_NEW_USER'})
    }
    loadNewProfile(){
        this.props.dispatch({type : 'LOADING_NEW_USER'})
        newSwipe()
        .then(data => {
            if(data !== {}){
                this.props.dispatch({type : 'FINISHED_LOADING_NEW_USER' , data : data})
            }
        })
    }
    componentDidMount(){
        this.loadNewProfile()
    }
    render(){
        return (
            <div class="discovery-profile-box">
                {this.props.swipe.loading && <Loading />}
                {!this.props.swipe.matched ? <DiscoverSingleProfile user={this.props.swipe.currentUser}/> : <MatchedPopUp/>}
                {!this.props.swipe.matched && <DiscoverButtons />}
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
  
export default connect(mapStateToProps)(DiscoverProfile);
  
// <Modal isOpen={this.props.swipe.matched}><MatchedPopUp /></Modal>
