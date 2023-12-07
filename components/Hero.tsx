"use client";

import React, { useState, useEffect } from "react";
import "@/styles/Hero.css";
import Image from "next/image";
import buttonPattern from "../assets/contact-btn-img.png";
import ContactUs from "./ContactUs";
export const Hero = () => {
  const [contactModal,setContactModal] = useState(false)

  const [showfinaldiv, setShowFinalDiv] = useState(false);
  const [b1, setB1] = useState(false);
  const [cn ,setcn] =useState("one")

  useEffect(() => {
    setTimeout(() => {
      setShowFinalDiv(true)
    }, 3000);
  }, []);

  return showfinaldiv ? (
    <div className="relative mt-16 w-full ">
      <div className=" w-[300px] h-[400px] lg:w-[958px] lg:h-[958px] bg-[#FF0000]  bg-opacity-30 rounded-full blur-[300px] absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[60%] "></div>
      <main className="main lg:h-[80vh] h-[50vh]">
        <h1 className="w-[350px] md:w-[600px] lg:w-[941px]  text-center z-10 mt-20  bg-gradient-to-t from-slate-600 via-slate-300 to-white bg-clip-text text-transparent text-[24px] lg:text-[65px] font-bold font-Raleway lg:leading-[80px]">
          Artificial Intelligence & Machine Learning Consulting Services{" "}
        </h1>
        <p className=" w-[350px] md:w-[672px] h-[83px] text-center bg-gradient-to-t from-slate-600 via-slate-300 to-white bg-clip-text text-transparent text-12px lg:text-2xl font-medium font-['Poppins']">
          Transforming Possibilities into Realities: Elevate Your Future with
          Our AI & ML Consulting Excellence
        </p>
      </main>

      <div className="absolute left-[50%] bottom-10 -translate-x-[50%] ">
        <div className=" relative group z-[999] h-[150px] w-[280px] justify-between items-center flex">
          <Image
            src={buttonPattern}
            alt="Resnet Solutions"
            className="group-hover:scale-[.8] ease-in-out duration-700 h-[100px]"
            width={300}
          />
          <button
            className=" absolute top-1/2 left-1/2  text-[#FF001D]  px-4 py-[8px] bg-[#08081B] border-2 border-[#FF001D] group-hover:bg-[#FF001D] group-hover:text-white ease-in-out duration-500"
            style={{ transform: "translate(-50% , -50%)" }}
            onClick={()=>{setContactModal(true); document.body.style.overflow="hidden"}} 
          >
            Contact Us
          </button>
        </div>
      </div>
      { contactModal && <ContactUs setContactModal={setContactModal}/>}
    </div>
  ) : (
    <div className="relative mt-16 w-full ">
      <div className=" w-[958px] h-[958px] bg-[#FF0000]  bg-opacity-30 rounded-full blur-[300px] absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[60%] "></div>
      <main className="mainball h-[80vh] ">
        <div className={cn}></div>
      </main>
    </div>
  );
};
