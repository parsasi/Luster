import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'

const Quiz4 = (props) => {
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

            <QuizBackward />
            <QuizForward />
            <div class="middlesection">
                <div class="skipbutton" onClick={() => {props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                <div class="progressbar">Start ●●●○○○○○○○ End</div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quiz4);
  