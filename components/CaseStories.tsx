import React from 'react'
import Image from 'next/image'
import '../styles/CaseStories.css'
import cardImg from '../assets/caseStudy-card.png'

export const CaseStories = () => {
  return (
    <div className='py-8 w-full'>
      <div>
        <h1 className='font-semibold text-5xl text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center'>Discover Success Stories</h1>
        <div className='flex flex-col items-center mt-4'>
          <div>Turning Challenges into Triumphs with <span className='font-semibold text-red-500'>Resnet's</span> AI &</div>
          <div className=''>
            Machine Learning Solutions
          </div>
        </div>
      </div>

      {/* cards container */}
      <div className='relative my-8 w-full flex  h-[70vh]'>

        {/* inner card container */}
        <div className='relative w-[80%] left-[8%]'>

        
        <div className="flip-card h-[450px] w-[30%] rounded-xl absolute left-[0%] cursor-pointer">

          <div className="flip-card-inner h-[450px] w-full rounded-xl">

            <div className="flip-card-front h-[450px] w-full rounded-xl">
              <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image>
            </div>
            <div className="flip-card-back rounded-xl">
              <h1 className='text-4xl font-bold'>Document Automation</h1>
              <p className='mt-6 text-justify'>
              Implementing Artificial Intelligence (AI) for documentation automation addresses manual inefficiencies by streamlining tasks, reducing errors, and fostering collaboration. It ensures scalability, diminishes reliance on experts, and contributes to environmental sustainability. The shift to AI signifies a transformative leap towards heightened productivity, precision, and eco-friendly information management.
              </p>
            </div>

          </div>
        </div>
        <div className="flip-card h-[450px] w-[30%] rounded-xl absolute left-[25%] cursor-pointer">
          <div className="flip-card-inner h-[450px] w-full rounded-xl">

            <div className="flip-card-front h-[450px] w-full rounded-xl">
              <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image>
            </div>
            <div className="flip-card-back rounded-xl">
              <h1>AI for Data Analysis</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia eos laborum explicabo excepturi sunt fuga possimus aut, ad ab. Atque consequuntur necessitatibus totam voluptatibus debitis tempora amet temporibus veniam ex, id quas minima fugiat consequatur autem rem quam qui maxime vero reprehenderit libero? Reprehenderit, delectus.</p>
            </div>

          </div>
        </div>
        <div className="flip-card h-[450px] w-[30%] rounded-xl absolute left-[50%] cursor-pointer">
          <div className="flip-card-inner h-[450px] w-full rounded-xl">

            <div className="flip-card-front h-[450px] w-full rounded-xl">
              <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image>
            </div>
            <div className="flip-card-back rounded-xl">
              <h1>AI in Healthcare</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur minima obcaecati, aut dolorem enim omnis laudantium quae, doloribus accusantium porro quam corporis ut modi quasi voluptates neque asperiores at ea! Sint, animi. Provident magni libero ipsum eveniet error consequuntur maxime.</p>
            </div>

          </div>
        </div>
        <div className="flip-card h-[450px] w-[30%] rounded-xl absolute left-[75%] cursor-pointer">
          <div className="flip-card-inner h-[450px] w-full rounded-xl">

            <div className="flip-card-front h-[450px] w-full rounded-xl">
              <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image>
            </div>
            <div className="flip-card-back rounded-xl">
              <h1>Job Automation</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel esse voluptates provident sit id, aut perferendis adipisci tempora nihil. Sint nihil iure modi omnis obcaecati quia. Distinctio nobis reprehenderit dicta aut et suscipit animi fuga.</p>
            </div>

          </div>
        </div>
        
        </div>
      </div>

    </div>
  )
}
