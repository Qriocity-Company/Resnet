'use client'

import React,{useState} from 'react'
import Image from 'next/image'
import '../styles/CaseStories.css'
import cardImg from '../assets/caseStudy-card.png'
import closeImg from '../assets/x-circle-fill.svg'
import docauto from '../assets/documentation.png'
import ds1 from '../assets/ds1.png'
import ds2 from '../assets/ds2.png' 
import customer from '../assets/customer-insights.png'
import doc2 from '../assets/doc2.png'
import qriocity from '../assets/qriocity.png'
import invictus from '../assets/invictus2.png'
import appimg from '../assets/app.png'
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

  const data = [
    {
      "sections": [
        {
          "main_title": "Redefining Student Projects",
          "content": "ResNet's tailored solutions addressed the intricacies of complex project challenges, providing students with a pathway to navigate academic pressures and job placement stress seamlessly."
        },
        {
          "title": "ResNet's Impact on Student Projects",
          "points": [
            "Streamlined processes and personalized guidance.",
            "Significantly reduced project completion time by 30%.",
            "Fosters a more efficient and satisfying project development experience for students."
          ]
        },
        {
          "title": "Qriocity.in: Beyond Academics with ResNet",
          "points": [
            "ResNet plays a pivotal role in streamlining projects.",
            "Offers enticing group discounts and introduces the 'Earn While You Learn' program.",
            "Strategic approach results in a remarkable 25% increase in project participation.",
            "Heightened level of student engagement at Qriocity.in."
          ]
        }
      ]
    },
    {
      "sections": [
        {
          "main_title": "Revolutionizing Documentation with AI",
          "content": [
            "Embarking on a transformative journey, ResNet collaborated with a forward-thinking company to reshape documentation processes through the power of AI.",
            "Witness a substantial reduction in manual efforts as AI-powered automation streamlines labor-intensive tasks, enhancing efficiency in document creation, editing, and distribution."
          ]
        },
        {
          "title": "Efficiency Amplified Through AI",
          "points": [
            "Discover the transformative impact of AI as ResNet streamlines processes, provides scalability, and reduces reliance on manual expertise.",
            "This success story showcases ResNet's commitment to environmental sustainability, as AI-driven documentation minimizes paper usage and champions eco-friendly information management practices."
          ]
        },
        {
          "title": "Sustainable Transformation in Information Management",
          "points": [
            "Experience a paradigm shift in information management, where ResNet's expertise and cutting-edge technologies elevate documentation to new heights for the collaborating company.",
            "This shift brings about a more connected and efficient workspace, aligning with the company's commitment to staying at the forefront of technological advancements."
          ]
        }
      ]
    },
    {
      "sections": [
        {
          "main_title": "Revolutionizing Customer Data Analysis",
          "content": [
            "ResNet spearheaded a transformative shift in customer data analytics by introducing an AI-powered solution that automated data processing, extracted actionable insights, and delivered personalized recommendations.",
            "The profound impact of this initiative manifested in a remarkable 25% improvement in customer satisfaction and overall business performance."
          ]
        },
        {
          "title": "Strategic Implementation and Overcoming Challenges",
          "points": [
            "Navigating through integration challenges, ensuring data privacy, and addressing skepticism, ResNet strategically executed the implementation of advanced analytics algorithms.",
            "The success of this approach was underlined by overcoming obstacles, marking a paradigm shift towards informed decision-making in customer data analytics."
          ]
        },
        {
          "title": "Empowering Teams with Comprehensive Training",
          "points": [
            "Under ResNet's guidance, teams underwent comprehensive training, transforming them into adept users of GPT, Google Sheets, and Python.",
            "This initiative not only ensured seamless integration but also empowered teams to harness the power of advanced analytics, fostering unparalleled customer engagement and driving informed decision-making."
          ]
        }
      ]
    },{
      "sections:":[
        {
          "main_title": "ResNet's Influence on Digital Marketing Strategy",
          "content": [
            "Explore how ResNet revolutionized Invictus's digital marketing approach, addressing the need for a robust online presence.",
            "Our expertise crafted a visually stunning website, enhancing brand engagement and user experience."
          ]
        },
        {
          "title": "Invictus & ResNet: Navigating Digital Challenges",
          "points": [
            "Discover the impactful partnership that tackled the complexities of online visibility and brand perception.",
            "Through ResNet's strategies, Invictus witnessed a significant increase in website traffic, improved brand perception, and higher conversion rates."
          ]
        },
        {
          "title": "Invictus: Beyond Marketing with ResNet",
          "points": [
            "Uncover the collaborative success story, where ResNet's digital marketing strategies went beyond the surface, driving sustained growth for Invictus.",
            "The ongoing success includes establishing Invictus as a key player in their industry."
          ]
        },
        {
          "title": "Invictus: Achieving Digital Dominance",
          "points": [
            "Witness the transformative journey where ResNet's expertise propelled Invictus to digital dominance.",
            "Achievements include a visually appealing and highly functional website, elevated online visibility, and a growing online presence."
          ]
        }
      ]
    }
    

  ]

  return (
    <div className='py-8 w-full' id='successStories'>
      <div>
        <h1 className='font-bold text-3xl md:text-5xl text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center'>Discover Success Stories</h1>
        <div className='flex flex-col items-center mt-4'>
          <div className='text-center md:w-[60%] lg:w-[30%]'>Turning Challenges into Triumphs with <span className='font-semibold text-[#FF001D]'>Resnet&apos;s</span> Software Solutions</div>
        </div>
      </div>

      {/* cards container */}
      <div className='relative my-8 w-full flex  h-[70vh]'>

        {/* inner card container */}
        <div className='relative w-[100%] lg:w-[80%] left-[0%] lg:left-[8%]'>

        
        <div onClick={()=>cardClicked(0)} className={clicked0?'h-[70vh] w-full md:w-[40%] md:h-[600px] lg:h-[600px] rounded-xl absolute card-clicked':`flip-card h-[350px] lg:h-[450px] w-[100%] md:w-[30%] rounded-xl absolute left-[0%] cursor-pointer`}>

          <div className="flip-card-inner  w-full rounded-xl">

            <div className=" flip-card-front w-full rounded-xl" style={clicked0?{display:'none'}:{}}>
              {/* <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image> */}
              <Image src={appimg} alt='Documentation' className='w-full h-full rounded-xl object-cover'></Image>
            </div>

            <div className="flip-card-back rounded-xl relative" style={clicked0?{display:'block'}:{}}>
              {
                clicked0?
                <div className='z-100' onClick={(e) => { e.stopPropagation(); setClicked0(!clicked0); }}>
                  <Image src={closeImg} alt='X' className='absolute right-[2%] top-[2%] z-12 cursor-pointer'></Image>
                </div>
                :''
              }
              <div className={`block md:flex gap-5 h-full w-full ${!clicked0? 'max-h-[450px]':''} overflow-hidden `}>
                
                <div className='w-full md:w-[100%] '>
                  <h1 className='mt-2 md:mt-0 text-xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text'>Reshaping Software Solutions</h1>
                  <p className='mt-3 text-justify lg:text-lg w-[100%]'>
                  ResNet Solutions embarked on a transformative journey with Tech Innovators Inc. Our focus on ML/AI automation integrated app development and website overhaul redefined their digital landscape. 
                  </p>

                  <div className=' lg:text-lg'>
                    <h2 className='mt-3 text-left text-base lg:text-xl font-bold text-[#FF001D]'>ResNet&apos;s Process</h2>
                    <ul className='mt-2 text-justify  w-[100%] list-disc pl-6'>
                      <li>Engineered a custom app integrating ML/AI automation for Tech Innovators Inc.</li>
                      <li>Automated mundane tasks, enabling a focus on high-value activities.</li>
                      <li>Achieved a remarkable 30% increase in operational efficiency.</li>
                    </ul>

                    <h2 className='hidden md:block mt-3 text-left text-base lg:text-xl font-bold text-[#FF001D]'>Crafting Engaging Digital Experiences</h2>
                    <ul className=' hidden md:block mt-2 text-justify  w-[100%] list-disc pl-6'>
                      <li>Achieved a 40% increase in online interactions through a modern and responsive interface.</li>
                      <li>Implemented strategic design elements for enhanced user engagement.</li>
                      
                    </ul>

                  </div>
              
                </div>
              </div>
            </div>

          </div>
        </div>
        <div onClick={()=>cardClicked(1)} className={clicked1?' h-[70vh] w-full md:w-[40%] lg:h-[600px] rounded-xl absolute  left-[25%] cursor-pointer card-clicked':`flip-card h-[350px] lg:h-[450px] rounded-xl absolute  w-full md:w-[30%]  top-[30%] md:top-0 left-0 md:left-[25%] cursor-pointer`}>
          <div className="flip-card-inner w-full rounded-xl">

            <div className="flip-card-front w-full rounded-xl" style={clicked1?{display:'none'}:{}}>
              <Image src={doc2} alt='Documentation' className='w-full h-full rounded-xl object-cover'></Image>
              {/* <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image> */}
            </div>
            <div className="flip-card-back rounded-xl" style={clicked0?{display:'block'}:{}}>
              {
                clicked1?
                <div className='z-100' onClick={(e) => { e.stopPropagation(); setClicked1(!clicked1); }}>
                  <Image src={closeImg} alt='X' className='absolute right-[2%] top-[2%] z-12 cursor-pointer'></Image>

                </div>
                :''
                
              }
              <div className={`block md:flex gap-5 h-full w-full ${!clicked1? 'max-h-[450px]':''} overflow-hidden `}>
                
                <div className='w-full'>
                <h1 className='mt-2 md:mt-0 text-xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text'>Revolutionizing Documentation with AI</h1>
                  <p className='mt-3 text-justify lg:text-lg w-[100%]'>
                  Witness a substantial reduction in manual efforts as AI-powered automation streamlines labor-intensive tasks, enhancing efficiency in document creation, editing, and distribution.
                  </p>
                  <div className=' lg:text-lg'>
                    <h2 className='mt-3 text-left text-base lg:text-xl font-bold text-[#FF001D]'>Efficiency Amplified Through AI</h2>
                    <ul className='mt-2 text-justify w-[100%] list-disc pl-6'>
                      <li>Discover the transformative impact of AI as ResNet streamlines processes, provides scalability, and reduces reliance on manual expertise.</li>
                      <li>Significantly reduced Doucmentation time by 40%.</li>
                      
                    </ul>

                    <h2 className='md:block hidden mt-3 text-left text-base lg:text-xl font-bold text-[#FF001D]'>Minimized Documentation Time and Errors</h2>
                    <ul className='md:block hidden mt-2 text-justify w-[100%] list-disc pl-6'>
                      <li>Witness a revolutionary reduction in documentation time and errors as ResNet&apos;s AI-driven automation ensures precision and accuracy throughout the process.</li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div onClick={()=>cardClicked(2)} className={clicked2?' h-[70vh] w-full md:w-[40%]  lg:h-[600px]  rounded-xl absolute left-[50%] cursor-pointer card-clicked ':`flip-card h-[350px] lg:h-[450px]  w-full md:w-[30%]  top-[60%] md:top-0 left-0 rounded-xl absolute md:left-[50%] cursor-pointer`}>
          <div className="flip-card-inner w-full rounded-xl">

            <div className="flip-card-front w-full rounded-xl" style={clicked2?{display:'none'}:{}}>
              <Image src={invictus} alt='Documentation' className='w-full h-full rounded-xl object-cover'></Image>
              {/* <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image> */}
            </div>
            <div className="flip-card-back rounded-xl" style={clicked2?{display:'block'}:{}}>
              {
                clicked2?
                <div className='z-100' onClick={(e) => { e.stopPropagation(); setClicked2(!clicked2); }}>
                  <Image src={closeImg} alt='X' className='absolute right-[2%] top-[2%] z-12 cursor-pointer'></Image>

                </div>
                :''
                
              }
              <div className={`block md:flex gap-5 h-full w-full ${!clicked2? 'max-h-[450px]':''} overflow-hidden `}>
                
                <div className='w-full'>
                  <h1 className='mt-1 md:mt-0 text-xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text'>ResNet&apos;s Influence on Digital Marketing</h1>
                  <p className='mt-2 md:mt-3 text-justify lg:text-lg w-[100%]'>
                  Explore how ResNet revolutionized Invictus&apos;s digital marketing approach, addressing the need for a robust online presence. Our expertise crafted a visually stunning website, enhancing brand engagement and user experience.
                  </p>
                  <div className='lg:text-lg'>
                    <h2 className='mt-2 md:mt-3 text-left text-base lg:text-xl font-bold text-[#FF001D]'>Navigating Digital Challenges wuth Invictus</h2>
                    <ul className='mt-2 text-justify  w-[100%] list-disc pl-6'>
                      <li>Through ResNet&apos;s strategies, Invictus witnessed a significant increase in website traffic, improved brand perception, and higher conversion rates.</li>
                      <li className='md:block hidden '>Discover the impactful partnership that tackled the complexities of online visibility and brand perception.</li>
                      
                    </ul>

                    <h2 className='md:block hidden mt-2 md:mt-3 text-left text-base lg:text-xl font-bold text-[#FF001D]'>Achieving Digital Dominance</h2>
                    <ul className='md:block hidden mt-2 text-justify  w-[100%] list-disc pl-6'>
                      <li>ResNet&apos;s expertise propelled Invictus to digital dominance.</li>
                      
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div onClick={()=>cardClicked(3)} className={clicked3?' h-[70vh] w-full md:w-[40%]  lg:h-[600px]  rounded-xl absolute left-[75%] cursor-pointer card-clicked':`flip-card h-[350px] lg:h-[450px]  w-full md:w-[30%]  top-[90%] md:top-0 left-0 rounded-xl absolute md:left-[75%] cursor-pointer`}>
          <div className="flip-card-inner w-full rounded-xl">

            <div className="flip-card-front w-full rounded-xl" style={clicked3?{display:'none'}:{}}>
              <Image src={customer} alt='Documentation' className='w-full h-full rounded-xl object-cover'></Image>
              {/* <Image src={cardImg} alt='Card' className='w-full h-full rounded-xl object-cover'></Image> */}
            </div>
            <div className="flip-card-back rounded-xl" style={clicked3?{display:'block'}:{}}>
              {
                clicked3?
                <div className='z-100' onClick={(e) => { e.stopPropagation(); setClicked3(!clicked3); }}>
                  <Image src={closeImg} alt='X' className='absolute right-[2%] top-[2%] z-12 cursor-pointer'></Image>

                </div>
                :''
              }
              <div className={`block md:flex gap-5 h-full w-full ${!clicked3? 'max-h-[450px]':''} overflow-hidden `}>
                
                <div className='w-full'>
                  <h1 className='mt-1 md:mt-0 text-xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text'>Revolutionizing Customer Data Analysis</h1>
                  <p className='mt-1 md:mt-3 text-justify lg:text-lg w-[100%]'>
                  ResNet spearheaded a transformative shift in customer data analytics by introducing an AI-powered solution that automated data processing, extracted actionable insights, and delivered personalized recommendations.
                  </p>
                  <div className='lg:text-lg'>
                    <h2 className='mt-3 text-left text-base lg:text-xl font-bold text-[#FF001D]'>Strategic Implementation and Overcoming Challenges</h2>
                    <ul className='mt-2 text-justify  w-[100%] list-disc pl-6'>
                      <li>ResNet strategically executed the implementation of advanced analytics algorithms ensuring data privacy, and addressing skepticism.</li>
                      <li className='md:block hidden '>Marked a paradigm shift towards informed decision-making in customer data analytics.</li>
                      
                    </ul>

                    <h2 className='md:block hidden mt-3 text-left text-base lg:text-xl font-bold text-[#FF001D]'>Strategic Implementation</h2>
                    <ul className='md:block hidden mt-2 text-justify  w-[100%] list-disc pl-6'>
                      <li>The power of advanced analytics fosters unparalleled customer engagement </li>
                      
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        
        </div>
      </div>

    </div>
  )
}
