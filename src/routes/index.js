const express = require('express')
const router = express.Router()

module.exports = (database , authentication) => {
    router.get('/' , authentication.protected ,(req,res) => {
        res.json(req.user)
    })
    return router
};