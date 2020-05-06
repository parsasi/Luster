import React from 'react';
import {connect} from 'react-redux'
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'

const QuizForward =  (props) => {
    return (
      <div class="teal-button-box nextbutton" onClick={() => {props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>
          Next
      </div>
    )

}

const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(QuizForward);