"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import user from "../assets/user1.png"


const testimonials = [
  
  { id: 1, content: 'Exceptional work by ResNet! Their team understood our vision and translated it into a website that not only reflects our brand perfectly but also resonates with our target audience. The seamless collaboration and creative input made the entire process a breeze. Professional, creative, and highly recommended.', author: 'Sushil Athithya' ,position:'COO, Invictusglobaltech solutions' },
  { id: 2, content: 'Kudos to ResNet for creating a website that not only looks great but also functions seamlessly. Their attention to detail, user-centric design, and robust development make for an outstanding combination. We felt supported throughout the project, and the end result speaks volumes. Highly satisfied!', author: 'Devakumar',position:'Co-Founder ,Duolearn'  },
  // Add more testimonials as needed
];



const TestimonialCard = ({data }:any)=>{
  
  return (
    <div className=''>
    <div className='relative max-w-[913px] mt-[50px] min-h-[220px] h-full  mx-auto  w-full' style={{boxSizing :"content-box"}}>
      <svg className='absolute -top-10 -left-10 w-[60px] h-[50px] md:h-auto md:w-auto' xmlns="http://www.w3.org/2000/svg" width="120" height="100" viewBox="0 0 120 100" fill="none">
        <path d="M120 53.9386L90.8946 53.9386C91.3921 30.0989 97.4085 27.3927 104.965 26.6203L107.879 26.2143L107.879 0.000151397L104.52 0.202444C94.6527 0.826368 83.7436 2.8255 76.4655 12.9233C70.0855 21.7754 67.2727 36.2372 67.2727 58.4375L67.2727 99.5747L120 99.5747L120 53.9386Z" fill="url(#paint0_linear_34_181)" fillOpacity="0.46" />
        <path d="M52.7273 99.5747L52.7273 53.9386L24.0103 53.9386C24.5079 30.0989 30.3297 27.3927 37.8861 26.6203L40.6061 26.2143L40.6061 0.000151397L37.4412 0.202452C27.574 0.826368 16.5673 2.8255 9.28912 12.9233C2.90972 21.7754 2.7815e-05 36.2372 2.60881e-05 58.4375L2.28882e-05 99.5747L52.7273 99.5747Z" fill="url(#paint1_linear_34_181)" fillOpacity="0.46" />
        <defs>
          <linearGradient id="paint0_linear_34_181" x1="93.6364" y1="99.5747" x2="93.6364" y2="0.000149998" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="paint1_linear_34_181" x1="26.3637" y1="99.5747" x2="26.3637" y2="0.000149998" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0.65" />
          </linearGradient>
        </defs>
      </svg>

      <p className=' absolute z-10 md:text-2xl text-sm text-[#727289] max-w-[913px] w-full text-center'>
        {data.content}
      </p>

      <svg className='absolute -z-50 bottom-0 md:bottom-10 -right-10 w-[60px] h-[50px] md:h-auto md:w-auto' xmlns="http://www.w3.org/2000/svg" width="120" height="100" viewBox="0 0 120 100" fill="none">
        <path d="M0 45.6361H29.1055C28.6079 69.4758 22.5915 72.182 15.0352 72.9544L12.1212 73.3604V99.5746L15.48 99.3723C25.3473 98.7483 36.2564 96.7492 43.5345 86.6514C49.9145 77.7993 52.7273 63.3375 52.7273 41.1372V0H0V45.6361Z" fill="url(#paint0_linear_34_175)" fillOpacity="0.46" />
        <path d="M67.2727 0V45.6361H95.9897C95.4921 69.4758 89.6703 72.182 82.1139 72.9544L79.3939 73.3604V99.5746L82.5588 99.3723C92.426 98.7483 103.433 96.7492 110.711 86.6514C117.09 77.7993 120 63.3375 120 41.1372V0H67.2727Z" fill="url(#paint1_linear_34_175)" fillOpacity="0.46" />
        <defs>
          <linearGradient id="paint0_linear_34_175" x1="26.3636" y1="0" x2="26.3636" y2="99.5746" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="paint1_linear_34_175" x1="93.6363" y1="0" x2="93.6363" y2="99.5746" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopColor="white" stopOpacity="0.65" />
          </linearGradient>
        </defs>
      </svg>


    </div>

    <div className=''>
      <div className='text-center'>
        {data.position}
      </div>
      <div className='mt-2 mx-auto w-fit text-[20px] md:text-[30px] text-[#727289]'>{data.author}</div>
    </div>
  
  </div>
  )
}

export const Testimonial = () => {
  const [slideIndex, setSlideIndex] = useState(2);


  return (
    <div id='testimonials' className='relative mt-[300px] md:mt-4 w-full mx-auto overflow-hidden pb-4'>
       <div className="absolute  w-[755px] h-64 bg-[#ff001d] rounded-full blur-[250px]  -left-[70%] top-[5%]"></div>
      <div className="absolute -z-10  w-[555px] h-64 bg-sky-600 rounded-full blur-[160px]  left-[95%] bottom-[5%]"></div>
      <div>
        <div className='text-[46px] p-3 font-bold text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center 2'>Voices of Victory</div>
        <p className='text-[16px] text-center max-w-md mx-auto'>Client Testimonials That Speak to the Power of <span className='text-[#FF001D]'>Resnet&apos;</span>Software Solutions</p>
      </div>

    
    
     {testimonials.map((data , index) => {
         return (
       <>
         { data.id === slideIndex &&   <TestimonialCard key={index} data={data} />  }</>
         )
     }
       
        
      )}

      <div className="flex gap-2 justify-center items-center mt-6">
    <button className={`${slideIndex === 1 ? "bg-[#FF001D]" : "bg-[#262651] " } w-5 h-5  rounded-full`} onClick={() => setSlideIndex(1)}>
      
    </button>
    <button className={`${slideIndex === 2 ? "bg-[#FF001D]" : "bg-[#262651] " } w-5 h-5  rounded-full`} onClick={() => setSlideIndex(2)}></button>
   
  </div>
     
    </div>
  )
}






