import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'

export default (props) => {
    return (
        <div class="quizmain">
            <img src="../imgs/smoke.svg" class="smoke_img"/>

            <div class="quizquestion">
                Do you smoke?
            </div>     

            <div class="mid-quiz-button-box">
                Socially
            </div>   
            <div class="mid-quiz-button-box">
                Frequently
            </div>    
            <div class="mid-quiz-button-box">
                Never
            </div>

            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="teal-button-box nextbutton">
                Next
            </div>
            <div class="middlesection">
                <div class="skipbutton">Skip</div>
                <div class="progressbar">Start ●●●○○○○○○○ End</div>
            </div>
        </div>
    );
}