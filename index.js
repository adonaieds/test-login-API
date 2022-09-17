const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/apiRoutes')
const db = require('./utils/db')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(apiRoutes)

db.startup()

app.use(function(req, res, next){
    return res.status(404).json({resultCode: 40400, developerMessage: 'Unknown URL'});
})

app.listen(port, function (){
    console.log('Start node.js on port ' + port)
})