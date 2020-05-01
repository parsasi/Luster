const bcrypt = require('bcrypt');

module.exports.hash = (password) => {
    return new Promise((resolve,reject) => {
        bcrypt.hash(password, 12, function(err, hash) {
            if(err){
                reject(err)
            }
            resolve(hash)
        });
    })
}
module.exports.compare = (password , password_hash) => {
    return new Promise((resolve , reject) => {
        bcrypt.compare(password, password_hash, function(err, result) {
           if(err){
               reject(err)
            }else if(!result){
                reject(new Error('Incorrect password'))
            }
            resolve(result)
        });
    })
}