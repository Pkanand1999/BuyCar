const express = require('express');
const chatRoute = express.Router();
const Chat = require('../model/chatModel')


chatRoute.get('/getchat/:id',async (req,res)=>{
    try{
        let {id}=req.params
console.log(id)
        let resData = await Chat.find({postid:id})
        res.status(200).send(resData)
    }catch(err){
        res.status(500).send(err)
    }
})


chatRoute.post('/create',async (req,res)=>{
    try{
        let data=req.body;
        let resData = await Chat.create(data);
        res.status(201).send(resData)
    }catch(err){
        res.status(500).send(err)
    }
})


module.exports = chatRoute;