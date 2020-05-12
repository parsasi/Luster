// User Reducer

const userDefaultSwipeReducer = {
    userProfile : {
        email: '',
        name: '',
        quiz : [] , 
        dob : '',
        token : '',
        sexualPreference : '',
        gender : ''
    }
}

const swipeReducerDefaultState = {
    currentUser : userDefaultSwipeReducer,
    prevUser : {...userDefaultSwipeReducer , liked : false , matched : false},
    loading : false
};
  
export default (state = swipeReducerDefaultState, action) => {
    switch (action.type) {
      case 'CURRENT_USER_SWIPED':
        return {
          ...state,
          prevUser: {...state.currentUser , liked : action.data.liked} ,
          currentUser : swipeReducerDefaultState
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
      case 'PREV_SWIPE_RESULT_RECIEVED':
        return {
            ...state,
            prevUser: {...state.prevUser, matched : action.data.matched}
        }
      default:
        return state;
    }
  };
  