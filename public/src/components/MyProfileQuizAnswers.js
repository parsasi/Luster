// {this.state.userProfile.quiz.indexOf({questionText : 'relationship'})}
import React from 'react';


export default (props) =>{
    if(props.quiz){
        const allQuestions = {}
        props.quiz.forEach(item => {
            allQuestions[item.questionText] = item.answer
        })
        return (
            <div>
                {allQuestions["relationship"] && <div class="profile-info"><b>Looking For:</b> {allQuestions.relationship}</div>}
                {allQuestions["exercise"]  && <div class="profile-info"><b>Exercise Level:</b> {allQuestions.exercise}</div>}
                {allQuestions["alcohol"]  && <div class="profile-info"><b>Alcohol:</b> {allQuestions.alcohol}</div> }
                {allQuestions["star"]  && <div class="profile-info"><b>Sign:</b> {allQuestions.star}</div>}
                {allQuestions["pets"]  && <div class="profile-info"><b>Pets:</b> {allQuestions.pets}</div>}
                {allQuestions["cannabis"]  && <div class="profile-info"><b>Cannabis:</b>{allQuestions.cannabis}</div>}
            </div>
        )
    }
    return ''
} 