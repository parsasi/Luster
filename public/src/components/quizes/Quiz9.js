import React from 'react';
import '../../styles/quiz-buttons.css'

import '../../styles/quiz.css'

export default (props) => {
    return (
        <div class="quizmain">
            <img src="../imgs/milk.svg" class="milk_img"/>

            <div class="quizquestion">
                Do you have kids?
            </div>     

            <div class="wide-quiz-button-box">
                Don't Want
            </div>    
            <div class="wide-quiz-button-box">
                Want Someday
            </div>
            <div class="wide-quiz-button-box">
                Have & Want More
            </div>    
            <div class="wide-quiz-button-box">
                Have & Don't Want More
            </div>


            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="teal-button-box nextbutton">
                Next
            </div>
            <div class="middlesection">
                <div class="skipbutton">Skip</div>
                <div class="progressbar">Start ●●●●●●●●○○ End</div>
            </div>
        </div>
    );
}