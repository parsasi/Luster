import React from 'react';
import {connect} from 'react-redux'
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'

const QuizBackward =  (props) => {
    return (
        <div class="teal-button-box backbutton" onClick={() => {props.dispatch({type : 'QUIZ_PREV_QUESTION'})}}>
         Back
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(QuizBackward);