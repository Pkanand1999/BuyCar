const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const database= require('./db')
const UserAuth = require('./router/authRouter')
const carRoute = require('./router/carRouter')
const chatRoute = require('./router/chatRouter')

//load an eviroment variable from .env file
require('dotenv').config()

//create a express app instance
const app = express();

// middleware setup 
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded requests
app.use(morgan("dev")); // Log HTTP requests in the "dev" format
app.use('/api/users',UserAuth)
app.use('/api/cars',carRoute)
app.use('/api/chat',chatRoute)





const port=process.env.PORT 
database();
app.listen(port,()=>{
    console.log('listening on port',port);
})