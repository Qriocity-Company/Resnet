"use client";

import React, { useState, useEffect } from "react";
import "@/styles/Hero.css";
import Image from "next/image";
import buttonPattern from "../assets/contact-btn-img.png";
import ContactUs from "./ContactUs";
export const Hero = () => {
  const [contactModal, setContactModal] = useState(false);

  const [showfinaldiv, setShowFinalDiv] = useState(false);
  const [b1, setB1] = useState(false);
  const [cn, setcn] = useState("one");

  useEffect(() => {
    setTimeout(() => {
      setShowFinalDiv(true);
    }, 4000);
  }, []);

  return (
    <div className="parent relative lg:h-[900px] lg:w-[1400px] md:w-[750px] w-[350px] md:h-screen h-screen flex justify-center items-center">
      <div className=" w-[300px] h-[400px] lg:w-[958px] lg:h-[958px] bg-[#FF0000]  bg-opacity-30 rounded-full blur-[300px] absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[60%] "></div>
      <div className="main2">
      <h1 className="w-[350px] md:w-[600px] lg:w-[941px]  text-center z-10 !opacity-100 bg-gradient-to-t from-slate-600 via-slate-300 to-white bg-clip-text text-transparent text-[24px] lg:text-[65px] font-bold font-Raleway lg:leading-[80px]">
      Empowering Innovation, Delivering Excellence{" "}
        </h1>
        <p className=" w-[350px] md:w-[672px] h-[100px] text-center !opacity-100  bg-gradient-to-t from-slate-600 via-slate-300 to-white bg-clip-text text-transparent text-12px lg:text-2xl font-medium font-['Poppins']">
        ResNet - Your Premier Partner for Software, App Development, UI/UX Design, AI/ML Solutions, and Landing Page Development{" "}
        </p>
      </div>

      {showfinaldiv ? (
        <div className="absolute left-[50%]  -translate-x-[50%] bottom-10 btn-animation ">
          <div className=" relative group z-[500] h-[150px] w-[280px] justify-between items-center flex">
            <Image
              src={buttonPattern}
              alt="Resnet Solutions"
              className="group-hover:scale-[.8] ease-in-out duration-700 h-[100px] z-[20]"
              width={300}
            />
            <button
              className=" absolute top-1/2 left-1/2  text-[#FF001D]  px-4 py-[8px] bg-[#08081B] border-2 border-[#FF001D] group-hover:bg-[#FF001D] group-hover:text-white ease-in-out duration-500 z-[1000] cursor-pointer"
              style={{ transform: "translate(-50% , -50%)" }}
              onClick={() => {
                setContactModal(true);
                document.body.style.overflow = "hidden";
              }}
            >
              Contact Us
            </button>
          
          </div>
        </div>
      ) : (
        ""
      )}
        {contactModal && <ContactUs setContactModal={setContactModal}/> }
    </div>
  );
};
