module.exports = (user , allSwipes , suggestions) => {
    for(item of suggestions){
        console.log(allSwipes)
        console.log(item , allSwipes.indexOf(item))
        if(item !== user.id && allSwipes.indexOf(item) === -1){
            return item
        }
    }
    return false
}