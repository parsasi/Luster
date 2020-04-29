const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.verify = (token) => {
    return new Promise((resolve,reject) => {
        jwt.verify(token , process.env.JWT_SECRET , (err , user) => {
            if(err){
                reject(err)
            }
            resolve(user)
        })
    })
}

module.exports.sign = (data) => {
    return new Promise((resolve,reject) => {
        if(typeof data === 'object'){
            jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "1d" } , (err , token) => {
                if(err){
                    reject(err)
                }
                resolve(token)
            })
        }else{
            reject(new Error('JWT requires an object'))
        }
    })
}