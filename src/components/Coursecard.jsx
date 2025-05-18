import React from 'react'

const Coursecard = ({item}) => {
  return (
    <div className='rounded-3xl w-[80%] mb-5 mx-auto'>
        <div className="img rounded-3xl max-w-full overflow-hidden ">
            <img src={item.image} className='  w-full h-[309px]'></img>
        </div>
        <div className="info text-center  mt-5">
            <h1>{item.title}</h1>
            <p>{item.duration} courses</p>
        </div>
    </div>
  )
}

export default Coursecard