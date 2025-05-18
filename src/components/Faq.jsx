import React, { useState } from 'react'

const faqData = [
  { question: "What is your return policy?", answer: "You can return any item within 30 days." },
  { question: "Do you ship internationally?", answer: "Yes, we ship worldwide!" },
  { question: "How can I contact support?", answer: "Email us at support@example.com." },
];

const Faq = () => {
    const[openIndex,setOpenIndex]=useState(null)

     const toggle = (index) => {
    // لو نفس السؤال مفتوح، اقفله، لو مختلف افتحه
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  
  return (
    <div className='pt-40'>
        <div className="container">
            <h1 className='text-center font-bold text-3xl mb-5'>Frequntly Asked Question</h1>
            <div className='flex justify-center '>
   <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, minus!

            </p>
            </div>
         

{faqData.map((item,index)=>{
 
    return  <div className='flex flex-col  items-center justify-center mt-10'>
        <div className=' mb-5 text-gray-500 w-[100%] px-10 py-10 rounded-3xl bg-gray-100'>
<div className='flex items-center justify-between text-lg'> <p>{item.question}</p> <button onClick={()=>{toggle(index)}}>{openIndex===index?"-":"+"}</button></div>
{openIndex===index&&<p className='py-10'>{item.answer}</p>}

    </div>
    </div>
    
    
})}
        </div>
    </div>
  )
}

export default Faq