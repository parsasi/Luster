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
        console.log(newState)
        newState = newState.map(item =>{
          item.selected = item.component == action.data
          return item
        })
        return newState
      case 'QUIZ_NEXT_QUESTION':
        const currentQuestion = state.filter(item => item.selected === true)[0]
        let currentIndex = state.indexOf(currentQuestion)
        // if() 
        return newState
      default:
        return state;
    }
};
  