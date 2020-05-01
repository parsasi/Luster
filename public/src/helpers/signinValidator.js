import validator from 'validator';

export default (user) => {
    if(user && user.email && user.password){
        if(validator.isEmail(user.email) && !validator.isEmpty(user.password)){
            return true
        }
    }
    return false
}