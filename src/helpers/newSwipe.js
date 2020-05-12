const getAllSwipes = require('../helpers/getAllSwipes')
const findAMatch = require('../helpers/findAMatch')
module.exports = (database , user) => {
    return new Promise(async (resolve,reject) => {
        let allSwipes = []
        //Getting the user info from the database
        database.getUser({email : user.email})
        .then(snapshot => {
            user = snapshot.docs[0].data()
            user.id = snapshot.docs[0].id
            //Getting all the users' previuse swipes, making sure they don't see the same profile over and over again
            return getAllSwipes(database , user)
        })
        .then(data => {
            //TODO: make allSwipes into an object for performance
            allSwipes = [...allSwipes , ...data]
            const sexualPreference = figureOutUsersSexualPreference(user)
            //Getting a bunch of suggestions from the database
            return database.getUsersNewSwipe(sexualPreference)
        })
        .then(users => {
            const userSuggestions = []
            users.forEach(user => userSuggestions.push(user.id))
            //Comparing the Previuse Swips list with the suggestions. Taking out any duplicate and any item that points to the user himself/herself
            const matchId = findAMatch(user , allSwipes , userSuggestions)
            //Returning no match if no match is found
            if(!matchId){
                resolve({})
                return
            }
            //Grabbing the suggested user's info from the database
            return database.getUser({id : matchId})
        })
        .then(snapshot => {
            const newUser = snapshot.data()
            delete newUser.password
            resolve(newUser)
        })
        .catch(err => {
            reject(err)
        })
    })
}

const figureOutUsersSexualPreference = (user) => {
    return  user.sexualPreference === 'men' ? ['male'] : user.sexualPreference === 'women' ? ['female'] : ['male' , 'female']
}