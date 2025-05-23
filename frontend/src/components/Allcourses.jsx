import React, { useEffect, useState } from 'react'
import Coursecard from './Coursecard'

const Allcourses = () => {
    const[courses,setcourses]=useState([])
useEffect(() => {

  const fetchdata = async () => {
    try {
      const data = await fetch("https://ten-prism-anaconda.glitch.me");


      if (!data.ok) {
        console.error('Server responded with status:', data.status);
        return;
      }
      const res = await data.json();
      setcourses(res);
    } catch (error) {
      console.error("error",error);
    }
  };

  fetchdata();

}, []);


   
    console.log(courses)
  return (
    <div className='bg-white pt-40'>
        <div className="container ">
          <h1 className='text-center text-2xl font-bold mb-3'>Explore our top courses catergories</h1>
          <p className='text-center mb-5'>Discover awide range of learning paths from-design to
            develpoment,business,to personal growth
          </p>

<div className="grid grid-cols-1 gap-3 mt-20 md:grid-cols-3 lg:grid-cols-3">
    {courses&&courses.map((item)=>{
        return <Coursecard item={item}/>
    })}
</div>
        </div>
    </div>
  )
}

export default Allcourses