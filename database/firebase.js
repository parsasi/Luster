require('dotenv').config()

class Database{
    constructor(){
        this.admin = require("firebase-admin");

        var serviceAccount = require(process.env.FIREBASE_CONFIG);
        
        this.admin.initializeApp({
          credential: this.admin.credential.cert(serviceAccount),
        });
        this.db = this.admin.firestore()
    }
    getUsers(){
      return this.db.collection('users').get()
    }
    addUser(user){
      return this.db.collection("users").add({
        ...user
      })
    }
    getUser({id , email}){
      return id ? this.db.collection("users").doc(id).get() : this.db.collection("users").where('email', '==', email).limit(1).get();
    }
    updateQuiz(id , user){
      this.db.collection('users').doc(id).set(user , {merge : true})
      .catch(e => console.log(e))
    }
    async getUserAllSwipes(id){
      const user = await this.db.collection('users').doc(id)
      // `users/${id}`
      return this.db.collection('swipes').where('swiper' , '==' ,  user).get()
    }
    getUsersNewSwipe(gender){
      // const user = await this.db.collection('users').doc(id).data()
      return this.db.collection('users').where('gender' , 'in' , gender).limit(50).get()
    }
    addSwipe(swipe){
      swipe.swipee = this.db.collection('users').doc(swipe.swipee)
      swipe.swiper = this.db.collection('users').doc(swipe.swiper)
      return this.db.collection('swipes').add({...swipe , timestamp : this.admin.firestore.FieldValue.serverTimestamp()})
    }
    getSwipe(swipe){
      swipe.swipee = this.db.collection('users').doc(swipe.swipee)
      swipe.swiper = this.db.collection('users').doc(swipe.swiper)
      return this.db.collection('swipes').where('swiper' , '==' , swipe.swiper).where('swipee' , '==', swipe.swipee).limit(1).get()
    }
    async addMatch({swiper , swipee}){
      const swiperObj = await swiper.data()
      const swipeeObj = await swipee.data()
      swiperObj.matches = [... await swiperObj.matches , swipee]
      swipeeObj.matches = [... await swipeeObj.matches , swiper]
      return Promise.all([this.db.collection('users').doc(swiper.id).update({matches : swiperObj.matches}),
      this.db.collection('users').doc(swiper.id).update({matches : swiperObj.matches})])
    }
    async getUserAllMatches(user){
      return new Promise((resolve, reject) => {
        user = this.db.collection('users').doc(user)
        const userOne = this.db.collection('matches').where('userOne' , '==' , user).get()
        const userTwo = this.db.collection('matches').where('userTwo' , '==' , user).get()
        let allMatches = []
        Promise.all([userOne , userTwo])
        .then(results => {
          results.forEach(item => allMatches  = [...allMatches , ...item.docs])
          resolve(allMatches)
        })
        .catch(err => {
          reject(err)
        })
      })
    }
}

const db = new Database()
module.exports = db

// Adding a User to the Database
// db.addUser({name : 'Parsa Safavi' , city : 'Vancouver' , dob : db.admin.firestore.Timestamp.fromDate(new Date("May 5, 2001")) , email : 'parsasi@rocketmail.com' , sexualPreference : 'Male' })

// Getting all the users from the database
// db.getUsers().then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });

// Finding a user with an email address
// db.getUser({email : 'parsasi@rocketmail.com'})
// .then(data => {
//   data.forEach(doc => console.log(doc.data().name))
// })

// // Finding a user with an the ID
// db.getUser({id : 'WVStncliIe52oFekbHtv'})
// .then(data => {
//   console.log(data.data().name)
// })
