import React from 'react';

class InChatProfileQuizAnswers extends React.Component{
    componentDidUpdate(){
        if(document.querySelector('.profile_info_blur')){
            document.querySelector('.profile_info_blur').setAttribute('style' , `text-shadow: 0 0 ${this.props.blur}px rgba(0,0,0,1);`)
        }
    }
    render(){
        if(this.props.quiz){
            const allQuestions = {}
            this.props.quiz.forEach(item => {
                allQuestions[item.questionText] = item.answer
            })
            return (
                <div className="profile_info_blur" >
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
}

export default InChatProfileQuizAnswers


//setAttribute('style', ...)