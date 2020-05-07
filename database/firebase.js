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
