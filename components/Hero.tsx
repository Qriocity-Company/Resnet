import React from "react";
import "@/styles/Hero.css";
export const Hero = () => {
  return (
    <div className="relative mt-20 w-full ">
      <div className=" w-[958px] h-[958px] bg-[#FF0000] z-10 bg-opacity-30 rounded-full blur-[300px] absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[60%] "></div>
      <main className="main h-[80vh]">
        <h1>Hello world </h1>
      </main>
    </div>
  );
};
 