import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'

const Quiz8 =  (props) => {
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
            <QuizBackward />
            <QuizForward />
            <div class="middlesection">
                <div class="skipbutton" onClick={() => {props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                <div class="progressbar">Start ●●●●●●●○○○ End</div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quiz8);