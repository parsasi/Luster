const jwt = require('./jwt')

module.exports = (token) =>{
    return new Promise((resolve,reject) => {
        jwt.verify(token)
        .then(data =>{
            delete data.iat
            delete data.exp
            resolve(data)
        })
        .catch(e => reject(e))
    })
}