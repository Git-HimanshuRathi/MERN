const express = require('express')

const router = express.Router()


router.get('/getproducts' , (req , res)=>{
    res.send('All Products')
})

router.get('/getsingle' , (req , res)=>{
    res.send('Single Product')
})


module.exports = router

