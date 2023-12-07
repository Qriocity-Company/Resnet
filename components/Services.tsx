'use client'

import React,{useEffect} from 'react'
import '../styles/Services.css'

import image1 from '../assets/services-image1.png'
import image2 from '../assets/services-image2.png'
import image3 from '../assets/services-image3.png'
import image4 from '../assets/services-image4.png'

import Image from 'next/image'
export const Services = () => {

  useEffect(() => {
    
    let index=3;
    
    setInterval(()=>{
      document.getElementById(`image${index}`)?.classList.remove('move-down');
      document.getElementById(`image${index}`)?.classList.remove('move-up');
      document.getElementById(`image${index}`)?.classList.remove('move-top-left');


      document.getElementById(`image${index}`)?.classList.add('move-mid-left');

      // setTimeout(()=>{
      //   document.getElementById(`image${index}`)?.classList.remove('move-mid-left');
      // },1000)
     
      index=(index+1)%4;
    },1000)
  },[])

  useEffect(()=>{
    let index2=2;
    setInterval(()=>{
      document.getElementById(`image${index2}`)?.classList.remove('move-mid-left');
        
        document.getElementById(`image${index2}`)?.classList.remove('move-up');
        document.getElementById(`image${index2}`)?.classList.remove('move-top-left');


      document.getElementById(`image${index2}`)?.classList.add('move-down');
      
      // setTimeout(()=>{
      //   document.getElementById(`image${index2}`)?.classList.remove('move-down');
      // },1000)
      index2=(index2+1)%4;
    },1000)
  },[])

  useEffect(()=>{
    let index3=1;
    setInterval(()=>{
      document.getElementById(`image${index3}`)?.classList.remove('move-mid-left');
        document.getElementById(`image${index3}`)?.classList.remove('move-down');
        
        document.getElementById(`image${index3}`)?.classList.remove('move-top-left');
      document.getElementById(`image${index3}`)?.classList.add('move-up');
      // setTimeout(()=>{
      //   document.getElementById(`image${index3}`)?.classList.remove('move-up');
      // },1000)
      index3=(index3+1)%4;
    },1000)
  },[])

  useEffect(()=>{
    let index4=0;
    setInterval(()=>{
      document.getElementById(`image${index4}`)?.classList.remove('move-mid-left');
        document.getElementById(`image${index4}`)?.classList.remove('move-down');
        document.getElementById(`image${index4}`)?.classList.remove('move-up');
      document.getElementById(`image${index4}`)?.classList.add('move-top-left');
      // setTimeout(()=>{
      //   document.getElementById(`image${index4}`)?.classList.remove('move-top-left');
      // },1000)

      index4=(index4+1)%4;
    },1000)
  },[])
  
  // useEffect(()=>{
  //   let index=3;
  //   let index2=2;
  //   let index3=1;
  //   let index4=0;

  //   setInterval(()=>{
  //     document.getElementById(`image${index}`)?.classList.add('move-mid-left');
  //     document.getElementById(`image${index2}`)?.classList.add('move-down');
  //     document.getElementById(`image${index3}`)?.classList.add('move-up');
  //     document.getElementById(`image${index4}`)?.classList.add('move-top-left');

  //     setTimeout(()=>{
  //       document.getElementById(`image${index}`)?.classList.remove('move-mid-left');
  //       document.getElementById(`image${index2}`)?.classList.remove('move-down');
  //       document.getElementById(`image${index3}`)?.classList.remove('move-up');
  //       document.getElementById(`image${index4}`)?.classList.remove('move-top-left');
  //     },1000)

  //     index=(index+1)%4;
  //     index2=(index2+1)%4;
  //     index3=(index3+1)%4;
  //     index4=(index4+1)%4;
  //   },1000)

  // })
  return (
    <div className='p-8 w-full mt-20'>
      <div>
        <h1 className='font-semibold text-5xl text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center'>What does Resnet Offer ?</h1>
        <div className='flex flex-col items-center mt-4'>
          <div>How we help you move through <span className='font-semibold text-red-500'>Machine Learning</span> and</div>
          <div className='font-semibold text-red-500'>
            Artificial Intelligence
          </div>
        </div>
      </div>
       
      <div className='relative flex w-full h-[140vh]'>

        <div className='left-slides w-[50%] relative'>

          {/* <div className='first-slide-y '>
            <div className='content-slide first-slide'>
              <h2>
                We Do the hardwork for you
              </h2>
              <p className=''>
              1st slide 1st slide 1st slide business with AI and ML? Contact us today for a consultation. Our team is eager to understand your unique challenges and design a tailor-made solution that propels your business into the future.vv
              </p>
            </div>
          </div> */}

          
          {/* <div className='content-slide middle-slide'>
            <h2>
              We Do the hardwork for you
            </h2>
            <p className=''>
            2nd slide 2nd slide 2nd slide businessor-made solution that propels your business into the future.vv
            </p>
          </div>
          
          <div className='content-slide bottom-left-slide animated-div'>
            <h2>
              We Do the hardwork for you
            </h2>
            <p className=''>
            3rd slide 3rd slide 3rd slide Ready to elevate your business with AI and ML? Contact us today for a consultation. Our team is eag
            </p>
          </div> */}


        </div>

        <div className='w-[50%] relative right-slides'>

          <div className='right-slide slide-top' id='image3'>
            <Image src={image1} alt='.' ></Image>
          </div>
          <div className='right-slide slide-left' id='image2'>
            <Image src={image2} alt='.' ></Image>
          </div>
          <div className='right-slide slide-bottom' id='image1'>
            <Image src={image3} alt='.' ></Image>
          </div>
          <div className='right-slide slide-right' id='image0'>
            <Image src={image4} alt='.' ></Image>
          </div>

        </div>


      </div>
    </div>
  )
}
