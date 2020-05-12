const database = require('./database/firebase')
const authentication = require('./src/middlewares/authentication')
require('dotenv').config()

// pass app its dependencies:
const app = require('./src/app')(database , authentication)

const port = process.env.PORT || 8080 

app.listen(port , () => {
    console.log(`Listening to the port ${port}`)
});