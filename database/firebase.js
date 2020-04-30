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
      this.db.collection("users").add({
        ...user
      })
    }
}

const db = new Database()
// db.addUser({name : 'Parsa Safavi' , city : 'Vancouver' , dob : db.admin.firestore.Timestamp.fromDate(new Date("May 5, 2001")) , email : 'parsasi@rocketmail.com' , sexualPreference : 'Male' })
// db.getUsers().then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });
