const validateUser = require('./signupUserValidate')
const bcrypt = require('../helpers/bcrypt')
module.exports = (database , user) => {
    return new Promise((resolve,reject) => {
        validateUser(database , user)
        .then(data => {
            bcrypt.hash(user.password)
            .then(hashed => {
                user.password = hashed
                database.addUser(user)
                resolve()
            })
            .catch(e => reject(e))
        })
        .catch(e => reject(e))
    })
}