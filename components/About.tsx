"use client";
import React,{useState} from "react";
import "@/styles/About.css";
import Image from "next/image";
import buttonPattern from "../assets/contact-btn-img.png";
import AboutImage from "../assets/groupimgAbout.png"
import ContactUs from "./ContactUs";

export const About:React.FC = () => {
  
  const [contactModal,setContactModal] = useState(false)

  return (
    <div id="about" className="my-8 flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto">
      <div className="max-w-xl w-full text-red-500">
        <Image src={AboutImage} alt="About" width={700} height={700} className="h-[300px] md:h-[500px] w-[600px] object-cover"/>
      </div>
      <div className="max-w-2xl">
        <div className="text-[34px] lg:text-[65px] font-[700] w-full ">
          <span className="">We Make Your </span><br/>
          <div className="flex h-[50px] md:h-[98px] overflow-hidden ease-in-out ">
            <p className="w-fit lg:text-[65px] font-[700]">Business</p>
            <div className=" mt-0 font-semibold  text-transparent bg-gradient-to-r from-[#FF001D]  from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text  ps-3">
                <span className="wordspins  block" >Thrive</span>
                <span className="wordspins block">Flourish</span>
                <span className="wordspins block">Scale 10x</span>
            </div>
         </div>
        </div>
        <div className=" mt-10 md:mt-0 text-[16px] md:text-[24px]">
        Elevate your business with our AI/ML automation services - Software Solutions. Experience 10x growth, seamless scalability, and thriving operations. Let us reshape your future where innovation meets efficiency, and success knows no bounds.
        </div>

        <div className="mt-5 relative w-fit group left-[50%] translate-x-[-50%]">
          <Image
            src={buttonPattern}
            alt="Resnet Solutions"
            className="group-hover:scale-[.8] ease-in-out duration-700"
            width={250}
          />
          <button
            className=" absolute top-1/2 left-1/2  text-[#FF001D]   px-4 py-[10px] bg-[#08081B] border-2 border-[#FF001D] group-hover:bg-[#FF001D] group-hover:text-white ease-in-out duration-500"
            style={{ transform: "translate(-50% , -50%)" }}
            onClick={()=>{setContactModal(true); document.body.style.overflow="hidden"}}
          >
            Contact Us
          </button>
        
        </div>
      </div>

      { contactModal && <ContactUs setContactModal={setContactModal}/>}
    </div>
  );
};
