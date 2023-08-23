const express = require('express');
const {getCarData,deleteCarData,postCarData,editCarData,getCarById,getCarByUserId} = require('../controller/carController');
const carRoute = express.Router();


//router to get car data all car data and filter car data by color,price and mileage
carRoute.get('/getcar', async (req,res)=>{
    try{
        const{color,price,mileage}=req.query;
        const filters = {}
console.log(price)
        if (price) filters.price =  { $lt: parseInt(price) }; // Filter for price less than specified
        if (color) filters.color =  new RegExp(color, 'i')
        if (mileage) filters.mileage = { $lt: parseInt(mileage) }; // Filter for mileage less than specified
        const data = await getCarData(filters);  //call getcardata function from carController
      res.status(200).send(data)
    }catch(err){
        res.status(500).send(err)
    }
})


// get car by id
carRoute.get('/getcar/:id', async function(req, res) {
    try{
        let {id} = req.params
        console.log(id)
        let data = await getCarById(id)   //call getcarbyid function from carController
        res.status(200).send(data)

    }catch(err){
        res.status(500).send(err)
    }
})


// get car by userid
carRoute.get('/getinventory', async function(req, res) {
    try{
        let id = req.body
        console.log(id)
        let data = await getCarByUserId(id.userid)   //call getcarbyuserid function from carController
        res.status(200).send(data)

    }catch(err){
        res.status(500).send(err)
    }
})

// route to post car data and add into database
carRoute.post('/postcar',async(req,res)=>{
    try{
        let data = req.body
        let response = await postCarData(data)  //call postcardata function from carController
        res.status(201).send(response)
    }catch(err){
        res.status(500).send(err)
    }
})

// router for edit car detail
carRoute.put('/update/:id',async (req,res)=>{
    try{
        let {id} = req.params
        let data=req.body
        console.log(id)
        console.log(data)
        let resData= await editCarData({_id:id},data)  // call editcardat function from carController
        res.status(200).send(resData)
    }catch(err){
        res.status(500).send(err);
    }
})


// router to delete data 
carRoute.delete('/delete/:id', async (req,res)=>{
    try{
        let {id} = req.params
        console.log(id)
        let resData = await deleteCarData({_id:id})   // call deletecardata function from carController
        res.status(200).send(resData)
    }catch(err){
        res.status(500).send(err);
    }
})




module.exports=carRoute;