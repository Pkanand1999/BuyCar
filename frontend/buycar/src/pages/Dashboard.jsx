import React,{useState,useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getinventory } from '../redux/auth/Action'
import { filterpost,allpost } from '../redux/auth/Action'

function Dashboard() {
    const [Post,setPost]=useState([])
    const [id,setId]=useState('')
    const [query,setQusery]=useState('')
    const data=useSelector((e)=>{
        // setId(e.reducer.id)
        return e.reducer
      })
      const dispatch=useDispatch();
      useEffect(()=>{
        setPost([...data.posts])
        setId(data.id)
      },[data,query])

      useEffect(()=>{
        if(query==""){
            allpost(dispatch)
        }
        if(query){
            filterpost(query,dispatch)
        }
       
      },[query])

      function fetchpost(){
        getinventory(id,dispatch)
      }


  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-black via-blue-500 to-pink-700 ... flex justify-center ">
        <div className='w-[80%] text-center mt-8 mb-10 flex flex-col gap-10'>
            <div className='flex gap-10'>
                <Link to='/create'><button className='bg-green-500 text-md font-bold p-2 rounded-sm'>Create Post</button></Link>
                <button className='bg-green-500 text-md font-bold p-2 rounded-sm flex' onClick={fetchpost}>My Posts</button>
                <select className='bg-green-500 text-md font-bold p-2 rounded-sm flex' onChange={(e)=>setQusery(`price=${e.target.value}`)}>
                    <option value=""> Filter By Price</option>
                    <option value="100000"> Less then ₹ 100000</option>
                    <option value="200000"> Less then ₹ 200000</option>
                    <option value="400000"> Less then ₹ 400000</option>
                    <option value="800000"> Less then ₹ 800000</option>
                    <option value="1600000"> Less then ₹ 1600000</option>
                    <option value="3200000"> Less then ₹ 3200000</option>
                </select>
                <select className='bg-green-500 text-md font-bold p-2 rounded-sm flex' onChange={(e)=>setQusery(`mileage${e.target.value}`)}>
                    <option value=""> Filter By Mileage</option>
                    <option value="10"> Less then 10 KMPL</option>
                    <option value="20"> Less then 20 KMPL</option>
                    <option value="30"> Less then 30 KMPL</option>
                    <option value="40"> Less then 40 KMPL</option>
                    <option value="50"> Less then 50 KMPL</option>
                    <option value="60"> Less then 60 KMPL</option>
                </select>
                <select className='bg-green-500 text-md font-bold p-2 rounded-sm flex' onChange={(e)=>setQusery(`color=${e.target.value}`)}>
                    <option value=""> Filter By Colour</option>
                    <option value="red"> Red</option>
                    <option value="blue"> Blue</option>
                    <option value="green"> Green</option>
                    <option value="gray"> Gray</option>
                    <option value="black"> Black</option>
                    <option value="white"> White</option>
                </select>
                </div>
            {
                Post.map((post,i)=>{
                   return <div className='bg-white rounded-md flex flex-col ' key={i}>
                    <div className='flex mt-4 items-center'>
                        <div className='w-[5%] rounded-full ml-6'><img className='rounded-full' src={post.userimage} alt="Avatar" /></div>
                        {console.log(post.userimage)}
                        <div className='ml-6 font-bold text-2xl text-black'><h1>{post.username}</h1></div>
                    </div>
                    <div className='mb-6 mt-2 text-left mr-6 ml-6 flex'>
                        <div className='w-[40%]'><img className='w-full flex' src={post.image} alt="car image" /></div>
                        <div className='flex flex-col justify-center'>
                        <h1 className='text-4xl font-bold text-left ml-6'>{post.title}</h1>
                        <ul className='ml-10'>
                            <li><span className='font-bold'>Brand : </span>{post.brand}</li>
                            <li><span className='font-bold'>Colour : </span>{post.color}</li>
                            <li><span className='font-bold'>Price : </span>₹ {post.price}</li>
                        </ul>
                        <p className='ml-10'><span className='font-bold'>Discription : </span> {post.discription.substring(0,50)}......<Link to={`/post/${post._id}`}><button className='bg-green-500 text-xl font-sm p-1 rounded-sm'>See Details</button></Link></p>
                        </div>
                       
                    </div>
                    </div>
                })

            }
        </div>
    </div>
  )
}

export default Dashboard