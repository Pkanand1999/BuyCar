const mongoose = require('mongoose');

async function database(){
   await mongoose.connect(process.env.MONGODB_DATABASE)
    .then(()=>{
        console.log('connecting to database');
    }).catch((err)=>{
        console.log('error connecting to database', err);
    })
}


module.exports = database;