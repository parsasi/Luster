module.exports = (database , user) => {
    return new Promise((resolve, reject) => {
        database.getUser({email : user.email})
        .then(snapshot => {
            if(snapshot.docs.length > 0){
                const id = snapshot.docs[0].id
                return database.getUserAllMatches(id)
            }else{
                reject(new Error('User not found'))
            }
        })
        .then(arrayOfMatches => {
            const arrayOfPromises = []
            arrayOfMatches.forEach(item => {
                arrayOfPromises.push(item.data())
            });
            return Promise.all(arrayOfPromises)
        })
        .then(arrayOfData => {
            arrayOfData.forEach((item) => {
                item.userOne = item.userOne.get()
            })
        })
        .then(results => {
            console.log(results)
            resolve({})
        })
        .catch(e => {reject(e); console.log('Error : '  , e)})
    })
}