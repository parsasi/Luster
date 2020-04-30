const validateUser = require('signupUserValidate')
module.exports = (database , user) => {
    if(validateUser(database , user)){
        console.log('user is valide')
    }else{
        console.log('user is invalid')
    }
}