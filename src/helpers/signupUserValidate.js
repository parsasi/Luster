module.exports = (database , user) => {
    if(typeof user === "object"){
        if(user.password && user.email && user.gender && user.dob && user.city){
            database.getUser({email : user.email})
            .then(snapshot => {
                if(!snapshot.docs[0]){
                    return true
                }
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
    return false
}