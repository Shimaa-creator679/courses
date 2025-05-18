import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { HiMiniPlay } from "react-icons/hi2";

import { Pagination } from 'swiper/modules';
import img1 from "../assets/story.jpg"
import img2 from "../assets/img1.jpg"
import img3 from "../assets/img2.jpg"
import img4 from "../assets/trust1.jpg"
import img5 from "../assets/trust2.jpg"
import img6 from "../assets/img1.jpg"


const Stories = () => {
  return (
    <div className='pb-40 pt-20'>
        <div className="container">
            <h1 className='text-center font-bold text-3xl'>Stories from our sucsseful learner</h1>
            <p className='text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, dolore.

            </p>
<div className='h-[300px] mt-20 '>

               <Swiper
        slidesPerView={3}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
          breakpoints={{
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }}
      >

         <SwiperSlide>
           <div className='rounded-3xl h-[300px] overflow-hidden relative w-[90%]'>
  <div className="img h-full max-h-full">
    <img src={img1} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"     allowFullScreen className='h-full w-full object-cover' />
  </div>

  <div className="info  flex text-white text-xl justify-between items-center gap-20">
    <div className='absolute bottom-5 left-5'>
      <p>wilian</p>
    <p>ux ui</p>  
    </div>
    
    <a href='https://youtu.be/sIsy3e_7VGY?si=bUXPYYSAUApYQzH2' className='bg-white rounded-full w-[40px] h-[40px] text-black flex items-center justify-center absolute bottom-5 right-5'><HiMiniPlay /></a>
  </div>
</div>
         </SwiperSlide>

         <SwiperSlide>
           <div className='rounded-3xl h-[300px] overflow-hidden relative w-[90%]'>
  <div className="img h-full max-h-full">
    <img src={img2} className='h-full w-full object-cover' />
  </div>

  <div className="info  flex text-white text-xl justify-between items-center gap-20">
    <div className='absolute bottom-5 left-5'>
      <p>wilian</p>
    <p>ux ui</p>  
    </div>
    
    <a href='https://youtu.be/sIsy3e_7VGY?si=bUXPYYSAUApYQzH2' className='bg-white rounded-full w-[40px] h-[40px] text-black flex items-center justify-center absolute bottom-5 right-5'><HiMiniPlay /></a>
  </div>
</div>
         </SwiperSlide>

         <SwiperSlide>
           <div className='rounded-3xl h-[300px] overflow-hidden relative w-[90%]'>
  <div className="img h-full max-h-full">
    <img src={img3} className='h-full w-full object-cover' />
  </div>

  <div className="info  flex text-white text-xl justify-between items-center gap-20">
    <div className='absolute bottom-5 left-5'>
      <p>wilian</p>
    <p>ux ui</p>  
    </div>
    
    <a href='https://youtu.be/sIsy3e_7VGY?si=bUXPYYSAUApYQzH2' className='bg-white rounded-full w-[40px] h-[40px] text-black flex items-center justify-center absolute bottom-5 right-5'><HiMiniPlay /></a>
  </div>
</div>
         </SwiperSlide>

         <SwiperSlide>
           <div className='rounded-3xl h-[300px] overflow-hidden relative w-[90%]'>
  <div className="img h-full max-h-full">
    <img src={img4} className='h-full w-full object-cover' />
  </div>

  <div className="info  flex text-white text-xl justify-between items-center gap-20">
    <div className='absolute bottom-5 left-5'>
      <p>wilian</p>
    <p>ux ui</p>  
    </div>
    
    <a href='https://youtu.be/sIsy3e_7VGY?si=bUXPYYSAUApYQzH2' className='bg-white rounded-full w-[40px] h-[40px] text-black flex items-center justify-center absolute bottom-5 right-5'><HiMiniPlay /></a>
  </div>
</div>
         </SwiperSlide>

         <SwiperSlide>
           <div className='rounded-3xl h-[300px] overflow-hidden relative w-[90%]'>
  <div className="img h-full max-h-full">
    <img src={img5} className='h-full w-full object-cover' />
  </div>

  <div className="info  flex text-white text-xl justify-between items-center gap-20">
    <div className='absolute bottom-5 left-5'>
      <p>wilian</p>
    <p>ux ui</p>  
    </div>
    
    <a href='https://youtu.be/sIsy3e_7VGY?si=bUXPYYSAUApYQzH2' className='bg-white rounded-full w-[40px] h-[40px] text-black flex items-center justify-center absolute bottom-5 right-5'><HiMiniPlay /></a>
  </div>
</div>
         </SwiperSlide>

         <SwiperSlide>
           <div className='rounded-3xl h-[300px] overflow-hidden relative w-[90%]'>
  <div className="img h-full max-h-full">
    <img src={img6} className='h-full w-full object-cover' />
  </div>

  <div className="info  flex text-white text-xl justify-between items-center gap-20">
    <div className='absolute bottom-5 left-5'>
      <p>wilian</p>
    <p>ux ui</p>  
    </div>
    
    <a href='https://youtu.be/sIsy3e_7VGY?si=bUXPYYSAUApYQzH2' className='bg-white rounded-full w-[40px] h-[40px] text-black flex items-center justify-center absolute bottom-5 right-5'><HiMiniPlay /></a>
  </div>
</div>
         </SwiperSlide>
        
    
      </Swiper>
</div>
    

        </div>
    </div>
  )
}

export default Stories