import React from 'react'
import img from "../assets/popularimg.jfif"
import { FaBook } from "react-icons/fa6";


import { LuAlarmClockMinus } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Popularcard = ({item}) => {
  return (
    <div className=' bg-[#fcfcfc] pb-5 shadow-xl  rounded-lg mt-10 overflow-hidden mb-10 w-[80%] mx-auto relative '>
        <p className='absolute right-5 top-5 text-blue bg-white border border-blue rounded-2xl px-2 py-1'>{item.level}</p>
<div className="img h-[40%]   w-[100%] overflow-hidden rounded-lg  ">
    <img src={img} className=' w-full h-full object-cover' ></img>
</div>
<div className="info px-3 pt-5">
    <h1 className='text-lg font-bold text-center'>{item.title}</h1>
    <p className='mb-5 text-center'>by <span className='text-blue'>{item.instructor}</span></p>
    <div className="flex flex-col gap-5 md:flex-row items-center justify-between ">
        <p className='flex items-center gap-2 bg-gray-200 rounded-2xl px-2 py-1'> <FaBook />{item.lessons} lessons</p>
        <p  className='flex items-center gap-2 bg-gray-200 rounded-2xl px-2 py-1'> <LuAlarmClockMinus />{item.hours} hours</p>
    </div>

<div className="flex mt-20 justify-between items-center ">
    <p className='text-xl font-bold text-blue'>${item.price} </p>
    <Link to={`courseDetails/${item.id}`} className='bg-black text-white text-sm rounded-2xl px-2 py-1'>view detail</Link>
</div>
</div>
    </div>
  )
}

export default Popularcard