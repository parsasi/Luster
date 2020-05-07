const express = require('express')
const router = express.Router()
const detokenize = require('../helpers/detokenize')
const signup = require('../helpers/signup')
const singin = require('../helpers/signin')
const quiz = require('../helpers/quiz')
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

    router.get('/detokenize',(req,res) => {
        if(!req.query.token){
            req.statusCode = 500
            res.json({error : true , message : 'Invalid input'})
            return 
        }
        detokenize(req.query.token)
        .then(data => res.json(data))
        .catch(e => {
            res.statusCode = 500
            res.json(e)
        })
    })

    router.post('/quiz' , authentication.protected , (req,res) => {
        if(!req.body.quiz){
            req.statusCode = 500
            res.json({error : true , message : 'Invalid input'})
            return
        }
        // console.log('req.user inside the route : ' , req.user)
        quiz(database , req.user , req.body.quiz)
        .then(data => res.json({successful : true}))
        .catch(e => {
            res.json({successful : false , error : e})
        })
    })
    return router
};