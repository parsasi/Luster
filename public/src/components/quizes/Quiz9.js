import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'
import QuizParent from './QuizParentClass'
class Quiz9 extends QuizParent{
    render(){
        return (
            <div class="quizmain">
                <img src="../imgs/milk.svg" class="milk_img"/>

                <div class="quizquestion" question="kids">
                    Do you have kids?
                </div>     

                <div class="wide-quiz-button-box" onClick={this.choiceHandle} val="dontwant">
                    Don't Want
                </div>    
                <div class="wide-quiz-button-box" onClick={this.choiceHandle} val="someday">
                    Want Someday
                </div>
                <div class="wide-quiz-button-box" onClick={this.choiceHandle} val="havewant">
                    Have & Want More
                </div>    
                <div class="wide-quiz-button-box" onClick={this.choiceHandle} val="havedontwant">
                    Have & Don't Want More
                </div>


                <QuizBackward />
                <QuizForward />
                <div class="middlesection">
                    <div class="skipbutton" onClick={() => {this.props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                    <div class="progressbar">Start ●●●●●●●●○○ End</div>
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

export default connect(mapStateToProps)(Quiz9);