"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import user from "../assets/user1.png"


const testimonials = [
  { id: 1, content: 'Lorem ipsum dolor sit amet consectetur. Nulla sed purus fringilla tellus. Lorem ipsum dolor sit amet consectetur. Nulla sed purus fringilla tellus. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Nulla sed purus fringilla tellus. Lorem ipsum dolor sit amet consectetur. Nulla sed purus fringilla tellus. Lorem ipsum dolor sit amet consectetur.', author: 'CEO Alphabet' },
  { id: 2, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore quia perferendis similique iusto debitis provident, nesciunt reiciendis tenetur dolores explicabo! Iste maxime fugit quae animi doloremque, saepe soluta libero laboriosam magnam quidem, earum eligendi quis ipsum ipsam quo a excepturi repellat voluptatem dolore delectus beatae esse. reprehenderit repellendus cumque voluptates saepe dolorum.', author: 'CEO Google' },
  { id: 3, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores at, placeat, minima culpa nesciunt voluptas mollitia unde facilis reprehenderit totam commodi adipisci non sapiente recusandae aliquid numquam. Sed recusandae sapiente laboriosam adipisci inventore, laborum velit aut in libero omnis minima ipsam. Voluptas recusandae facilis nisi! Autem magni quidem rem.', author: 'CEO MicroSoft' },
  // Add more testimonials as needed
];



const TestimonialCard = ({data }:any)=>{
  
  return (
    <div className=''>
    <div className='relative max-w-[913px] mt-[50px] min-h-[220px] h-full  mx-auto  w-full' style={{boxSizing :"content-box"}}>
      <svg className='absolute -top-10 -left-10' xmlns="http://www.w3.org/2000/svg" width="120" height="100" viewBox="0 0 120 100" fill="none">
        <path d="M120 53.9386L90.8946 53.9386C91.3921 30.0989 97.4085 27.3927 104.965 26.6203L107.879 26.2143L107.879 0.000151397L104.52 0.202444C94.6527 0.826368 83.7436 2.8255 76.4655 12.9233C70.0855 21.7754 67.2727 36.2372 67.2727 58.4375L67.2727 99.5747L120 99.5747L120 53.9386Z" fill="url(#paint0_linear_34_181)" fill-opacity="0.46" />
        <path d="M52.7273 99.5747L52.7273 53.9386L24.0103 53.9386C24.5079 30.0989 30.3297 27.3927 37.8861 26.6203L40.6061 26.2143L40.6061 0.000151397L37.4412 0.202452C27.574 0.826368 16.5673 2.8255 9.28912 12.9233C2.90972 21.7754 2.7815e-05 36.2372 2.60881e-05 58.4375L2.28882e-05 99.5747L52.7273 99.5747Z" fill="url(#paint1_linear_34_181)" fill-opacity="0.46" />
        <defs>
          <linearGradient id="paint0_linear_34_181" x1="93.6364" y1="99.5747" x2="93.6364" y2="0.000149998" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stop-color="white" stop-opacity="0.65" />
          </linearGradient>
          <linearGradient id="paint1_linear_34_181" x1="26.3637" y1="99.5747" x2="26.3637" y2="0.000149998" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stop-color="white" stop-opacity="0.65" />
          </linearGradient>
        </defs>
      </svg>
      <p className=' absolute z-10 md:text-2xl text-xl text-[#727289] max-w-[913px] w-full text-center'>
        {data.content}
      </p>
      <svg className='absolute -z-50 bottom-10 -right-10' xmlns="http://www.w3.org/2000/svg" width="120" height="100" viewBox="0 0 120 100" fill="none">
        <path d="M0 45.6361H29.1055C28.6079 69.4758 22.5915 72.182 15.0352 72.9544L12.1212 73.3604V99.5746L15.48 99.3723C25.3473 98.7483 36.2564 96.7492 43.5345 86.6514C49.9145 77.7993 52.7273 63.3375 52.7273 41.1372V0H0V45.6361Z" fill="url(#paint0_linear_34_175)" fill-opacity="0.46" />
        <path d="M67.2727 0V45.6361H95.9897C95.4921 69.4758 89.6703 72.182 82.1139 72.9544L79.3939 73.3604V99.5746L82.5588 99.3723C92.426 98.7483 103.433 96.7492 110.711 86.6514C117.09 77.7993 120 63.3375 120 41.1372V0H67.2727Z" fill="url(#paint1_linear_34_175)" fill-opacity="0.46" />
        <defs>
          <linearGradient id="paint0_linear_34_175" x1="26.3636" y1="0" x2="26.3636" y2="99.5746" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stop-color="white" stop-opacity="0.65" />
          </linearGradient>
          <linearGradient id="paint1_linear_34_175" x1="93.6363" y1="0" x2="93.6363" y2="99.5746" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stop-color="white" stop-opacity="0.65" />
          </linearGradient>
        </defs>
      </svg>


    </div>

    <div className=''>
      <Image
        src={user}
        alt="User"
        className='rounded-full w-[100px] h-[100px] mx-auto'
      />
      <div className='mx-auto w-fit text-[30px] text-[#727289]'>{data.author}</div>
    </div>
  
  </div>
  )
}

export const Testimonial = () => {
  const [slideIndex, setSlideIndex] = useState(2);


  return (
    <div className='mt-[200px] w-5/6 mx-auto '>
      <div>
        <div className='text-[46px] p-3 font-[600] text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center 2'>Voices of Victory</div>
        <p className='text-[16px] text-center max-w-md mx-auto'>Client Testimonials That Speak to the Power of <span className='text-[#FF001D]'>Resnet’s</span> AI & Machine Learning Excellence</p>
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
    <button className={`${slideIndex === 3 ? "bg-[#FF001D]" : "bg-[#262651] " } w-5 h-5  rounded-full`} onClick={() => setSlideIndex(3)}></button>
  </div>
     
    </div>
  )
}






