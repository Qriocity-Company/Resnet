"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = "https://crm-backend-o6sb.onrender.com";

interface Blog {
  _id: string;
  title: string;
  content: string;
  company: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Page = (props: any) => {
  const id = props.searchParams.id;
  const [blog, setBlog] = useState<Blog>({
    _id: "",
    title: "",
    content: "",
    company: "",
    category: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });

  const fetchAllBlogs = () => {
    axios
      .get(`${URL}/blog/company/Ressent`)
      .then((res) => {
        console.log(res.data);
        if (res.data.length >= 1) {
          const foundBlog = res.data.find((blog: any) => blog._id === id);
          if (foundBlog) {
            setBlog(foundBlog);
          } else {
            toast.warning("Blog not found");
          }
        } else {
          toast.warning("No blogs Found");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="mt-20 mb-10 w-5/6 mx-auto min-h-screen justify-center flex  flex-col items-center">
      <Navbar/>
      <div className="w-full mx-auto mt-4 p-4 border border-[#ff4000] rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default Page;
