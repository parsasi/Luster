import React from 'react';

export default (props) =>{
    if(props.quiz){
        const allQuestions = {}
        props.quiz.forEach(item => {
            allQuestions[item.questionText] = item.answer
        })
        return (
            <div className="profile_info_blur">
                {allQuestions["relationship"] && <span> Looking for: {allQuestions.relationship} <br/></span>}
                {allQuestions["exercise"]  && <span>Exercise Level:  {allQuestions.exercise} <b/></span>}
                {allQuestions["alcohol"]  && <span>Alcohol: {allQuestions.alcohol}<br/></span> }
                {allQuestions["star"]  && <span>Sign: {allQuestions.star}<br/></span>}
                {allQuestions["pets"]  && <span>Pets: {allQuestions.pets}<br/></span>}
                {allQuestions["cannabis"]  && <span>Cannabis: {allQuestions.cannabis}<br/></span>}
            </div>
        )
    }
    return ''
} 
