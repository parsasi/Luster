import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer'
import quizReducer from '../reducers/quizReducer'
import swipeReducer from '../reducers/swipeReducer'
export default () => {
  const store = createStore(
    combineReducers({
      user : userReducer,
      quiz : quizReducer,
      swipe : swipeReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
