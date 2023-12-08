"use client";
import { sendEmail } from "@/actions/sendMail";
import React from 'react'
import '../styles/ContactUs.css'

import ContactImg from '../assets/contact-us.png'
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
        
        <div className='modal-inner p-5 block md:flex w-[90%] md:w-[40%] relative md:mt-0 mt-8'>
            <Image src={close} width={20} alt='X' className='absolute right-[3%] top-[2%] cursor-pointer z-30' onClick={()=>{setContactModal(false); document.body.style.overflow="auto"}}></Image>
            <Image src={ContactImg} alt="." className="absolute z-20 top-0 left-0" ></Image>
            <div className='w-[100%] md:w-[100%] p-4 mt-8 z-30'>

                <form onSubmit={onSubmit} className='flex flex-col gap-5 md:gap-4 p-4 md:p-6'>

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