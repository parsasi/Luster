import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'

export default (props) => {
    return (
        <div class="quizmain">
            <img src="../imgs/pray.svg" class="pray_img"/>

            <div class="quizquestion">
                Are you religious?
            </div>     

            <div class="mid-quiz-button-box">
                Yes
            </div>   
            <div class="mid-quiz-button-box">
                No
            </div>    
            <div class="mid-quiz-button-box">
                Spiritual
            </div>

            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="teal-button-box nextbutton">
                Next
            </div>
            <div class="middlesection">
                <div class="skipbutton">Skip</div>
                <div class="progressbar">Start ●●●●●○○○○○ End</div>
            </div>
        </div>
    );
}