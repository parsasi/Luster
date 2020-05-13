import React from 'react'
import '../styles/matchpopup.css'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
const MatchPopUp =  (props) => (
    <div class="matchpopup">
        <img class="matchpopup_title" src="./imgs/match.svg" />
        <div class="matchpopup_text">
            Congrats, it’s a match!
        </div>

        <div class="matchpopup_comp">
            <div class="pop-profile_picture">
                <img src="imgs/testimgs/kevinprof.png" />
            </div>
            <div class="pop-profile_info">
                <div class="pop-profile_info_name">{props.swipe.matchedUser.name}</div>
                <div class="pop-profile_info_desc">
                    <span class="pop-profile_info_desc_location">{props.swipe.matchedUser.city}</span>
                    <span class="pop-profile_info_desc_gender">{props.swipe.matchedUser.gender}</span>
                    <span class="pop-profile_info_desc_age">25</span>
                </div>
            </div>
        </div>

        <Link to="/chat" class="big-teal-button-box">
            Message
        </Link>
        <button class="big-teal-button-box continuebutton" onClick={() => {props.dispatch({type : 'RESET_MATCHED'})}}>
            Continue
        </button>
    </div> 
)

const mapStateToProps = (state) => {
    return {
      user: state.user,
      swipe: state.swipe
    };
  };
  
export default connect(mapStateToProps)(MatchPopUp);
  