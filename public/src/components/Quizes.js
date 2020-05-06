import React from 'react';
import Modal from 'react-modal'
import {connect } from 'react-redux'
import QuizMain from './quizes/QuizMain'
import Quiz1 from './quizes/Quiz1'

const allQuizes = [QuizMain , Quiz1]
class Quizes extends React.Component{
    componentWillMount(){
        this.props.dispatch({type : 'QUIZ_ADD_QUESTION' , data : {component : 0 , selected : true , answere : '' }})
        this.props.dispatch({type : 'QUIZ_ADD_QUESTION' , data : {component : 1 , selected : false , answere : '' }})
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
  