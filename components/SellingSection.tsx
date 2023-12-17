'use client'

import React ,{useEffect,useState} from 'react'
import '../styles/Selling.css'
export const SellingSection = () => {


const [currentIndex, setCurrentIndex] = useState(0);
const contentsLeft = [
  {
    "heading": "Innovate Today, Succeed Tomorrow",
    "content": "Discover groundbreaking solutions with ResNet. Our commitment to innovation ensures a 25% increase in efficiency for your business."
  },
  {
    "heading": "Your Goals, Our Priority",
    "content": "At ResNet, dedicated teams work for your goals, delivering personalized strategies for a 30% boost in client revenue."
  },
  {
    "heading": "Designing Delightful Experiences",
    "content": "ResNet's user-centric design delivers a 20% increase in user engagement, creating interfaces that captivate and delight."
  },
  {
    "heading": "Harnessing Data, Driving Excellence",
    "content": "Unlock the power of your data with ResNet. Our AI expertise ensures a 40% improvement in decision-making processes for your success."
  }
];

const contentsRight = [
  {
    "heading": "Efficiency Redefined, Results Amplified",
    "content": "ResNet's software development redefines efficiency, ensuring a 20% increase in productivity with streamlined processes."
  },
  {
    "heading": "Strategic Unmatched Success",
    "content": "ResNet's app development guarantees unmatched success. Our strategic approach delivers apps that amaze and achieve a 30% increase in user engagement."
  },
  {
    "heading": "Transforming Ideas into Impact",
    "content": "ResNet transforms ideas into impactful solutions. Our teams bring digital dreams to life, resulting in a 25% increase in project impact."
  },
  {
    "heading": "Captivate and Convert with Landing Pages",
    "content": "ResNet's landing page development captivates and converts. Strategic design leads to a 25% boost in conversion rates, benefiting startups and established brands alike."
  }
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentsLeft.length);
    }, 100000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [contentsLeft.length]);
  return (
    <div className='relative w-full py-20'>

      <h1 className='font-bold text-5xl text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center'>People Love Us</h1>

      <p className='w-[70%] lg:w-[50%] mt-4 text-center absolute left-[50%] -translate-x-[50%]'>A decade od excellence , <span className='font-semibold text-[#FF001D]'>70 +</span> Clients Strong - Celebrating a <span className='font-semibold text-[#FF001D]'>Decade</span> of Trust and Innovation in the Industry!</p>


      <div className='mt-[28vh] md:mt-24 flex justify-center w-full'>

        <div className='p-4 pr-6 h-[55vh] md:h-[35vh] w-[50%] lg:w-[40%] relative overflow-hidden'>
          {
            contentsLeft.map((element,index)=>{
              return (
                <div className={`content wordspin h-[55vh] md:h-[35vh]`} key={index} >
                  <h2 className='text-xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#39A94B] from-10% via-[#6cff85] via-40% to-[#00FFFF] to-100% font-extrabold text-end  pb-2 lg:pb-6'>{element.heading}</h2>
                  <p className='text-sm md:text-xl text-white text-end w-full'>
                  {element.content}
                  </p>
                </div>
              )
            })
          }
        </div>

        <div className='pl-6 p-4 border-s-[3px] border-gray-700 h-[55vh] md:h-[35vh] w-[50%] lg:w-[40%]  relative overflow-hidden'>
          {
            contentsRight.map((element,index)=>{
              return (
                <div className={`content wordspin h-[55vh] md:h-[35vh]`} key={index} >
                  <h2 className='text-xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF]  to-[#39A94B] font-extrabold text-start pb-2 lg:pb-6'>{element.heading}</h2>
                  <p className='text-sm md:text-xl text-white text-start w-full'>
                  {element.content}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}
