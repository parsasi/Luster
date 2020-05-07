import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
class Quiz extends React.Component{
    constructor(props){
        super(props)
        this.choiceHandle = this.choiceHandle.bind(this)
    }
    ChangeChoice(element){
        const allChoices = document.querySelectorAll('.mid-quiz-button-box,.wide-quiz-button-box,.narrow-quiz-button-box')
        for(let choice of allChoices){
            choice.classList.remove('selected')
        }
        element.classList.add('selected')
    }
    choiceHandle(e){
        this.ChangeChoice(e.target)
        const selectedValue = e.target.getAttribute('val')
        const questionText = document.querySelector('.quizquestion').getAttribute('question')
        this.props.dispatch({type : 'QUIZ_QUESTION_ANSWERED' , data : {question : this.props.index , answer : selectedValue , questionText : questionText }})
    }
}

export default Quiz