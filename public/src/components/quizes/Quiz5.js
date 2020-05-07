import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import QuizForward from './QuizForward';
import {connect} from 'react-redux'
import QuizParent from './QuizParentClass'
class Quiz5 extends QuizParent{
    constructor(props){
        super(props)
        this.choiceHandle = this.choiceHandle.bind(this)
    }
    choiceHandle(e){
        const selectedValue = e.target.value
        const questionText = document.querySelector('.quizquestion').getAttribute('question')

        this.props.dispatch({type : 'QUIZ_QUESTION_ANSWERED' , data : {question : this.props.index , answer : selectedValue ,  questionText : questionText }})
    }
    render(){
        return (
            <div class="quizmain">
                <img src="../imgs/zodiac.svg" class="zodiac_img"/>

                <div class="quizquestion" question="star">
                    What is your star sign?
                </div>     

                <select class="zodiacsigns" onChange={this.choiceHandle} name="zodiacsigns">
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                </select>


                <QuizBackward />
                <QuizForward />
                <div class="middlesection">
                    <div class="skipbutton" onClick={() => {this.props.dispatch({type : 'QUIZ_NEXT_QUESTION'})}}>Skip</div>
                    <div class="progressbar">Start ●●●●○○○○○○ End</div>
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

export default connect(mapStateToProps)(Quiz5);
  