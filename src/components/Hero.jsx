import img from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"

const Hero = () => {
  return (
    <div className='bg-blue pb-10 h-[100vh] '>
      <div className="container">
        
            <div className='pt-20  text-center w-[80%] mx-auto'>
<span className='text-center bg-white rounded-3xl px-2 py-1 mb-10 inline-block'>learn from top Experts</span>
<p className='text-white text-center text-xl font-semi-bold mb-2 uppercase'>Learn any where,any time</p>
<p className='text-center text-white font-semi-bold text-4xl'>Empower your future</p>
<p className='text-white w-[80%] mx-auto mt-10 mb-5 text-center text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere accusamus a aspernatur ipsa dolorum eaque doloremque optio voluptatibus totam cum!

</p>
<form className='flex justify-center  '>
    <input placeholder='serach your course' className='outline-none rounded-2xl py-2 px-5 text-sm' type='text'/>
</form>

            </div>
        
      </div>
        
    </div>
  )
}

export default Hero