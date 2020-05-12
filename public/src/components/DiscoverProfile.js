import React from 'react';
import {connect} from 'react-redux'
import '../styles/discovery-profile.css'
import DiscoverSingleProfile from './DiscoverSingleProfile'
import newSwipe from '../api/newSwipe'
class DiscoverProfile extends React.Component{
    componentWillMount(){
        this.props.dispatch({type : 'LOADING_NEW_USER'})
    }
    componentDidMount(){
        newSwipe()
        .then(data => {
            if(data !== {}){
                this.props.dispatch({type : 'FINISHED_LOADING_NEW_USER' , data : data})
            }
        })
    }
    render(){
        return (
            <div class="discovery-profile-box">
                {this.props.swipe.loading && <p>loading</p>}
                <DiscoverSingleProfile user={this.props.swipe.currentUser}/>
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
  