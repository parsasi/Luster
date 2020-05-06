import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'
import QuizParent from './QuizParentClass'
class Quiz10 extends QuizParent{
    render(){
        return (
            <div class="quizmain">
                <img src="../imgs/looking.svg" class="looking_img"/>

                <div class="quizquestion">
                    What are you looking for?
                </div>     
                
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="casual">
                    Casual
                </div>     
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="relationship">
                    Relationship
                </div> 
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="marriage">
                    Marriage
                </div> 
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="dontknow">
                    Don't Know
                </div>
                <QuizBackward />
                <QuizForward />
                <div class="middlesection">
                    <div class="skipbutton" onClick={() => {this.props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                    <div class="progressbar">Start ●●●●●●●●●○ End</div>
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

export default connect(mapStateToProps)(Quiz10);