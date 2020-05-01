import validator from 'validator';

export default (user) => {
    if(user && user.email && user.name && user.dob && user.city && user.gender && user.password){
        if(validator.isEmail(user.email) && validator.isISO8601(user.dob) && !validator.isEmpty(user.name) && !validator.isEmpty(user.dob) && !validator.isEmpty(user.city) && !validator.isEmpty(user.password) && !validator.isEmpty(user.gender)){
            return true
        }
    }
    return false
}