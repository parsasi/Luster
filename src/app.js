module.exports = (database , authentication) => {
    const express = require('express')
    const app = express()
    const apiRoute = require('./routes/api')(database , authentication)
    const bodyParser = require('body-parser')
    const cors = require('cors')
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public/build'))
    app.use(bodyParser())
    var corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
      }
    app.use(cors(corsOptions));

    app.use('/api' , apiRoute)

    return app
} 