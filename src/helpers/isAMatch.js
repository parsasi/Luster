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
        .then(userOnedata => {
            if(userOnedata){
                if(userOnedata.liked){
                    database.getSwipe({swiper : swipee , swipee : swiper})
                    .then(snapshot => {
                        if(snapshot.docs.length > 0){
                            const userTwoData = snapshot.docs[0].data()
                            if(userTwoData){
                                if(userTwoData.liked){
                                    addMatch(database , userOnedata.swiper , userOnedata.swipee)
                                    .then(data => resolve(true))
                                    .catch(e => {
                                        console.log(e)
                                        reject(e)
                                    })
                                }else{
                                    resolve(false)
                                }
                            }
                            else{
                                resolve(false)
                            }
                        }else{
                            resolve(false)
                        }
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

