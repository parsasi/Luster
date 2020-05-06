import React from 'react';
import Modal from 'react-modal'
import {connect } from 'react-redux'
import QuizMain from './quizes/QuizMain'
import Quiz1 from './quizes/Quiz1'
import Quiz2 from './quizes/Quiz2'
import Quiz3 from './quizes/Quiz3'
import Quiz4 from './quizes/Quiz4'
import Quiz5 from './quizes/Quiz5'
import Quiz6 from './quizes/Quiz6'
import Quiz7 from './quizes/Quiz7'
import Quiz8 from './quizes/Quiz8'
import Quiz9 from './quizes/Quiz9'
import Quiz10 from './quizes/Quiz10'
import QuizFinish from './quizes/QuizFinish'

const allQuizes = [QuizMain , Quiz1 , Quiz2 ,  Quiz3 , Quiz4, Quiz5, Quiz6, Quiz7 ,Quiz8 ,Quiz9 ,Quiz10 , QuizFinish]
class Quizes extends React.Component{
    componentWillMount(){
        allQuizes.forEach((item , counter) => {
            const selected = counter === 0
            this.props.dispatch({type : 'QUIZ_ADD_QUESTION' , data : {component : counter , selected  , answere : '' }})
        })
    }
    render(){
        if(this.props.quiz.filter(item => item.selected == true)[0]){
            const ComponentIndex = this.props.quiz.filter(item => item.selected == true)[0].component
            console.log(ComponentIndex)
            this.Component = allQuizes[ComponentIndex]
        }
        return (
            <div>
                {this.Component && <this.Component />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      quiz: state.quiz
    };
  };

export default connect(mapStateToProps)(Quizes);
  