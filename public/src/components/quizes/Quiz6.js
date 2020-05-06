import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'

const Quiz6 =  (props) => {
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

            <QuizBackward />
            <QuizForward />
            <div class="middlesection">
                <div class="skipbutton" onClick={() => {props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                <div class="progressbar">Start ●●●●●○○○○○ End</div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quiz6);