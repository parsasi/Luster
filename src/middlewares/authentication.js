const jwt = require('../helpers/jwt')
//For pages that require login
module.exports.protected = (req,res,next) => {
    req.user = {
        email : 'user@gmail.com',
        name : 'Aime',
        city : 'Vancouver'
    }
    next()
    //TODO: Integrate with JWT and React Authentication
}

// For pages where only non-logged in users are allowed (i.e. login)
module.exports.notLoggedIn = (req,res,next) =>{
   next()
    //TODO: Integrate with JWT and React Authentication
}