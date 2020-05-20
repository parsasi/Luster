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
    case 'LOADING_ALL_USERS':
        return{
            ...state,
            loading : true
        }
    case 'LOADED_ALL_USERS':
      const allUsers = action.data.map(item => ({...item , messages : [] , blur : 10 , image : 'imgs/avatar.png'}))
      return {
        ...state,
        allUsers,
        currentUser : allUsers[0],
        loading:false
      };
    case 'CHANGED_USER':
      const userToChoose = state.allUsers.filter(item => item.email == action.data.email)[0]
      return {
        ...state,
        currentUser : userToChoose
      }
    case 'REDUCE_BLUR':
        const blurUser = state.currentUser
        if(blurUser.blur > 0){
            blurUser.blur = blurUser.blur - 0.5
        }
        const blurAllUsers = state.allUsers.map(item => {
            if(item.email === blurUser.email){
                item.blur = blurUser.blur
            }
            return item
        })
        return {
            ...state,
            currentUser : blurUser,
            allUsers : blurAllUsers
        }
    case 'ADD_TEXT':
        const currentUser = state.currentUser
        currentUser.messages.push(action.data.message)
        const addTextAllUsers = state.allUsers.map(item => {
            if(item.email === currentUser.email){
                item.messages = currentUser.messages
            }
            return item
        })
        console.log(currentUser)
        return {
            ...state,
            currentUser,
            allUsers : addTextAllUsers
        }
    default:
      return state;
  }
};
