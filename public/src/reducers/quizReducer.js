// User Reducer

const quizReducerDefaultState = [];

// ({
//     component : 'component here',
//     selected : false,
//     answer : 'the users answer as a text'
// })
  
export default (state = quizReducerDefaultState, action) => {
    switch (action.type) {
      case 'QUIZ_ADD_QUESTION':
        return state.concat(action.data)
      case 'QUIZ_CHANGE_QUESTION':
        let newState = state.map(item => {
          item.selected = false
          return item
        })
        newState = newState.map(item =>{
          item.selected = item.component == action.data
          return item
        })
        return newState
      case 'QUIZ_NEXT_QUESTION':
        const currentQuestion = state.filter(item => item.selected === true)[0]
        if(currentQuestion){
          let component = currentQuestion.component + 1
          let nextQuestionNewState = state.map(item => {
            item.selected = false
            return item
          })
          nextQuestionNewState = nextQuestionNewState.map(item =>{
            item.selected = item.component == component
            return item
          })
          return nextQuestionNewState 
        }
        case 'QUIZ_PREV_QUESTION':
          const prevCurrentQuestion = state.filter(item => item.selected === true)[0]
          if(prevCurrentQuestion){
            let prevComponent = prevCurrentQuestion.component - 1
            let prevQuestionNewState = state.map(item => {
              item.selected = false
              return item
            })
            prevQuestionNewState = prevQuestionNewState.map(item =>{
              item.selected = item.component == prevComponent
              return item
            })
            return prevQuestionNewState 
          }
      default:
        return state;
    }
};
  