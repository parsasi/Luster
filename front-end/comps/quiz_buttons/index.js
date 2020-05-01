import React from 'react';
import './quiz_buttons.css';

<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>

const QuizButton = ({text, color}) => <div 
    style={{backgroundColor:color}}
    className="quiz-button-outer">
    <div className="quiz-button-inner">
        {text}
    </div>
</div>

QuizButton.defaultProps = {
    text:"default text",
    color:"#E7FFF8",
}

export default QuizButton;