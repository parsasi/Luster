import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'
import QuizParent from './QuizParentClass'
class Quiz7 extends QuizParent{
    render(){
        return (
            <div class="quizmain">
                <img src="../imgs/placard.svg" class="placard_img"/>

                <div class="quizquestion">
                    What are your political leanings?
                </div>     

                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="apolitical">
                    Apolitical
                </div>   
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="moderate">
                    Moderate
                </div>    
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="liberal">
                    Liberal
                </div>
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="conservative">
                    Conservative
                </div>
                <QuizBackward />
                <QuizForward />
                <div class="middlesection">
                    <div class="skipbutton" onClick={() => {this.props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                    <div class="progressbar">Start ●●●●●●○○○○ End</div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quiz7);