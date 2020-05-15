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
    async getSwipe({swiper , swipee}){
      let swipe = {}
      swipe.swipee = this.db.collection('users').doc(swipee.id)
      swipe.swiper = this.db.collection('users').doc(swiper.id)
      const data = await this.db.collection('swipes').where('swiper' , '==' , swipe.swiper).where('swipee' , '==', swipe.swipee).limit(1).get()
      return data
    }
    async addMatch({swiper , swipee}){
      const swiperSnapshot = await swiper.get()
      const swipeeSnapshot = await swipee.get()
      const swiperObj = await swiperSnapshot.data()
      const swipeeObj = await swipeeSnapshot.data()
      if(!swiperObj.matches){
        swiperObj.matches = [] 
      }
      if(!swipeeObj.matches){
        swipeeObj.matches = []
      }
      swiperObj.matches = [... await swiperObj.matches , swipee]
      swipeeObj.matches = [... await swipeeObj.matches , swiper]
      return Promise.all([this.db.collection('users').doc(swiper.id).update({matches : swiperObj.matches}),
      this.db.collection('users').doc(swipee.id).update({matches : swipeeObj.matches})])
    }
    getUserAllMatches(user){
      return new Promise(async (resolve,reject) => {
        user  = await this.db.collection('users').doc(user.id).get()
        user = await user.data()
        if(user.matches){
          const arrayOfSnapshots = []
          user.matches.forEach(item => {
            arrayOfSnapshots.push(item.get())
          });
          Promise.all(arrayOfSnapshots)
          .then(results => resolve(results))
          .catch(e => reject(e))
        }else{
          resolve([])
        }
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
