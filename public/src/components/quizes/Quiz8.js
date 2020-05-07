import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'
import QuizParent from './QuizParentClass'
class Quiz8 extends QuizParent{
    render(){
        return (
            <div class="quizmain">
                <img src="../imgs/paws.svg" class="paws_img"/>

                <div class="quizquestion" question="pets">
                    Do you have pets?
                </div>     

                <div class="narrow-quiz-button-box" onClick={this.choiceHandle} val="cat">
                    Cat(s)
                </div>   
                <div class="narrow-quiz-button-box" onClick={this.choiceHandle} val="dog ">
                    Dog(s)
                </div>      
                <div class="narrow-quiz-button-box" onClick={this.choiceHandle} val="other">
                    other
                </div>  
                <div class="narrow-quiz-button-box" onClick={this.choiceHandle} val="none">
                    None
                </div>     
                <div class="mid-quiz-button-box" onClick={this.choiceHandle} val="dontwant">
                    Don't Want
                </div>    
                <QuizBackward />
                <QuizForward />
                <div class="middlesection">
                    <div class="skipbutton" onClick={() => {this.props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                    <div class="progressbar">Start ●●●●●●●○○○ End</div>
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

export default connect(mapStateToProps)(Quiz8);