import React from 'react';
import {connect} from 'react-redux'
import '../styles/discovery-profile.css'
import DiscoverSingleProfile from './DiscoverSingleProfile'
import newSwipe from '../api/newSwipe'
import DiscoverButtons from './DiscoverButtons'
import Loading from './Loading'
class DiscoverProfile extends React.Component{
    constructor(props){
        super(props)
        this.loadNewProfile = this.loadNewProfile.bind(this)
        // !this.props.swipe.currentUser.email && this.loadNewProfile()
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
                <DiscoverSingleProfile user={this.props.swipe.currentUser}/>
                <DiscoverButtons />
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
  