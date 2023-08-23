const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    color:{
        type: String,
        required: true,
    },
    mileage:{
        type: Number,
        required: true,
    },
    power:{
        type: Number,
        required: true,
    },
    maxspeed:{
        type: Number,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    userid:{
        type: String,
        required: true,
    },
    userimage:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    discription:{
        type: String,
        required: true,
    },
},{
    timestamps:true
})

const Cars = mongoose.model('Cars',carSchema)
module.exports = Cars;