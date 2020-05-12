const getAllSwipes = require('../helpers/getAllSwipes')
const findAMatch = require('../helpers/findAMatch')
module.exports = (database , user) => {
    return new Promise(async (resolve,reject) => {
        let allSwipes = []
        database.getUser({email : user.email})
        .then(snapshot => {
            user = snapshot.docs[0].data()
            user.id = snapshot.docs[0].id
            return getAllSwipes(database , user)
        })
        .then(data => {
            //TODO: make allSwipes into an object for performance
            allSwipes = [...allSwipes , ...data]
            const sexualPreference = figureOutUsersSexualPreference(user)
            return database.getUsersNewSwipe(sexualPreference)
        })
        .then(users => {
            const userSuggestions = []
            users.forEach(user => userSuggestions.push(user.id))
            const matchId = findAMatch(user , allSwipes , userSuggestions)
            if(!matchId){
                resolve({})
                return
            }
            return database.getUser({id : matchId})
        })
        .then(snapshot => {
            const newUser = snapshot.data()
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