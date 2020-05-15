module.exports = (database ,{ email , password}) => {
    const bcrypt = require('./bcrypt')
    const jwt = require('./jwt')
    return new Promise((resolve,reject) => {
        database.getUser({email})
        .then(snapshot => {
            if(snapshot.docs[0]){
                let user = snapshot.docs[0].data()
                bcrypt.compare(password , user.password)
                .then(data => {
                    delete user.password
                    if(user.matches){
                        delete user.matches
                    }
                    jwt.sign(user)
                    .then(token => {
                        user.token = token
                        resolve(user)
                    }) 
                    .catch(e => reject(e))
                })
                .catch(err =>{
                    reject(err)
                })
            }
            else{
                reject(new Error('User not found'))
            }
        })
        .catch(err => reject(err))
    })
}