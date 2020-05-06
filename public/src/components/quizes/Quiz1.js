import React from 'react';
import {connect} from 'react-redux'
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'

const Quiz1 =  (props) => {
    return (
        <div class="quizmain">
            <img src="../imgs/weight.svg" class="exercise_img"/>

            <div class="quizquestion">
                What is your exercise level?
            </div>     

            <div class="mid-quiz-button-box">
                Active
            </div>   
            <div class="mid-quiz-button-box">
                Sometimes
            </div>    
            <div class="mid-quiz-button-box">
                Never
            </div>

            <div class="teal-button-box backbutton">
                Back
            </div>
            <div class="teal-button-box nextbutton">
                Next
            </div>
            <div class="middlesection">
                <div class="skipbutton" onClick={props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}>Skip</div>
                <div class="progressbar">Start ○○○○○○○○○○ End</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quiz1);
  
//onClick={props.dispatch({type : 'QUIZ_CHANGE_QUESTION' , data : props.quiz.})}