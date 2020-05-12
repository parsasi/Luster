const jwt = require('../helpers/jwt')
const detokenize = require('../helpers/detokenize')
//For pages that require login
module.exports.protected = (req,res,next) => {
    if(req.headers.user){
        detokenize(req.headers.user)
        .then(data => {
            req.user = data
            next()
            return
        })
        .catch(e => {
            console.log('here')
            res.statusCode = 500
            res.json(e)
            return
        })
    }else{
        res.json({error : true , message : 'Not Authenticated'})
        return
    }
}

// For pages where only non-logged in users are allowed (i.e. login)
module.exports.notLoggedIn = (req,res,next) =>{
   next()
    //TODO: Integrate with JWT and React Authentication
}