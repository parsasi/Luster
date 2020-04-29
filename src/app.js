module.exports = (database , authentication) => {
    const express = require('express')
    const app = express()
    const indexRoute = require('./routes/index')(database , authentication )
    const bodyParser = require('body-parser')
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public/build'))
    app.use(bodyParser())

    app.use('/api' , indexRoute)

    return app
} 