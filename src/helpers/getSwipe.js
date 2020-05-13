module.exports = (database , swiper , swipee) => {
    return new Promise((resolve,reject) => {
        database.getSwipe({swiper,swipee})
        .then(snapshot => {
            if(snapshot.docs[0]){
                return snapshot.docs[0].data()
            }else{
                resolve(false)
            }
        })
        .then(data => {
            if(data.liked){
                database.addMatch({userOne : data.swiper.id , userTwo : data.swipee.id})
                resolve(true)
            }else{
                resolve(false)
            }
        })
        .catch(e => reject(e))
    })
}