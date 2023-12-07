'use client'

import React,{useState} from 'react'
import Image from 'next/image'
import '../styles/CaseStories.css'
import cardImg from '../assets/caseStudy-card.png'
import closeImg from '../assets/x-circle-fill.svg'
export const CaseStories = () => {

  const [clicked0,setClicked0] = useState(false)
  const [clicked1,setClicked1] = useState(false)
  const [clicked2,setClicked2] = useState(false)
  const [clicked3,setClicked3] = useState(false)

  const cardClicked = (index:number)=>{
    setClicked0(false);
    setClicked1(false);
    setClicked2(false);
    setClicked3(false);

    if(index===0){
      setClicked0(true);
    }
    else if(index===1){
      setClicked1(true);
    }
    else if(index===2){
      setClicked2(true);
    }
    else if(index===3){
      setClicked3(true);
    }
  }

  return (
    <div className='py-8 w-full'>
      <div>
        <h1 className='font-bold text-3xl md:text-5xl text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center'>Discover Success Stories</h1>
        <div className='flex flex-col items-center mt-4'>
          <div className='text-center md:w-[60%] lg:w-[30%]'>Turning Challenges into Triumphs with <span className='font-semibold text-[#FF001D]'>Resnet&apos;s</span> AI & Machine Learning Solutions</div>
        </div>
      </div>

      {/* cards container */}
      <div className='relative my-8 w-full flex  h-[70vh]'>

        {/* inner card container */}
        <div className='relative w-[100%] md:w-[80%] left-[0%] md:left-[8%]'>

        
        <div onClick={()=>cardClicked(0)} className={clicked0?' h-[70vh] w-[100%] md:w-[80%] lg:h-[450px] lg:w-[30%] rounded-xl absolute card-clicked':`flip-card h-[350px] lg:h-[450px] w-[100%] md:w-[30%] rounded-xl absolute left-[0%] cursor-pointer`}>

          <div className="flip-card-inner  w-full rounded-xl">

            <div className=" flip-card-front w-full rounded-xl" style={clicked0?{display:'none'}:{}}>
              <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image>
            </div>

            <div className="flip-card-back rounded-xl relative" style={clicked0?{display:'block'}:{}}>
              {
                clicked0?
                <div className='z-100' onClick={(e) => { e.stopPropagation(); setClicked0(!clicked0); }}>
                  <Image src={closeImg} alt='X' className='absolute right-[2%] top-[2%] z-12 cursor-pointer'></Image>

                </div>
                :''
                
              }
              <h1 className='text-4xl font-bold'>Document Automation</h1>
              <p className='mt-6 text-justify'>
              Implementing Artificial Intelligence (AI) for documentation automation addresses manual inefficiencies by streamlining tasks, reducing errors, and fostering collaboration. It ensures scalability, diminishes reliance on experts, and contributes to environmental sustainability. The shift to AI signifies a transformative leap towards heightened productivity, precision, and eco-friendly information management.
              </p>
            </div>

          </div>
        </div>
        <div onClick={()=>cardClicked(1)} className={clicked1?' h-[70vh] w-[100%] md:w-[80%] lg:h-[450px] lg:w-[30%] rounded-xl absolute  left-[25%] cursor-pointer card-clicked':`flip-card h-[350px] lg:h-[450px] rounded-xl absolute  w-full md:w-[30%]  top-[20%] md:top-0 left-0 md:left-[25%] cursor-pointer`}>
          <div className="flip-card-inner w-full rounded-xl">

            <div className="flip-card-front w-full rounded-xl" style={clicked1?{display:'none'}:{}}>
              <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image>
            </div>
            <div className="flip-card-back rounded-xl" style={clicked0?{display:'block'}:{}}>
              {
                clicked1?
                <div className='z-100' onClick={(e) => { e.stopPropagation(); setClicked1(!clicked1); }}>
                  <Image src={closeImg} alt='X' className='absolute right-[2%] top-[2%] z-12 cursor-pointer'></Image>

                </div>
                :''
                
              }
              <h1>AI for Data Analysis</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia eos laborum explicabo excepturi sunt fuga possimus aut, ad ab. Atque consequuntur necessitatibus totam voluptatibus debitis tempora amet temporibus veniam ex, id quas minima fugiat consequatur autem rem quam qui maxime vero reprehenderit libero? Reprehenderit, delectus.</p>
            </div>

          </div>
        </div>
        <div onClick={()=>cardClicked(2)} className={clicked2?' h-[70vh] w-[100%] md:w-[80%] lg:h-[450px] lg:w-[30%] rounded-xl absolute left-[50%] cursor-pointer card-clicked ':`flip-card h-[350px] lg:h-[450px]  w-full md:w-[30%]  top-[40%] md:top-0 left-0 rounded-xl absolute md:left-[50%] cursor-pointer`}>
          <div className="flip-card-inner w-full rounded-xl">

            <div className="flip-card-front w-full rounded-xl" style={clicked2?{display:'none'}:{}}>
              <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image>
            </div>
            <div className="flip-card-back rounded-xl" style={clicked2?{display:'block'}:{}}>
              {
                clicked2?
                <div className='z-100' onClick={(e) => { e.stopPropagation(); setClicked2(!clicked2); }}>
                  <Image src={closeImg} alt='X' className='absolute right-[2%] top-[2%] z-12 cursor-pointer'></Image>

                </div>
                :''
                
              }
              <h1>AI for Data Analysis</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia eos laborum explicabo excepturi sunt fuga possimus aut, ad ab. Atque consequuntur necessitatibus totam voluptatibus debitis tempora amet temporibus veniam ex, id quas minima fugiat consequatur autem rem quam qui maxime vero reprehenderit libero? Reprehenderit, delectus.</p>
            </div>

          </div>
        </div>
        <div onClick={()=>cardClicked(3)} className={clicked3?' h-[70vh] w-[100%] md:w-[80%] lg:h-[450px] lg:w-[30%] rounded-xl absolute left-[75%] cursor-pointer card-clicked':`flip-card h-[350px] lg:h-[450px]  w-full md:w-[30%]  top-[60%] md:top-0 left-0 rounded-xl absolute md:left-[75%] cursor-pointer`}>
          <div className="flip-card-inner w-full rounded-xl">

            <div className="flip-card-front w-full rounded-xl" style={clicked3?{display:'none'}:{}}>
              <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image>
            </div>
            <div className="flip-card-back rounded-xl" style={clicked3?{display:'block'}:{}}>
              {
                clicked3?
                <div className='z-100' onClick={(e) => { e.stopPropagation(); setClicked3(!clicked3); }}>
                  <Image src={closeImg} alt='X' className='absolute right-[2%] top-[2%] z-12 cursor-pointer'></Image>

                </div>
                :''
              }
              <h1>AI for Data Analysis</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia eos laborum explicabo excepturi sunt fuga possimus aut, ad ab. Atque consequuntur necessitatibus totam voluptatibus debitis tempora amet temporibus veniam ex, id quas minima fugiat consequatur autem rem quam qui maxime vero reprehenderit libero? Reprehenderit, delectus.</p>
            </div>

          </div>
        </div>
        
        </div>
      </div>

    </div>
  )
}
