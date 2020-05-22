import React from 'react'
import '../styles/matchpopup.css'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import calculateAge from '../helpers/calculateAge' 
import MatchPopUpImage from './MatchPopUpImage'
const MatchPopUp =  (props) => (
    <div class="matchpopup">
        <img class="matchpopup_title" src="./imgs/Match.png" />
        <div class="matchpopup_text">
            Congrats, it’s a match!
        </div>

        <div class="matchpopup_comp">
            {props.swipe.matchedUser.image ? <MatchPopUpImage image={props.swipe.matchedUser.image} /> : <MatchPopUpImage image="./imgs/avatar.png"/>}
            <div class="pop-profile_info">
                <div class="pop-profile_info_name">{props.swipe.matchedUser.name}</div>
                <div class="pop-profile_info_desc">
                    <span class="pop-profile_info_desc_location">{props.swipe.matchedUser.city}</span>
                    <span class="pop-profile_info_desc_gender">{props.swipe.matchedUser.gender}</span>
                    <span class="pop-profile_info_desc_age">{props.swipe.matchedUser.dob && calculateAge(new Date(props.swipe.matchedUser.dob))}</span>
                </div>
            </div>
        </div>
        <div className="pop-up-buttons-container">
            <Link to="/chat" class="big-teal-button-box go-to-match">
            Message
            </Link>
            <button class="big-teal-button-box continuebutton" onClick={() => {props.dispatch({type : 'RESET_MATCHED'})}}>
                Continue
            </button>
        </div>
    </div> 
)

const mapStateToProps = (state) => {
    return {
      user: state.user,
      swipe: state.swipe
    };
  };
  
export default connect(mapStateToProps)(MatchPopUp);
  