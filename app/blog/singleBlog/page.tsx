"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";

const page = () => {
  const URL = "https://crm-backend-o6sb.onrender.com";
  const router = useSearchParams();
  // Access state data passed from the previous page
  const title: any = router.get("name");
  const url: any = router.get("url");
  const category = router.get("category");
  const decription = router.get("desc");
  const caption = router.get("caption");
  const dates: any = router.get("date");
  return (
    <div>
      <main className=" w-full flex flex-col justify-center items-center max-w-[350px] md:max-w-[760px] lg:max-w-[1440px] font-Poppins">
        <Navbar />

        <div className="mt-[100px] mb-10 w-[100%]  md:w-[90%] mx-auto ">
          <div className="md:hidden max-w-md mx-auto mt-4 p-4">
            <img
              src={`${URL}/${url}`}
              alt={title}
              className="mb-4 w-full  rounded-lg"
            />

            <h2 className="text-2xl font-bold mb-2 text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text ">
              {title}
            </h2>
            <p className="text-white mb-2">{caption}</p>
            <span className="text-center text-white text-sm font-medium">
              {new Date(dates).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <p className="text-white ">{decription}</p>
          </div>
          <div className=" p-5 flex-col  md:flex hidden gap-10 ">
            <h2 className="font-bold text-2xl md:text-5xl text-transparent bg-gradient-to-r from-[#FF001D] from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center ">
              {title}
            </h2>
            <p className="text-white  text-center italic mb-3">{caption}</p>
            <img
              src={`${URL}/${url}`}
              alt={title}
              className="mb-4  max-h-[500px] self-center rounded-lg"
            />

            <div className="flex flex-col gap-5">
              <p className="text-white text-lg ">{decription}</p>

              <p className="text-white">
                Date :{" "}
                <span className="italic">
                  {" "}
                  {new Date(dates).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
