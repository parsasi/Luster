import React from 'react';
import '../../styles/quiz-buttons.css'

import '../../styles/quiz.css'

export default (props) => {
    return (
        <div class="quizmain">
            <img src="../imgs/paws.svg" class="paws_img"/>

            <div class="quizquestion">
                Do you have pets?
            </div>     

            <div class="narrow-quiz-button-box">
                Cat(s)
            </div>   
            <div class="narrow-quiz-button-box">
                Dog(s)
            </div>      
            <div class="narrow-quiz-button-box">
                Lots
            </div>  
            <div class="narrow-quiz-button-box">
                None
            </div>     
            <div class="mid-quiz-button-box">
                Don't Want
            </div>    

            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="teal-button-box nextbutton">
                Next
            </div>
            <div class="middlesection">
                <div class="skipbutton">Skip</div>
                <div class="progressbar">Start ●●●●●●●○○○ End</div>
            </div>
        </div>
    );
}