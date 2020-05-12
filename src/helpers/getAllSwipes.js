module.exports = (database , user) => {
    return new Promise((resolve,reject) => {
        database.getUser({email : user.email})
        .then(snapshot => {
            if(snapshot.docs.length > 0){
                const id = snapshot.docs[0].id
                return database.getUserAllSwipes(id)
            }else{
                reject(new Error('User not found'))
            }
        })
        .then(snapshot => {
            const arrayOfPromises = []
            if(snapshot.docs.length > 0){
                snapshot.docs.forEach(async item => {
                    arrayOfPromises.push(item.data().swipee)
                })
                Promise.all(arrayOfPromises)
                .then(results => {
                    const arrayOfUsers = []
                    resolve(results.map(item => item.id))
                })
                .catch(e => {
                    console.log(e)
                    reject(e)
                })
            }
            else{
                resolve([])
            }
        })
        .catch(e => {
            reject(e)
        })
    })
}