const express = require('express')
require('dotenv').config()
const {connectMongoDb}  = require('./connection.js')

const app = express()

connectMongoDb(process.env.dbUrl)





app.listen(8080 , ()=>{
    console.log('Server Running')
})