"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import buttonPattern from "../assets/button-pattern.png"

export const About = () => {

  const wordArray = ["Thrive", "Flourish", "Scale 10x"]
  const [Words, setWords] = useState(wordArray[0]);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      // Update state with the current word
      setWords(wordArray[currentIndex]);

      // Move to the next word in the array
      currentIndex = (currentIndex + 1) % wordArray.length;
    }, 2000); // Adjust the interval duration as needed (e.g., 2000 milliseconds for 2 seconds)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      <div>card</div>
    <div className='max-w-xl'>
    <div className='text-[65px] font-[700] w-full' >
        <span>We Make Your Business</span>
        <span className='font-semibold  text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center' >{Words}
        </span>

      </div>
      <div className='text-[24px]'>Lorem ipsum dolor sit amet consectetur. Nulla sed purus fringilla tellus. Lorem ipsum dolor sit amet consectetur. Nulla sed purus fringilla tellus. Lorem ipsum dolor sit amet consectetur. </div>
      
      <div className='mt-5 relative w-fit group' >
      <Image src={buttonPattern} alt='Resnet Solutions' className='group-hover:scale-50 ease-in-out duration-700' width={250} />
  <button className=" absolute top-1/2 left-1/2  text-red-500  px-4 py-[10px] bg-[#08081B] border-2 border-red-500 group-hover:bg-red-500 group-hover:text-white ease-in-out duration-500" style={{transform : "translate(-50% , -50%)"}} >Contact Us</button>
</div>

    </div>



    </div>
  )
}
