import React from 'react';
import '../../styles/quiz-buttons.css'

import '../../styles/quiz.css'

export default (props) => {
    return (
        <div class="quizmain">
            <img src="../imgs/looking.svg" class="looking_img"/>

            <div class="quizquestion">
                What are you looking for?
            </div>     
               
            <div class="mid-quiz-button-box">
                Casual
            </div>     
            <div class="mid-quiz-button-box">
                Relationship
            </div> 
            <div class="mid-quiz-button-box">
                Marriage
            </div> 
            <div class="mid-quiz-button-box">
                Don't Know
            </div>


            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="teal-button-box nextbutton">
                Next
            </div>
            <div class="middlesection">
                <div class="skipbutton">Skip</div>
                <div class="progressbar">Start ●●●●●●●●●○ End</div>
            </div>
        </div>
    );
}