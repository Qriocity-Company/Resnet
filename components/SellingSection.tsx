'use client'

import React ,{useEffect,useState} from 'react'
import '../styles/Selling.css'
export const SellingSection = () => {


const [currentIndex, setCurrentIndex] = useState(0);
const contentsLeft = [
  {
    "heading": "10+ Years",
    "content": "With over 1 decade of dedicated service in the AI and Machine Learning industry, we've honed our expertise, refined our strategies, and continuously evolved to meet the dynamic needs of our clients"
  },
  {
    "heading": "Heading 2",
    "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "heading": "Heading 3",
    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "heading": "Heading 4",
    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];
const contentsRight = [
  {
    "heading": "365 Days",
    "content": "With over 1 decade of dedicated service in the AI and Machine Learning industry, we've honed our expertise, refined our strategies, and continuously evolved to meet the dynamic needs of our clients"
  },
  {
    "heading": "Heading 2",
    "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "heading": "Heading 3",
    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "heading": "Heading 4",
    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentsLeft.length);
    }, 100000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='relative w-full py-20'>

      <h1 className='font-semibold text-5xl text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center'>People Love Us</h1>

      <p className='w-[40%] mt-4 text-center absolute left-[50%] -translate-x-[50%]'>A decade od excellence , <span className='font-semibold text-red-500'>70 +</span> Clients Strong - Celebrating a <span className='font-semibold text-red-500'>Decade</span> of Trust and Innovation in the AI & Machine Learning Industry!</p>


      <div className='mt-20 flex justify-center w-full'>

        <div className='p-4 pr-6 h-[32vh] w-[30%] relative overflow-hidden '>
          {
            contentsLeft.map((element,index)=>{
              return (
                <div className={`content wordspin h-[32vh] ${index===currentIndex?'active':'not-active'} `} key={index} >
                  <h2 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#39A94B] from-10% via-[#6cff85] via-40% to-[#00FFFF] to-100% font-extrabold text-end pb-6'>{element.heading}</h2>
                  <p className='text-xl text-white text-end'>
                  {element.content}
                  </p>
                </div>
              )
            })
          }
        </div>

        <div className='pl-6 p-4 border-s-[3px] border-gray-700 h-[35vh] w-[30%] relative overflow-hidden'>
          {
            contentsRight.map((element,index)=>{
              return (
                <div className={`content wordspin h-[32vh] ${index===currentIndex?'active':'not-active'} `} key={index} >
                  <h2 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF]  to-[#39A94B] font-extrabold text-start pb-6'>{element.heading}</h2>
                  <p className='text-xl text-white text-start'>
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
