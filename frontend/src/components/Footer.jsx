import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 pt-5 bg-gray-800 text-gray-100 px-5 '>
        <div className="top flex flex-col md:flex-row items-center justify-between border-b-2 pb-10 border-gray-200">
            <div className="right">
                <h1 className='text-3xl font-bold mb-3'> let,s contact with us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, accusantium.

                </p>

            </div>
            <div className="left">
                <button className='bg-transparent mt-5 block w-full mb-3 px-5 text-center mr-2 border-2 rounded-2xl border-white'>contact us</button>
                <button className='bg-blue  block w-full mb-3 px-5 text-center  px-2 rounded-2xl '>start free tria</button>
            </div>
        </div>

        <div className="botoom flex flex-col  md:flex-row  justify-between mt-5">
          <div className="space-y-10">
            <h1 className='text-3xl font-bold mb-3 text-center md:text-left'>Learnix</h1>
            <p>subscribe our news letter for update</p>
            <form className='relative mt-3'>
              <input type='text' className='outline-none w-full py-2 text-white pl-2 rounded-3xl bg-gray-500'/>
              <button className='absolute text-sm bg-blue  right-0 left-1/2 top-1/2 -translate-y-1/2 rounded-3xl w-[50%] py-2 '>subscribe now</button>
            </form>
          </div>

          <div>
            <h1 className='text-center text-2xl font-bold'>quick links</h1>
            <ul className='text-center'>
              <li className='py-3'><a href='#'>Home</a></li>
              <li className='py-3'><a href='#'>about</a></li>
              <li className='py-3'><a href='#'>courses</a></li>
              <li className='py-3'><a href='#'>instructors</a></li>
              <li className='py-3'><a href='#'>testimonials</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer