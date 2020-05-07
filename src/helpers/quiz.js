module.exports = (database , user , quiz) => {
   return new Promise((resolve,reject) => {
    database.getUser({email : user.email})
    .then(snapshot => {
        if(snapshot.docs.length > 0){
            const user = snapshot.docs[0].data()
            user.quiz = quiz
            database.updateQuiz(snapshot.docs[0].id, user)
            resolve()
        }else{
            reject(new Error('Could not find the user'))
        }
    })
    .catch(e => reject(e))
   })  
}