const express = require('express')
const router = express.Router()
const signup = require('../helpers/signup')
const singin = require('../helpers/signin')

module.exports = (database , authentication) => {
    router.get('/' , authentication.protected ,(req,res) => {
        res.json(req.user)
    })
    router.post('/signup' , authentication.notLoggedIn , (req,res) => {
        if(!req.body.user){
            req.statusCode = 500
            res.json({error : true , message : 'Invalid input'})
            return
        }
        let user = req.body.user
        signup(database , user)
        .then(data => {
            res.statusCode = 200
            res.json()
        })
        .catch(e => {
            console.log(e)
            res.statusCode = 500
            res.json(e)
        })
    })

    router.post('/signin' , authentication.notLoggedIn , (req , res) => {
        if(!req.body.user && !req.body.user.email && req.body.user.password){
            req.statusCode = 500
            res.json({error : true , message : 'Invalid input'})
            return
        }
        let user = {email : req.body.user.email , password : req.body.user.password}
        singin(database , user)
        .then(user => res.json(user))
        .catch(e => {
            res.json(e)
        })
    })
    return router
};