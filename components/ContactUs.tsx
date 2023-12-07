"use client";
import { sendEmail } from "@/actions/sendMail";
import React from 'react'
import '../styles/ContactUs.css'

import Image from 'next/image'
import close from '../assets/x-circle-fill.svg'
import locationIcon from '../assets/location-icon.svg'
import callIcon from '../assets/call-icon.svg'

import { FaFacebook ,FaInstagram ,FaLinkedin} from "react-icons/fa";

interface ContactUsProps{
    setContactModal:React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactUs: React.FC<ContactUsProps> = ({setContactModal}) => {
    async function onSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData.get("senderEmail"));
        const { data, error } = await sendEmail(formData);
        if (error) {
          alert(error);
          return;
        }
      }
  return (
    <div className='modal-outer fixed top-0 left-0 md:h-[100vh] w-[100vw] z-20 flex justify-center md:items-center'>
        
        <div className='modal-inner p-5 block md:flex w-[90%] md:w-[80%] relative md:mt-0 mt-8'>
            <Image src={close} width={20} alt='X' className='absolute right-[5%] md:left-[2%] top-[3%] md:top-[4%] cursor-pointer z-30' onClick={()=>{setContactModal(false); document.body.style.overflow="auto"}}></Image>
            
            <div className='w-[100%] md:w-[50%] pb-12 md:p-10 relative'>
                <h1 className='text-white text-xl md:text-4xl font-semibold'>Get In Touch</h1>
                <p className='text-base md:text-xl mt-4'>Reach Out to Us. We can make something awesome together</p>

                <div className='w-[100%] md:w-[50%] flex flex-col gap-4 mt-8 my-16 md:mt-16 '>
                    <div className='flex gap-6 items-center'>
                    <Image src={locationIcon} height={22} alt='Location' className='h-[22px]'></Image>
                    <p>
                    123, Gopal Street,
                    Mylapore, Chennai - 600004,
                    Tamil Nadu, India.
                    </p>
                    </div>
                    <div className='flex gap-6 items-center'>
                    <Image src={callIcon} alt='Location' height={22} className='h-[22px]'></Image>
                    <p>
                        (+91)-234-234-4321
                    </p>
                    </div>
                </div>

                <div className='flex gap-8 absolute bottom-[10%] md:bottom-[5%]'>
                    <a href="" className='cursor-pointer'>
                        
                        <FaInstagram className='text-[#FF001D] text-4xl hover:text-white hover:scale-150 transition-all'/>
                    </a>
                    <a href="" className='cursor-pointer'>
                        <FaFacebook className='text-[#FF001D] text-4xl hover:text-white hover:scale-150 transition-all'/>
                    </a>
                    <a href="" className='cursor-pointer'>
                        <FaLinkedin className='text-[#FF001D] text-4xl hover:text-white hover:scale-150 transition-all'/>
                       
                    </a>
                </div>
            </div>
            <div className='w-[100%] md:w-[50%] border-2 border-[#FF001D] p-4'>

                <form onSubmit={onSubmit} className='flex flex-col gap-5 md:gap-6  bg-[#08081B] p-4 md:p-12 text-white'>

                    <div className='form-component '>
                        <input type="text" name='name' required placeholder=' '/>
                        <label htmlFor="name">Full Name</label>
                    </div>
                    <div className='form-component'>
                        <input type="email" name='senderEmail' required placeholder=' '/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='form-component'>
                        <input type="number" name='Phonenumber' required placeholder=' '/>
                        <label htmlFor="number">Phone Number</label>
                    </div>
                    <div className='form-component'>
                        <textarea name='message' required placeholder=' ' rows={6}/>
                        <label htmlFor="message">Message</label>
                    </div>

                    <div>
                        <button type="submit" className="hover:text-[#FF001D] hover:scale-110 hover:font-semibold hover:bg-white transition-all bg-[#FF001D] text-white py-[0.6rem] px-[1rem]">Send Message &gt;</button>
                    </div>
                </form>

            </div>

        </div>

    </div>
  )
}

export default ContactUs