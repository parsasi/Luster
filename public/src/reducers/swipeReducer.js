// User Reducer

const userDefaultSwipeReducer = {
      email: '',
      name: '',
      quiz : [] , 
      dob : '',
      token : '',
      sexualPreference : '',
      gender : ''
}

const swipeReducerDefaultState = {
    currentUser : {...userDefaultSwipeReducer},
    prevUser : {...userDefaultSwipeReducer , liked : false},
    loading : false,
    matched : false,
    matchedUser : userDefaultSwipeReducer
};
  
export default (state = swipeReducerDefaultState, action) => {
    switch (action.type) {
      case 'CURRENT_USER_SWIPED':
        console.log({...state.currentUser , liked : action.data.liked})
        return {
          ...state,
          prevUser: {...state.currentUser , liked : action.data.liked} ,
          currentUser : userDefaultSwipeReducer
        };
      case 'LOADING_NEW_USER':
        return {
            ...state,
            loading : true
        }
      case 'FINISHED_LOADING_NEW_USER':
        return {
            ...state,
            currentUser : action.data,
            loading : false
        }
      case 'SWIPE_RESULT_RECIEVED':
        return {
            ...state,
            matched:  action.data.matched,
            matchedUser: action.data.user
        }
      case 'RESET_MATCHED':
        return{
          ...state,
          matched:  false,
          matchedUser: userDefaultSwipeReducer
        }
      default:
        return state;
    }
  };
  