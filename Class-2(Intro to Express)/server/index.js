const express = require('express')

const app = express()


let courses= [
    {id:1 , name:'Java'},
    {id:2 , name:'DBMS'},
    {id:3 , name:'JavaScript'},
]

// Get all Courses
app.get('/courses' , (req , res)=>{
   res.send(courses) 
})

// get a course by id
app.get('/courses/:id' , (req , res)=>{
//    console.log(req.params)
//    res.send(courses)

 
})


app.listen(8001 , ()=>{
    console.log('Sever Running')
})