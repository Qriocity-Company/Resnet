"use client";
import { sendEmail } from "@/actions/sendMail";
import React from 'react'
import '../styles/ContactUs.css'

import ContactTexture from '../assets/contact-us-texture.png'
import ContactBackground from '../assets/contactbg.png'
import Image from 'next/image'
import close from '../assets/x-circle-fill.svg'

import name from '../assets/name.svg'
import email from '../assets/email.svg'
import phone from '../assets/phone.svg'

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
    <div className='modal-outer fixed top-0 left-0 h-[100vh] w-[100vw] z-10 flex justify-center items-center'>
        
        <div className='modal-inner relative rounded-[30px] w-[90%] md:w-auto  h-[50vh] md:h-auto'>
            <Image src={ContactBackground} alt="" className="z-20 md:h-auto h-[50vh]"></Image>
            <Image src={ContactTexture} alt="" className="absolute top-0 left-0 z-10 md:h-auto h-[50vh]"></Image>
            <Image src={close} height={20} alt="X" className="absolute right-[5%] top-[7%] z-50 cursor-pointer h-[20px]" onClick={()=>{setContactModal(false); document.body.style.overflow="auto"}}></Image>
            <form className="form-container z-30 absolute left-0 top-0 h-full w-full flex flex-col gap-2 justify-center items-center" onSubmit={onSubmit}>
              <h2 className="text-xl md:text-4xl font-semibold ">Reach Out to Us</h2>

              <div className="form-component w-[70%] flex items-center gap-2">
                <Image src={name} alt='Name' height={40} className="h-[20px] md:h-[40px]"></Image>
                <input type="text" name="name" placeholder="Your Name" className="bg-transparent border-b-white border-b-2 p-2 mb-2 outline-none w-full md:text-base text-sm" />
              </div>
              <div className="form-component w-[70%] flex items-center gap-2">
                <Image src={email} alt='Email' height={40} className="h-[20px] md:h-[40px]"></Image>
                <input type="email" name="senderEmail" placeholder="Your Email" className="bg-transparent border-b-white border-b-2 p-2 mb-2 outline-none w-full md:text-base text-sm"/>
              </div>
              <div className="form-component w-[70%] flex items-center gap-2">
                <Image src={phone} alt='Name' height={40} className="h-[20px] md:h-[40px]"></Image>
                <input type="number" name="Phonenumber" placeholder="Your Phone Number" className="bg-transparent border-b-white border-b-2 p-2 mb-2 outline-none w-full md:text-base text-sm"/>
              </div>
              <div className="form-component w-[70%] flex items-center gap-2">
                
                <textarea name="message" placeholder="Message" className="bg-transparent border-b-white border-b-2 p-2 mb-2 outline-none w-full resize-none md:text-base text-sm" />
              </div>
              <div className="mt-0 md:mt-4">
                <button type="submit" className="hover:text-[#FF001D] hover:scale-110 hover:font-semibold hover:bg-white transition-all bg-[#FF001D] text-white py-[8px] px-[14px] md:py-[0.6rem] md:px-[1rem] flex items-center rounded-3xl text-sm md:text-base">Send Message &gt;</button>
              </div>
            </form>
        </div>

    </div>
  )
}

export default ContactUs