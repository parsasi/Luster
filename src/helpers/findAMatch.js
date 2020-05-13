module.exports = (user , allSwipes , suggestions) => {
    for(item of suggestions){
        if(item !== user.id && allSwipes.indexOf(item) === -1){
            return item
        }
    }
    return false
}