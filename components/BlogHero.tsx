"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const BlogHero = () => {
  const URL = "https://crm-backend-o6sb.onrender.com";

  const [data, setData] = useState("");
  const [blogs, setBlogs] = useState([]);
  const[category, setCategory]= useState("Ressent");

  useEffect(() => {
    axios
      .get(`${URL}/blog/company/${category}`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/blog/company/${category}`)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="w-full font-Poppins">
      <div className="mt-20 self-start flex items-start flex-col">
        <h1 className="pb-1 font-semibold text-3xl text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center">
          Blogs
        </h1>
        <div className="flex flex-col items-center mt-2">
          <div>Uncover the Secrets: Journey into Our Blog</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start w-full mt-0 md:mt-10  z-10 ">
        <div className="md:flex-[3] flex flex-col justify-start mt-10 mb-10 md:mb-0 ">
          <h1 className="font-semibold text-3xl text-white pb-4 ">
            Categories
          </h1>
          <span className={category !='Ressent'?"text-[20px] text-[#FF001D] mb-1 hover:text-blue-700 font-medium cursor-pointer" : "text-[20px] hover:text-[#FF001D] mb-1 text-blue-700 font-medium cursor-pointer"} onClick={()=>{setCategory("Ressent")}}>All</span>
          <span className={category !='software-development'?"text-[20px] text-[#FF001D] mb-1 hover:text-blue-700 font-medium cursor-pointer" : "text-[20px] hover:text-[#FF001D] mb-1 text-blue-700 font-medium cursor-pointer"}  onClick={()=>{setCategory("software-development")}}>Software Development</span>
          <span className={category !='app-development'?"text-[20px] text-[#FF001D] mb-1 hover:text-blue-700 font-medium cursor-pointer" : "text-[20px] hover:text-[#FF001D] mb-1 text-blue-700 font-medium cursor-pointer"}  onClick={()=>{setCategory("app-development")}}>App Development</span>
          <span className={category !='ui-ux'?"text-[20px] text-[#FF001D] mb-1 hover:text-blue-700 font-medium cursor-pointer" : "text-[20px] hover:text-[#FF001D] mb-1 text-blue-700 font-medium cursor-pointer"} onClick={()=>{setCategory("ui-ux")}}>UI/UX Design</span>
          <span className={category !='ai-ml'?"text-[20px] text-[#FF001D] mb-1 hover:text-blue-700 font-medium cursor-pointer" : "text-[20px] hover:text-[#FF001D] mb-1 text-blue-700 font-medium cursor-pointer"} onClick={()=>{setCategory("ai-ml")}}>AI/ML Solutions</span>
          <span className={category !='landing-page'?"text-[20px] text-[#FF001D] mb-1 hover:text-blue-700 font-medium cursor-pointer" : "text-[20px] hover:text-[#FF001D] mb-1 text-blue-700 font-medium cursor-pointer"}  onClick={()=>{setCategory("landing-page")}}>Landing Page Development</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:flex-[7] gap-4">
          {blogs.map((b: any, index) => {
            return (
              <Link
                key={index}
                href={{pathname:`/blog/singleBlog`, query: { name: b.title , url:b.imageURL ,category:b.category ,desc:b.description, date:b.createdAt, caption:b.caption}}}
                className="flex flex-col gap-3 justify-start items-start mb-2"
              >
                <img
                  src={`${URL}/${b.imageURL}`}
                  alt={b.title}
                  className="image w-[350px]  h-[250px] rounded-[10px]"
                  width={480}
                  height={300}
                />
                <div className="bg-[#ff001e2d] border border-[#ff001d] rounded-[14px] py-1 px-3 text-[#ff001d]">
                  {b.category}
                </div>
                <h2 className="text-white text-lg font-semibold ">{b.title}</h2>
                <span className="text-center text-white text-sm font-medium">
                {new Date(b.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                </span>

              </Link>
            );
          })}
        </div>
      </div>
      <div className="absolute  w-[755px] h-64 bg-[#ff001d] rounded-full blur-[250px]  left-[30%] -top-[35%]"></div>
      <div className="sticky -z-10  w-[555px] h-64 bg-sky-600 rounded-full blur-[160px]  left-[90%] -bottom-[25%]"></div>
    </div>
  );
};

export default BlogHero;
