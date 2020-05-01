const validateUser = require('../src/helpers/signupUserValidate')
const database = require('../database/firebase')



describe('signup validation checks correctly', () => {
    it('validation check', () => {
        return expect(validateUser(database , {name : 'Parsa Safavi' , email : 'mail@parsa.pro' , password : '1234' , gender : 'male' , dob : 'May 5 2001' , city : 'vancouver'})).resolves.toBe()
      });
  });

