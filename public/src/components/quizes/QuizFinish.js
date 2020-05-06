import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'

export default (props) => {
    return (
        <div class="quizmain">
            <img class="quizmain_title" src="../imgs/finished.svg" />
            <div class="quizmain_text">
                Based on your answers, we will provide you with your best matches first.
            </div>
            <div class="big-teal-button-box">
                Start Matching!
            </div>
            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="middlesection">
                <div class="progressbarfin">Start ●●●●●●●●●● End</div>
            </div>
        </div>
    );
}