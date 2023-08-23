import React from 'react'
import { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux'
import { newpost } from '../redux/auth/Action';

function Createpost() {

const [title,setTitle]=useState('');
const [content,setContent]=useState('');
const [brand,setBrand]=useState();
const [color,setColor]=useState();
const [price,setPrice]=useState();
const [mileage,setMileage]=useState();
const [power,setPower]=useState();
const [maxspeed,setMaxspeed]=useState();
const [image,setImage]=useState();
const data=useSelector((e)=>{
    return e.reducer
  })
  const dispatch=useDispatch()

function createpost(){
   let usercontent={title:title,discription:content,username:data.name,userimage:data.image,userid:data.id,brand:brand,color:color,price:price,mileage:mileage,power:power,maxspeed:maxspeed,image:image}
   
   newpost(usercontent,dispatch);
}

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-gray-500 via-blue-500 to-pink-500 ... flex justify-center">
        <div className='w-[80%] text-center mt-8 mb-10 flex flex-col gap-10'>
            <h1 className='text-4xl font-bold '>Create Your Post</h1>
            <div className='flex flex-col'>
              <div className='flex gap-10'>
              <div className='w-[48%] flex flex-col'>
              <span className='text-2xl font-bold text-left'>Title:</span>
                <input name="title" placeholder='Enter title' className='w-full text-xl' rows="2" onChange={(e)=>setTitle(e.target.value)}/>
                <span className='text-2xl font-bold text-left'>Brand: </span>
                <select name="brand" className='w-full' onChange={(e)=>setBrand(e.target.value)}>
                  <option value="">Select Brand</option>
                  <option value="Honda">Honda</option>
                  <option value="Audi">Audi</option>
                  <option value="Maruti">Maruti</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes">Mercedis</option>
                </select>
                <span className='text-2xl font-bold text-left'>Mileage: </span>
                <input type="number" placeholder="enter mileage" name="price" className='w-full text-xl' rows="2" onChange={(e)=>setMileage(e.target.value)}/>
                <span className='text-2xl font-bold text-left'>Power: </span>
                <input type="number" placeholder="enter power" name="price" className='w-full text-xl' rows="2" onChange={(e)=>setPower(e.target.value)}/>
               
              </div>
              <div className='w-[48%] flex flex-col'>
                <span className='text-2xl font-bold text-left'>Colour: </span>
                <select name="color" className='w-full' onChange={(e)=>setColor(e.target.value)}>
                  <option value="">Select Colour</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Gray">Gray</option>
                </select>
                <span className='text-2xl font-bold text-left'>Price: </span>
                <input type="number" placeholder="enter price" name="price" className='w-full text-xl' rows="2" onChange={(e)=>setPrice(e.target.value)}/>
                <span className='text-2xl font-bold text-left'>Max Speed: </span>
                <input type="number" placeholder="enter maxspeed" name="price" className='w-full text-xl' rows="2" onChange={(e)=>setMaxspeed(e.target.value)}/>
                <span className='text-2xl font-bold text-left'>Image Url: </span>
                <input type="text" placeholder="enter imageUrl" name="price" className='w-full text-xl' rows="2" onChange={(e)=>setImage(e.target.value)}/>
              
                </div>
                
               
              </div>
               <h1 className='text-2xl font-bold text-left'>Discription: </h1>
                <textarea name="content" placeholder='write discription' className='w-full text-xl' rows="4" onChange={(e)=>setContent(e.target.value)}/>
                <button className='w-full bg-green-500 text-xl font-bold p-2' onClick={createpost}>Create</button>
            </div>
        </div>
    </div>
  )
}

export default Createpost