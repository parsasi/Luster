module.exports = (database , {email}) => {
    return new Promise((resolve,reject) => {
        database.getUser({email})
        .then(snapshot => {
            if(snapshot.docs[0]){
                const user  = snapshot.docs[0].data()
                delete user.password
                resolve(user)
            }else{
                reject(new Error('User Not Found'))
            }
        })
        .catch(e => {
            reject(e)
        })
    })
}