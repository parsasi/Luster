require('dotenv').config()

class Database{
    constructor(){
        var admin = require("firebase-admin");

        var serviceAccount = require(process.env.FIREBASE_CONFIG);
        
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
        this.db = admin.firestore()

    }

    getUsers(){
        return this.db.collection('users').get()
    }
}

const db = new Database()
db.getUsers().then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
