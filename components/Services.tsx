"use client";

import React, { useEffect } from "react";
import "../styles/Services.css";

import image1 from "../assets/s1.jpg";
import image2 from "../assets/s2.jpg";
import image3 from "../assets/s3.jpg";
import image4 from "../assets/s4.jpg";

import Image from "next/image";
export const Services = () => {
  // return (
  //   <div className='p-8 w-full mt-20 relative h-[140vh]'>
  //     <div>
  //       <h1 className='font-semibold text-5xl text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center'>What does Resnet Offer ?</h1>
  //       <div className='flex flex-col items-center mt-4'>
  //         <div>How we help you move through <span className='font-semibold text-red-500'>Machine Learning</span> and</div>
  //         <div className='font-semibold text-red-500'>
  //           Artificial Intelligence
  //         </div>
  //       </div>
  //     </div>

  //     <div className='left-0 absolute top-[-5%] flex gap-24 w-full h-[140vh] overflow-hidden'>

  //       <div className='left-slides w-[50%] relative'>

  //         <div className='content-slide c-slide-top'>
  //           <h2>
  //             We Do the hardwork for you
  //           </h2>
  //           <p className=''>
  //           1st slide 1st slide 1st slide business with AI and ML? Contact us today for a consultation. Our team is eager to understand your unique challenges and design a tailor-made solution that propels your business into the future.vv
  //           </p>
  //         </div>

  //         <div className='content-slide c-slide-right'>
  //           <h2>
  //             We Do the hardwork for you
  //           </h2>
  //           <p className=''>
  //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, excepturi a iste omnis accusamus quia illo illum molestias aliquid voluptate sapiente possimus nemo ipsum distinctio minima delectus. Cupiditate illum dolor qui error!
  //           </p>
  //         </div>

  //         <div className='content-slide c-slide-bottom'>
  //           <h2>
  //             We Do the hardwork for you
  //           </h2>
  //           <p className=''>
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus dolorum est ipsum architecto ut eum aut eaque voluptatibus assumenda velit recusandae nostrum nam quisquam distinctio tempore laboriosam magni, sint obcaecati repudiandae error!
  //           </p>
  //         </div>
  //         <div className='content-slide c-slide-left'>
  //           <h2>
  //             We Do the hardwork for you
  //           </h2>
  //           <p className=''>
  //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, dignissimos voluptatibus voluptates temporibus illo harum est praesentium. Minus accusantium reiciendis similique molestias fugit, dolore quia dignissimos quis et consectetur blanditiis ea.
  //           </p>
  //         </div>

  //       </div>

  //       <div className='w-[50%] relative right-slides'>

  //         <div className='right-slide slide-top'>
  //           <Image src={image1} alt='.' ></Image>
  //         </div>
  //         <div className='right-slide slide-left'>
  //           <Image src={image2} alt='.' ></Image>
  //         </div>
  //         <div className='right-slide slide-bottom'>
  //           <Image src={image3} alt='.' ></Image>
  //         </div>
  //         <div className='right-slide slide-right'>
  //           <Image src={image4} alt='.' ></Image>
  //         </div>

  //       </div>

  //     </div>
  //   </div>
  // )
  return (
    <div className="flex flex-col justify-center">
      <section>
        <div className="container">
          <div className="parent-circle">
            <h2 className="child">User Experience</h2>
            <h3 className="child">We are all users</h3>
            <Image
              alt="User Experience"
              src={image1}
              className="image w-[170px] aspect-square"
              width={270}
              height={270}
            />
            <p className="service-details child">
              <span>
                With over 200 digital projects and counting, we get what users
                want and need pretty easily. UX is the core to everything we
                build. In Codigo, we take user research, competitive analysis,
                wireframes, user flows, content maps very seriously.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">User Experience</h4>

          <p className="main-tag">How users interact</p>
        </div>

        <div className="container">
          <div className="parent-circle">
            <h2 className="child">User Experience</h2>
            <h3 className="child">We are all users</h3>
            <Image
              alt="User Experience"
              src={image2}
              className="image w-[170px] aspect-square"
              width={200}
              height={200}
            />
            <p className="service-details child">
              <span>
                With over 200 digital projects and counting, we get what users
                want and need pretty easily. UX is the core to everything we
                build. In Codigo, we take user research, competitive analysis,
                wireframes, user flows, content maps very seriously.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">User Experience</h4>

          <p className="main-tag">How users interact</p>
        </div>

        <div className="container">
          <div className="parent-circle">
            <h2 className="child">User Experience</h2>
            <h3 className="child">We are all users</h3>
            <Image
              alt="User Experience"
              src={image3}
              className="image w-[170px] aspect-square "
              width={200}
              height={200}
            />
            <p className="service-details child">
              <span>
                With over 200 digital projects and counting, we get what users
                want and need pretty easily. UX is the core to everything we
                build. In Codigo, we take user research, competitive analysis,
                wireframes, user flows, content maps very seriously.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">User Experience</h4>

          <p className="main-tag">How users interact</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="parent-circle">
            <h2 className="child">User Experience</h2>
            <h3 className="child">We are all users</h3>
            <Image
              alt="User Experience"
              src={image4}
              className="image"
              width={150}
              height={150}
            />
            <p className="service-details child">
              <span>
                With over 200 digital projects and counting, we get what users
                want and need pretty easily. UX is the core to everything we
                build. In Codigo, we take user research, competitive analysis,
                wireframes, user flows, content maps very seriously.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">User Experience</h4>

          <p className="main-tag">How users interact</p>
        </div>

        <div className="container">
          <div className="parent-circle">
            <h2 className="child">User Experience</h2>
            <h3 className="child">We are all users</h3>
            <Image
              alt="User Experience"
              src={image4}
              className="image"
              width={150}
              height={150}
            />
            <p className="service-details child">
              <span>
                With over 200 digital projects and counting, we get what users
                want and need pretty easily. UX is the core to everything we
                build. In Codigo, we take user research, competitive analysis,
                wireframes, user flows, content maps very seriously.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">User Experience</h4>

          <p className="main-tag">How users interact</p>
        </div>
      </section>
    </div>
  );
};
