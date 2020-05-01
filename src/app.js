module.exports = (database , authentication) => {
    const express = require('express')
    const app = express()
    const apiRoute = require('./routes/api')(database , authentication)
    const bodyParser = require('body-parser')
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public/build'))
    app.use(bodyParser())

    app.use('/api' , apiRoute)

    return app
} 