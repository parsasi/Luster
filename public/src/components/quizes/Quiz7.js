import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'

const Quiz7 = (props) => {
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
            <QuizBackward />
            <QuizForward />
            <div class="middlesection">
                <div class="skipbutton" onClick={() => {props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                <div class="progressbar">Start ●●●●●●○○○○ End</div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quiz7);