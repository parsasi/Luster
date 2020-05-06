import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'

export default (props) => {
    return (
        <div class="quizmain">
            <img src="../imgs/placard.svg" class="placard_img"/>

            <div class="quizquestion">
                What are your political leanings?
            </div>     

            <div class="mid-quiz-button-box">
                Apolitical
            </div>   
            <div class="mid-quiz-button-box">
                Moderate
            </div>    
            <div class="mid-quiz-button-box">
                Liberal
            </div>
            <div class="mid-quiz-button-box">
                Conservative
            </div>

            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="teal-button-box nextbutton">
                Next
            </div>
            <div class="middlesection">
                <div class="skipbutton">Skip</div>
                <div class="progressbar">Start ●●●●●●○○○○ End</div>
            </div>
        </div>
    );
}