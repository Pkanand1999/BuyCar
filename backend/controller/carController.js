const Cars = require('../model/carModel');


//find all car data and send in response
async function getCarData(data){
    let getData = await Cars.find(data)
    // getData.toJSON();
    return getData;
}

// get car by id
async function getCarById(id){
    let data = await Cars.find({_id:id})
    return data;
}


// get car by userid
async function getCarByUserId(id){
    let data = await Cars.find({userid:id})
    return data;
}


//logic to delete car data which user want to delete
async function deleteCarData(id){
    console.log(id,"delete")
    let data = await Cars.findOneAndDelete(id)
    return data;
}


//edit car data logic
async function editCarData(id,data){
    let resData= await Cars.findOneAndUpdate(id,data);
    return resData;
}

//post car data add car data into database
async function postCarData(data){
    let postData= await Cars.create(data);
    postData.toJSON();
    return postData;
}


module.exports ={
    getCarData,deleteCarData,editCarData,postCarData,getCarById,getCarByUserId
}