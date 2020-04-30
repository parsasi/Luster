module.exports = (database , email , password) => {
    const bcrypt = require('./bcrypt')
    return new Promise((resolve,reject) => {
        database.getUser({email})
        .then(snapshot => {
            // console.log(snapshot.data())
            // console.log(snapshot.docs[0].data())
            let user = snapshot.docs[0].data()
            // resolve(user)
            bcrypt.compare(password , user.password)
            .then(user => {
                console.log('here')
                delete user.password 
                resolve(user)
            })
            .catch(err =>{
                console.log('here')
                reject(err)
            })
        })
        .catch(err => reject(err))
    })
}