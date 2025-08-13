const express = require('express')

const app = express()

app.get('/', (req , res)=>{
  res.send('Hello from Home Page')
})

app.get('/about', (req , res)=>{
  res.send('Hello from About Page')
})

app.get('/contact', (req , res)=>{
  res.send('Hello from Contact')
})


app.listen(8001 , ()=>{
    console.log('Sever Running')
})