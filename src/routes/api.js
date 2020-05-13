const express = require('express')
const router = express.Router()
const detokenize = require('../helpers/detokenize')
const signup = require('../helpers/signup')
const singin = require('../helpers/signin')
const quiz = require('../helpers/quiz')
const getUser = require('../helpers/getUser')
const newSwipe = require('../helpers/newSwipe')
const addSwipe = require('../helpers/addSwipe')
const getSwipe = require('../helpers/getSwipe')
const getUserAllMatches = require('../helpers/getUserAllMatches')
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
        quiz(database , req.user , req.body.quiz)
        .then(data => res.json({successful : true}))
        .catch(e => {
            res.json({successful : false , error : e})
        })
    })

    router.get('/user' , authentication.protected ,(req,res) => {
        getUser(database , req.user)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            console.log(err)
            res.statusCode = 500
            res.json(err)
        })
    })

    router.get('/swipe' , authentication.protected , (req,res) => {
        newSwipe(database , req.user)
        .then(data => {
            res.json(data)
        })
        .catch(e => console.log(e))
    })
    router.post('/swiped' , authentication.protected , (req,res) => {
        const swipeeEmail = req.body.swipeeEmail
        const isLiked = req.body.isLiked
        addSwipe(database , req.user , swipeeEmail , isLiked)
        .then(data => {
            return getSwipe(database , data.swipee.id , data.swiper.id)
        })
        .then(isAMatch => {
            res.statusCode = 200
            res.json({matched : isAMatch})
        })
        .catch(err => {
            res.statusCode = 500
            res.json(err)
        })
    })

    router.get('/matches' , authentication.protected , (req , res) => {
        getUserAllMatches(database , req.user)
        .then(data => res.json(data))
        .catch(e => {
            res.statusCode = 500
            res.json(e)
        })
    })
    return router
};