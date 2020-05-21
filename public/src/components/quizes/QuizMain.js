import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import {connect} from 'react-redux'

const QuizMain =  (props) => {
    return (
        <div class="quizmain quiz-main-main">
            <img class="quizmain_title" src="../imgs/Quiz.png" />
            <div class="quizmain_text">
                You are now ready to take our ten question match-making quiz. You may skip any question you like, but each answer you give helps us find your best matches!
                <br/>
                <br/>
                <br/>
                Answers can be changed on the edit profile page.
            </div>
            <div class="big-teal-button-box" onClick={() => {props.dispatch({type : 'QUIZ_CHANGE_QUESTION' , data : 1})}}>
                Let's Begin
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(QuizMain);
  