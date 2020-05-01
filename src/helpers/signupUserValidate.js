module.exports = (database , user) => {
    return new Promise((resolve, reject) => {
        if(typeof user === "object"){
            if(user.password && user.email && user.gender && user.dob && user.city){
                database.getUser({email : user.email})
                .then(snapshot => {
                    if(!snapshot.docs[0]){
                        resolve()
                    }else{
                        reject(new Error('Duplicate Email'))
                    }
                })
                .catch(e => {
                    reject(e)
                })
            }else{
                reject(new Error('Not all required fields are provided'))
            }
        }else{
            reject(new Error('Invalid user'))
        }
    })
}