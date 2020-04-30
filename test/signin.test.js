const signin = require('../src/helpers/signin')
const database = require('../database/firebase')



describe('Login checks correctly', () => {
    it('Login check', () => {
        // expect().toEqual(5);
        // expect.assertions(1);
        return expect(login(database , 'parsasi@rocketmail.com' , '123')).resolves.toBe()
      });
  });

// login(database , 'parsasi@rocketmail.com' , '123')
// .then(user => console.log(user))
// .catch(console.log)
// module.exports = (database , email , password) => {
//     const bcrypt = require('./bcrypt')
//     return new Promise((resolve,reject) => {
//         database.getUser({email})
//         .then(snapshot => {
//             let user = snapshot[0].data()
//             bcrypt.compare(password , user.password)
//             .then(user => {
//                 delete user.password 
//                 resolve(user)
//             })
//             .catch(err => reject(err))
//         })
//         .catch(err => reject(err))
//     })
// }