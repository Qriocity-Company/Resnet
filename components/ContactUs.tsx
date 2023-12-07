"use client";
import { sendEmail } from "@/actions/sendMail";
import React from 'react'
import '../styles/ContactUs.css'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import Image from 'next/image'
import close from '../assets/x-circle-fill.svg'
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
    <div className='modal-outer fixed top-0 left-0 h-[100vh] w-[100vw] z-20 flex justify-center items-center'>
        
        <div className='modal-inner p-5 block md:flex w-[90%] md:w-[80%] relative'>
            <Image src={close} width={20} alt='X' className='absolute right-[5%] md:left-[2%] top-[4%] cursor-pointer z-30' onClick={()=>{setContactModal(false); document.body.style.overflow="auto"}}></Image>
            
            <div className='w-[100%] md:w-[50%] pb-12 md:p-10 relative'>
                <h1 className='text-white text-xl md:text-4xl font-semibold'>Get In Touch</h1>
                <p className='text-base md:text-xl mt-4'>Reach Out to Us. We can make something awesome together</p>

                <div className='flex gap-8 absolute bottom-[10%] md:bottom-[5%]'>
                    <a href="" className='cursor-pointer'>
                        <Image src={insta} alt='Insta'></Image>
                    </a>
                    <a href="" className='cursor-pointer'>
                        <Image src={fb} alt='Facebook'></Image>
                    </a>
                    <a href="" className='cursor-pointer'>
                        <Image src={linkedin} alt='Linkedin'></Image>
                    </a>
                </div>
            </div>
            <div className='w-[100%] md:w-[50%] border-2 border-[#5967E7] p-4'>

                <form onSubmit={onSubmit} className='flex flex-col gap-5 md:gap-6  bg-white p-4 md:p-12 text-[#08081B]'>

                    <div className='form-component'>
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
                </form>

            </div>

        </div>

    </div>
  )
}

export default ContactUs