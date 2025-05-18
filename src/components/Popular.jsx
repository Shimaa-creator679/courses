import React, { useEffect, useState } from 'react'

import Popularcard from './Popularcard'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';

const Popular = () => {
    const[title,settitle]=useState("All")



    const[courses,setcourses]=useState([])

    const[course,setcourse]=useState({})

    useEffect(()=>{

        const fetchdata= async()=>{
             const data=await fetch("http://localhost:3000/courses")
             const res=await data.json()
             setcourses(res)
        }

        fetchdata();
    },[])

    useEffect(()=>{

        const fetchdata= async()=>{
             const data=await fetch(`https://courses-production-f745.up.railway.app/api/courses?title=${title}`)
             const res=await data.json()
             setcourse(res)
        }

        fetchdata();
    },[title])

    console.log(course)


 return (
  <div className='pt-20 pb-40 bg-[#ffffff]'>
    <div className="container">
      <h1 className='text-center text-3xl font-bold mb-5'>Explore most popular courses</h1>
      <p className='text-center'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, assumenda.
      </p>

      {/* الأزرار */}
      <div className="grid mt-5 gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-center ">
        {courses && courses.map((item, index) => (
          <button
            key={index}
            onClick={() => settitle(item.title)}
            className='text-[12px] bg-gray-100 hover:bg-gray-200 rounded-2xl px-2 py-2'
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* الكروت */}
      {title === "All" ? (
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {courses && courses.map((item, index) => (
            <Popularcard key={index} item={item} />
          ))}
        </div>
      ) : (
      course&&course.map((item)=>{
        return <div className="mt-10">
            <Popularcard item={item} />
          </div>
      })
         
        
      )}
    </div>
  </div>

);
}

export default Popular