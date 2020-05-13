module.exports = (database , user , swipedUserEmail , isLiked) => {
    return new Promise((resolve,reject) => {
        let swipedUser
        database.getUser({email : user.email})
        .then(snapshot => {
            if(snapshot.docs.length > 0){
                user = snapshot.docs[0]
                return database.getUser({email : swipedUserEmail})
            }else{
                reject(new Error('User not found'))
            }
        })
        .then(snapshot => {
            swipedUser = snapshot.docs[0]
            const swipe = {
                isSuper : false,
                liked : isLiked,
                swiper : `${user.id}`,
                swipee : `${swipedUser.id}`,
            }
            return database.addSwipe(swipe)
        })
        .then(data => resolve({swiper : user  , swipee : swipedUser}))
        .catch(e => {
            reject(e)
        })
    })
}