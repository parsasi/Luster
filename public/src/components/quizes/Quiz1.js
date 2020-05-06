import React from 'react';
import {connect} from 'react-redux'
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import QuizParent from './QuizParentClass'
class Quiz1 extends QuizParent{
    render(){
        return (
            <div class="quizmain">
            <img src="../imgs/weight.svg" class="exercise_img"/>

            <div class="quizquestion">
                What is your exercise level?
            </div>     

            <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="active">
                Active
            </div>   
            <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="sometimes">
                Sometimes
            </div>    
            <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="never">
                Never
            </div>
            <QuizBackward />
            <QuizForward />
            <div class="middlesection">
                <div class="skipbutton" onClick={() => {this.props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                <div class="progressbar">Start ○○○○○○○○○○ End</div>
             </div>
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quiz1);
  
//onClick={props.dispatch({type : 'QUIZ_CHANGE_QUESTION' , data : props.quiz.})}