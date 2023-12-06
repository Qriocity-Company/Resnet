import React from "react";
import "@/styles/Hero.css";
import Image from "next/image";
import buttonPattern from '../assets/button-pattern.png'
export const Hero = () => {
  return (
    <div className="relative mt-16 w-full ">
      <div className=" w-[958px] h-[958px] bg-[#FF0000]  bg-opacity-30 rounded-full blur-[300px] absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[60%] "></div>
      <main className="main h-[80vh] ">
        <h1 className="w-[941px] h-[295px] text-center z-10 mt-20 text-white text-[65px] font-bold font-Raleway">
          Artificial Intelligence & Machine Learning Consulting Services{" "}
        </h1>
        <p className="w-[672px] h-[83px] text-center text-neutral-400 text-2xl font-medium font-['Poppins']">
          Transforming Possibilities into Realities: Elevate Your Future with
          Our AI & ML Consulting Excellence
        </p>
        <div className=" relative group z-[999]">
          <Image
            src={buttonPattern}
            alt="Resnet Solutions"
            className="group-hover:scale-[.8] ease-in-out duration-700 h-[60px]"
            width={250}
          />
          <button
            className=" absolute top-1/2 left-1/2  text-[#FF001D]  px-4 py-[8px] bg-[#08081B] border-2 border-[#FF001D] group-hover:bg-[#FF001D] group-hover:text-white ease-in-out duration-500"
            style={{ transform: "translate(-50% , -50%)" }}
          >
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
};
