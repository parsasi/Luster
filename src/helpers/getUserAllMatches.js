module.exports = (database , user) => {
    return new Promise((resolve, reject) => {
        database.getUser({email : user.email})
        .then(snapshot => {
            if(snapshot.docs.length > 0){
                user = snapshot.docs[0]
                return database.getUserAllMatches(user)
            }else{
                reject(new Error('User not found'))
            }
        })
        .then(results => {
            const allMatches = []
            results.forEach(item => allMatches.push(item.data()));
            return Promise.all(allMatches)
        })
        .then(results => {
            const usersWithoutTheyrKeyInfo = results.map(item => {
               delete item.matches
               delete item.password
               return item
            })
            resolve(usersWithoutTheyrKeyInfo)
        })
        .catch(e => {
            console.log(e)
            reject(e)
        })
    })
}