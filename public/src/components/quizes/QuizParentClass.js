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
            console.log(choice)
            choice.classList.remove('selected')
        }
        element.classList.add('selected')
    }
    choiceHandle(e){
        this.ChangeChoice(e.target)
        const selectedValue = e.target.getAttribute('val')
        this.props.dispatch({type : 'QUIZ_QUESTION_ANSWERED' , data : {question : this.props.index , answer : selectedValue}})
    }
}

export default Quiz