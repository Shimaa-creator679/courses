import React from 'react'
import img1 from "../assets/trust1.jpg"
import img2 from "../assets/trust2.jpg"
import { FaUserFriends } from "react-icons/fa";
import img3 from "../assets/network.jpg"
import { RiBasketballLine } from "react-icons/ri";
const Trustsection = () => {
  return (
    <div className='pt-40 pb-40'>
        <div className="container">
            <h1 className='text-3xl text-center font-bold mb-5'>
                why learner trust us
            </h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ratione.

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
                <div className="one ">
                    <div className="img rounded-3xl overflow-hidden">
                        <img src={img1}></img>
                    </div>
                    <div className="info bg-lightviolet rounded-3xl py-5 mt-5 px-3">
                        <div className='w-[30px] h-[30px] rounded-full bg-blue grid mb-5 place-items-center'><FaUserFriends className='text-white' /></div>
                        <h1>Expert trainer</h1>
                        <sm>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, consectetur.

                        </sm>
                    </div>
                </div>
                <div className="tow bg-[#ddf0ff] rounded-3xl overflow-hidden">
                    <div className="img">
                        <img src={img3}></img>
                    </div>
                    <div className="info mt-5 px-5">
                        <div className='flex items-center gap-3 mb-3'>
                          <span className='w-[30px] h-[30px] rounded-full bg-blue text-white grid place-items-center'><RiBasketballLine /></span>
                        <p>Global Community</p>   
                        </div>
                       
                        <sm>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellat corrupti excepturi aspernatur dicta velit perspiciatis eum fugiat labore aut.

                        </sm>
                    </div>
                </div>
                <div className="three ">
                   
                    <div className="info bg-lightviolet rounded-3xl mb-10 py-5 px-5 ">
                        <div><FaUserFriends /></div>
                        <h1 className='font-bold mt-3 '>Expert trainer</h1>
                        <sm>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, consectetur.

                        </sm>
                    </div>
                       <div className="img rounded-3xl overflow-hidden ">
                        <img src={img2}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trustsection