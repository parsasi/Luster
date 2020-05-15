// User Reducer

const userDefaultTextReducer = {
    email: '',
    name: '',
    quiz : [] , 
    dob : '',
    token : '',
    sexualPreference : '',
    gender : '',
    messages : []
}
const messageDefault = {
    text : '',
    own : true,
}

const textReducerDefaultState = {
  allUsers : [],
  currentUser : userDefaultTextReducer,
  loading : false
};

export default (state = textReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOADED_ALL_USERS':
      const allUsers = action.data.map(item => ({...item , messages : []}))
      return {
        ...state,
        allUsers,
        currentUser : allUsers[0]
      };
    case 'CHANGED_USER':
      const userToChoose = state.filter(item => item.email == action.data.email)[0]
      return {
        ...state,
        currentUser : userToChoose
      }
    case 'ADD_TEXT':
        const currentUser = state.currentUser
        currentUser.messages.push(action.data.messages)
        allUsers.map(item => {
            if(item.email === currentUser.email){
                item.messages = currentUser.messages
            }
        })
        return {
            ...state,
            currentUser,
            allUsers
        }
    default:
      return state;
  }
};
