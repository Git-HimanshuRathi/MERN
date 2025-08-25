const express = require('express')
require('dotenv').config()
const {connectMongoDb}  = require('./connection.js')
const productRoutes = require('./routes/productRoutes.js')

const app = express()

connectMongoDb(process.env.dbUrl)

app.use('/api/products', productRoutes)

app.get('/' , (req , res)=>{
    res.send('Server Response')
})





app.listen(8080 , ()=>{
    console.log('Server Running')
})