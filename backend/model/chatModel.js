const mongoose = require('mongoose');

const chatModel = new mongoose.Schema({
    userid:{
        type: String,
        required: true,
    },
    postid:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    comment:{
        type: String,
        required: true,
    }
},{
    timestamps:true
})

const Chat= mongoose.model('Chat',chatModel);

module.exports = Chat;