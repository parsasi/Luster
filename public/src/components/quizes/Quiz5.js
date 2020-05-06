import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'

export default (props) => {
    return (
        <div class="quizmain">
            <img src="../imgs/zodiac.svg" class="zodiac_img"/>

            <div class="quizquestion">
                What is your star sign?
            </div>     

            <select class="zodiacsigns" name="zodiacsigns">
                <option value="Aries">Aries</option>
                <option value="Taurus">Taurus</option>
                <option value="Gemini">Gemini</option>
                <option value="Cancer">Cancer</option>
                <option value="Leo">Leo</option>
                <option value="Virgo">Virgo</option>
                <option value="Libra">Libra</option>
                <option value="Scorpio">Scorpio</option>
                <option value="Sagittarius">Sagittarius</option>
                <option value="Capricorn">Capricorn</option>
                <option value="Aquarius">Aquarius</option>
                <option value="Pisces">Pisces</option>
            </select>


            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="teal-button-box nextbutton">
                Next
            </div>
            <div class="middlesection">
                <div class="skipbutton">Skip</div>
                <div class="progressbar">Start ●●●●○○○○○○ End</div>
            </div>
        </div>
    );
}