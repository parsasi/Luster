import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'

const Quiz3 =  (props) => {
    return (<div class="quizmain">
    <img src="../imgs/cannabis.svg" class="cannabis_img"/>

    <div class="quizquestion">
        Do you use cannabis?
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
        <div class="progressbar">Start ●●○○○○○○○○ End</div>
    </div>
</div>);
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quiz3);
  