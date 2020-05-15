module.exports = (database , swiper , swipee) => {
    return new Promise((resolve,reject) => {
        database.addMatch({swiper , swipee})
        .then(data => resolve())
        .catch(e => reject(e))
    })
}