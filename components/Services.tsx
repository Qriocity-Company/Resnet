"use client";

import React, { useEffect } from "react";
import "../styles/Services.css";

import image1 from "../assets/s1.jpg";
import image2 from "../assets/s2.jpg";
import image3 from "../assets/s3.jpg";
import image4 from "../assets/s4.jpg";
import image5 from "../assets/s5.png";
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
    <div id="services" className=" relative flex flex-col justify-center mt-20 px-10 max-w-[350px] md:max-w-[750px] lg:max-w-[1440px] overflow-hidden">
      <div className="absolute  w-[755px] h-64 bg-[#ff001d] rounded-full blur-[250px]  -left-[20%] top-[25%]"></div>
      <div className="absolute -z-10  w-[555px] h-64 bg-sky-600 rounded-full blur-[160px]  left-[90%] bottom-[25%]"></div>
      <div className="mb-12">
        <h1 className="font-semibold text-5xl text-transparent bg-gradient-to-r from-red-700 from-40% via-purple-800 via-60% to-blue-700 to-100% bg-clip-text text-center">
          What does Resnet Offer ?
        </h1>
        <div className="flex flex-col items-center mt-4">
          <div>
            How we help you move through{" "}
            <span className="font-semibold text-[#FF001D]">
              Machine Learning
            </span>{" "}
            and
          </div>
          <div className="font-semibold text-[#FF001D]">
            Artificial Intelligence
          </div>
        </div>
      </div>
      <section className="flex flex-col md:flex-row">
        <div className="container">
          <div className="parent-circle">
            <h2 className="child text-3xl font-bold text-cetner absolute top-[8%] left-[50%] translate-x-[-50%]">
              Software Development
            </h2>
            <h3 className="child absolute top-[30%] left-[50%] translate-x-[-50%]">
              Crafting Code, Building Dreams
            </h3>
            <Image
              alt="User Experience"
              src={image1}
              className="image w-[170px] aspect-square"
              width={270}
              height={270}
            />
            <p className="service-details child absolute top-[44%] left-[50%] translate-x-[-50%]">
              <span>
                At ResNet, our expert developers transform your ideas into
                powerful, scalable software solutions. From concept to
                deployment, we&apos;re your partners in code
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">Software Development</h4>

          <p className="subheading">Crafting Code, Building Dreams</p>
        </div>

        <div className="container">
          <div className="parent-circle">
            <h2 className="child text-3xl font-bold text-cetner absolute top-[8%] left-[50%] translate-x-[-50%]">
              App Development
            </h2>
            <h3 className="child absolute top-[30%] left-[50%] translate-x-[-50%]">
              Apps That Amaze, Solutions That Succeed
            </h3>
            <Image
              alt="User Experience"
              src={image2}
              className="image w-[170px] aspect-square"
              width={200}
              height={200}
            />
            <p className="service-details child absolute top-[44%] left-[50%] translate-x-[-50%]">
              <span>
                Stay ahead with ResNet&apos;s cutting-edge app development
                services. Our iOS and Android apps blend innovation with
                user-friendly design.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">App Development</h4>

          <p className="subheading">Apps That Amaze, Solutions That Succeed</p>
        </div>

        <div className="container">
          <div className="parent-circle">
            <h2 className="child text-3xl font-bold text-cetner absolute top-[12%] left-[50%] translate-x-[-50%]">
              UI/UX Design
            </h2>
            <h3 className="child absolute top-[30%] left-[50%] translate-x-[-50%]">
              Design that Delights, Interfaces that Inspire
            </h3>
            <Image
              alt="User Experience"
              src={image3}
              className="image w-[170px] aspect-square "
              width={200}
              height={200}
            />
            <p className="service-details child absolute top-[44%] left-[50%] translate-x-[-50%]">
              <span>
                Elevate your digital presence with ResNet&apos;s UI/UX design
                expertise. We create visually stunning interfaces for an
                exceptional user experience.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">UI/UX Design</h4>

          <p className="subheading">
            Design that Delights, Interfaces that Inspire
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row">
        <div className="container">
          <div className="parent-circle">
            <h2 className="child text-3xl font-bold text-cetner absolute top-[8%] left-[50%] translate-x-[-50%]">
              AI/ML Solutions
            </h2>
            <h3 className="child absolute top-[30%] left-[50%] translate-x-[-50%]">
              Smart Solutions, Data-Driven Success
            </h3>
            <Image
              alt="User Experience"
              src={image4}
              className="image w-[170px] aspect-square "
              width={150}
              height={150}
            />
            <p className="service-details child absolute top-[44%] left-[50%] translate-x-[-50%]">
              <span>
                Unlock the potential of AI and machine learning with ResNet. Our
                intelligent solutions enhance efficiency, automate processes,
                and provide valuable insights.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">AI/ML Solutions</h4>

          <p className="subheading">Smart Solutions, Data-Driven Success</p>
        </div>

        <div className="container">
          <div className="parent-circle">
            <h2 className="child text-3xl font-bold text-cetner absolute top-[8%] left-[50%] translate-x-[-50%]">
              Landing Page Development
            </h2>
            <h3 className="child absolute top-[35%] left-[50%] translate-x-[-50%]">
              Captivate, Convert, Succeed
            </h3>
            <Image
              alt="User Experience"
              src={image5}
              className="image w-[170px] aspect-square"
              width={200}
              height={200}
            />
            <p className="service-details child absolute top-[45%] left-[50%] translate-x-[-50%]">
              <span>
                Elevate engagement and conversions with ResNet&apos;s
                captivating landing pages. Our design and development expertise
                ensures a lasting impression.
              </span>{" "}
            </p>
          </div>

          <h4 className="main-tag">Landing Page Development</h4>

          <p className="subheading">Captivate, Convert, Succeed</p>
        </div>
      </section>
    </div>
  );
};
