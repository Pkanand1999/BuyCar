import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Dashboard() {
    const [Post,setPost]=useState([])
    const data=useSelector((e)=>{
        return e.reducer.posts
      })
      useEffect(()=>{
        setPost([...data])
      },[data])


  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-black via-blue-500 to-pink-700 ... flex justify-center ">
        <div className='w-[80%] text-center mt-8 mb-10 flex flex-col gap-10'>
            <div className='flex gap-10'>
                <Link to='/create'><button className='bg-green-500 text-md font-bold p-2 rounded-sm'>Create Post</button></Link>
                <Link to='/inventory'><button className='bg-green-500 text-md font-bold p-2 rounded-sm'>Inventory</button></Link>
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