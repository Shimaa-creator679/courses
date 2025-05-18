import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import img from "../assets/courseimg.jpg"
import { IoPersonAdd } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { GoClockFill } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { LuNotebookPen } from "react-icons/lu";

import { IoIosArrowForward } from "react-icons/io";


const Coursedetail = () => {
    const{id}=useParams()

    const[item,setitem]=useState({})
    const[content,setcontent]=useState([])

    const [openindex,setopenindex]=useState(null)

    const toggle=(index)=>{
if(openindex===index){
    setopenindex(null)
}
else{
    setopenindex(index)
}
    }

    useEffect(()=>{
        const fetchdata=async()=>{
            const data= await fetch(`https://courses-production-f745.up.railway.app/api/courses/${id}`)
            const res= await data.json();
          setitem(res)
          setcontent(res.content)
        }

        fetchdata()
    },[id])

console.log(content)

  return (
    <div className=''>
<div className="container pt-10" >

    <div className='w-[100%] sm:w-[50%] md:w-[30%] mx-auto py-3 bg-[#ffffff] rounded-xl border-2 border-[#bcaddb] flex items-center justify-center '>
        <div className='flex items-center gap-3 text-[#bcaddb] font-bold '>
            <Link to="/">Home</Link>
     <span className='text-3xl'><IoIosArrowForward/></span>
     <span>CorsesDetails</span> 
        </div>
    
    </div>

<div className='flex gap-10 pt-10 flex-col lg:flex-row'>

    <div className="left flex-[60%]">
<div className='rounded-3xl bg-[#ffffff] border-2 border-gray-200 shadow-xl mb-20  py-10 px-10 '>

<span className=' bg-yellow-300  flex w-[40px] rounded-2xl items-center inline-block'>
    <CiStar />
      {item.rating}
    </span>

<h1 className='text-xl md:text-3xl font-bold mt-5'>{item.title}</h1>
<p className='mt-5 text-gray-400'>{item.description}</p>

<div className="flex items-center justify-between mt-10 flex-wrap">
<div className='instructor flex items-center gap-5'>
    <div className='img w-[50px] h-[50px] rounded-full overflow-hidden  '>
         <img src={img} className='object-cover'></img> 
    </div>
  <p className='text-[#a580fb] font-semibold '>{item.instructor}</p>
</div>

<p className='flex items-center gap-5 text-gray-400'> <IoPersonAdd />  +250 student baught this course</p>
<p  className='flex items-center gap-5 text-gray-400' > <GoCommentDiscussion /> 98% students recomended this course</p>
</div>

    </div>



    <div className="contenet rounded-3xl border-2 border-black py-10 px-3 md:px-10">
        <div className="top">
            <h1 className='text-xl md:text-2xl font-bold  mb-5'>Course Content</h1>
        <div className="flex items-center justify-between flex-wrap ">

            <p className='flex items-center gap-5'>  <IoBookOutline />24 sections</p>
            <p className='flex items-center gap-5' >  <IoBookOutline />490 lecture</p>
            <p  className='flex items-center gap-5'>  <GoClockFill />72 hour total length</p>



        </div> 
        </div>
       
       <div className="weeks mt-10  py-10">
        {content.map((item,index)=>{
            return <div className=' bg-[#d0d3f4] pt-5 pb-5 text-black bg-white  rounded-3xl border-2 border-gray-100 px-10 mb-10'>
           
    <div className='flex items-center justify-between '>
        <p className='font-bold text-xl text-black'>week{item.week}</p>
        <span className='cursor-pointer' onClick={()=>{toggle(index)}}>+</span>
    </div>
    
    {openindex===index&&<ul className='py-10'>
        {item.lessons.map((item)=>{
            return <Link to=""> <li className='py-5 flex items-center gap-3'><span className='w-[30px] h-[30px] rounded-[15px] flex items-center justify-center bg-white text-black'><CiPlay1 className='text-black'/></span>  {item}</li></Link> 
        })}
    </ul>}
    
            </div>
        })}
       </div>
    </div>
    </div>














<div className="right bg-[#ffffff] px-10 border-2 border-gray-100 flex-[30%] rounded-3xl">
<div className="top border-b-2 pb-10 border-b-gray-300">
       <div className="img w-[80%] mx-auto mt-10 rounded-3xl overflow-hidden h-[200px]">
        <img src={img} className='w-full object-cover'></img>
    </div>

    <p className='text-3xl font-bold text-gray-500 mt-5'>${item.price}</p>
    <button className='block mt-10 px-3 py-2 bg-[#c3acfa] w-full rounded-2xl'>By course now</button>
    <button className='block mt-3 px-3 py-2 bg-[#ffffff] justify-center border-2 border-gray-100 w-full rounded-2xl flex items-center gap-3' > <span><MdOutlineMailOutline /></span>send message to teacher</button>
</div>
 
 <div className="bottom mt-10">
    <h1 className='text-gray-800 text-2xl font-bold mb-3 '>this course includes</h1>
    <ul>
        <li className='flex items-center gap-3 py-3'> <span><IoCloudDownloadOutline /></span>  {item.hour}on demand video</li>
        <li className='flex items-center gap-3'> <span><IoCloudDownloadOutline /></span>  45 Downlable resource</li>
        <li className='flex items-center gap-3 py-3'>   <span><CiMobile1/></span>Acces on mobile and tv</li>
        <li className='flex items-center gap-3 py-3'>  <span><LuNotebookPen/></span> 86 articles</li>
        <li className='flex items-center gap-3 py-3'> <span><GoClockFill/></span> 30 min personal weekly session</li>
        
    </ul>
 </div>


</div>

   

</div>

    


    
</div>
    </div>
  )
}

export default Coursedetail