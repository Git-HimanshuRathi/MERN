const mongoose = require('mongoose')

async function connectMongoDb(dbUrl){
  return mongoose.connect(dbUrl).then(()=>{
    console.log('Db Connected')
  }).catch((err)=>{
    console.log(err)
  })
}

module.exports= {
    connectMongoDb
}

