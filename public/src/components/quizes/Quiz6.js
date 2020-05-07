import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'
import QuizParent from './QuizParentClass'
class Quiz6 extends QuizParent{
    render(){
        return (
            <div class="quizmain">
                <img src="../imgs/pray.svg" class="pray_img"/>

                <div class="quizquestion" question="religion">
                    Are you religious?
                </div>     

                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="yes">
                    Yes
                </div>   
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="no">
                    No
                </div>    
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="spiritual">
                    Spiritual
                </div>

                <QuizBackward />
                <QuizForward />
                <div class="middlesection">
                    <div class="skipbutton" onClick={() => {this.props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                    <div class="progressbar">Start ●●●●●○○○○○ End</div>
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

export default connect(mapStateToProps)(Quiz6);