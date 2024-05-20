"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const URL = "https://crm-backend-o6sb.onrender.com";

const BlogHero = () => {
  const [blogs, setBlogs] = useState([]);
  const [allcategory ,setAllCategory] = useState([]);
  const[category, setCategory]= useState("");
  const[selection , setSelection] = useState("All");

  useEffect(() => {
    axios
      .get(`${URL}/blog/category/Ressent`)
      .then((res) => {
        console.log(res.data);
        setAllCategory(res.data);
      })
      .catch((err) => console.log(err));

      fetchAllBlogs();
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/blog/company/Ressent/${category}`)
      .then((res) => {
        console.log(res.data);
        if(res.data.length>=1)
          setBlogs(res.data);
        else
          toast.warning("No blogs Found");
      })
      .catch((err) => console.log(err));
  }, [category]);

  const fetchAllBlogs =()=>{
   
    axios.get(`${URL}/blog/company/Ressent`).then((res)=>{
      console.log(res.data);
      if(res.data.length>=1)
        setBlogs(res.data);
      else
        toast.warning("No blogs Found");
    }).catch((err)=> console.log(err));
  }


  return (
    <div className="w-full mx-auto max-w-[1440px] mt-[100px] mb-10 font-Poppins px-4 md:px-0 h-screen ">
    <div className=" self-start flex items-start flex-col">
      <h1 className="pb-1 font-bold md:text-5xl text-2xl md:mb-5 text-white ">
        Blogs
      </h1>
      <div className="flex flex-col items-center mt-2 text-white">
        <div>Uncover the Secrets: Journey into Our Blog</div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-start  mt-0 md:mt-10  z-10 ">
      <div className="md:flex-[0.25] flex flex-col justify-start mt-10 mb-10 md:mb-0 ">
        <h1 className="font-semibold text-3xl text-white pb-4 ">
          Categories
        </h1>
        <span
          className={
            selection != "All"
              ? "text-[20px] text-[#ff0000] mb-1 hover:text-white font-medium cursor-pointer"
              : "text-[20px] hover:text-[#ff0000]  mb-1 text-white font-medium cursor-pointer"
          }
          onClick={() => {
            fetchAllBlogs();
            setSelection("All");
          }}
        >
          All
        </span>
        {allcategory.map((m:any,i)=>{
          return (
            <span key={i}
          className={
            selection != m.category
              ? "text-[20px] text-[#ff0000] mb-1 hover:text-white font-medium cursor-pointer"
              : "text-[20px] hover:text-[#ff0000] mb-1 text-white font-medium cursor-pointer"
          }
          onClick={() => {
            setCategory(m._id);
            setSelection(m.category);
          }}
        >
          {m.category}
        </span>
          )
        })}
        
       
      </div>
      <div className="grid grid-flow-row grid-cols-1 flex-1 gap-10">
        {blogs.map((b:any, index) => {
          return (
            <Link
              key={index}
              href={{pathname:`/blog/singleBlog`, query:{id:b._id}}}
              className="flex flex-col px-8 justify-center items-start bg-opacity-5 drop-shadow-xl text-white bg-white min-h-[100px] shadow-[#ff0000] shadow-md w-full rounded-xl "
            >
              <h1 className="text-2xl font-bold mb-2">{b.title}</h1>
              <span className="text-[#ff0000]">Read More</span>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);
};

export default BlogHero;
