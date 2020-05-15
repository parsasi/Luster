const addMatch  = require('./addMatch')

module.exports = (database , swiper , swipee) => {
    return new Promise((resolve,reject) => {
        database.getSwipe({swiper,swipee})
        .then(snapshot => {
            if(snapshot.docs.length > 0){
                return snapshot.docs[0].data()
            }else{
                resolve(false)
            }
        })
        .then(data => {
            if(data){
                if(data.liked){
                    addMatch(database , data.swiper , data.swipee)
                    .then(data => resolve(true))
                    .catch(e => {
                        console.log(e)
                        reject(e)
                    })
                }else{
                    resolve(false)
                }
            }else{
                resolve(false)
            }
        })
        .catch(e => {
            console.info('Faced some issues ' , e)
            reject(e)
        })
    })
}

