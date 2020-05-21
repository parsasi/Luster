import React from 'react';
import '../../styles/quiz-buttons.css'
import '../../styles/quiz.css'
import QuizBackward from './QuizBakward'
import {connect} from 'react-redux'
import quizTransformer from '../../helpers/quizTransformer'
import sendQuiz from '../../api/quiz'
import {Redirect } from 'react-router-dom'
class QuizFinish extends React.Component{
    constructor(props){
        super(props)
        this.state = {finished : false}
        this.sendDataHandler = this.sendDataHandler.bind(this)
    }
    sendDataHandler(){
        sendQuiz(quizTransformer(this.props.quiz))
        .then(data => {
            localStorage.removeItem('justSignedUp')
            this.setState(() => ({finished : true}))
        })
    }
    render(){
        return (
            <div class="quizmain quiz-main-finish">
                {this.state.finished && <Redirect to="/discovery" />}
                <img class="quizmain_title" src="../imgs/Finished.png" />
                <div class="quizmain_text">
                    Based on your answers, we will provide you with your best matches first.
                </div>
                <div class="big-teal-button-box" onClick={this.sendDataHandler}>
                    Start Matching!
                </div>
                <QuizBackward />
                <div class="middlesection">
                    <div class="progressbarfin">Start ●●●●●●●●●● End</div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(QuizFinish);