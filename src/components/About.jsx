'use client'

import React, { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import { BsPeople } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [show, setShow] = useState(false);

  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    if (video) {
      video.currentTime = 0;
      video.load();
      setShow(true);
    }
  };

  const clickHandler = () => {
    const video = document.querySelector("#video");
    if (video) {
      video.pause();
      setShow(false);
    }
  };

  return (
    <div className="relative lg:mx-30">
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7A6960]"
      >
        ABOUT US.
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-red-600 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-12 secondary-font">
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full md:w-3/4 py-8 lg:py-12 px-6 md:px-0"
        >
          <Image 
            src="/assets/about.jpg" 
            alt="About Rankmantra" 
            width={800} 
            height={600} 
            className="w-full h-auto rounded-2xl shadow-2xl" 
          />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-6 md:p-0">
          <div data-aos="fade-left">
            <p className="text-base lg:text-lg mt-5 text-gray-600 primary-font leading-relaxed">
              RankMantra offers a range of services, including expert SEO, SMM, PPC, and web development. We help businesses enhance their online presence, drive traffic, and boost conversions through tailored strategies and cutting-edge technology, ensuring measurable growth and success.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-8"
          >
            <div
              className="bg-red-600 w-fit p-3 lg:p-4 rounded-xl shadow-lg shadow-red-600/20 text-white"
            >
              <BsPeople size={"24px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-lg lg:text-xl font-bold">
                Expert Mentorship:
              </h2>
              <p className="text-sm lg:text-base text-gray-500 primary-font mt-1">
                Personalized guidance from industry professionals to help you achieve your learning goals.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-6"
          >
            <div
              className="bg-red-600 w-fit p-3 lg:p-4 rounded-xl shadow-lg shadow-red-600/20 text-white"
            >
              <BsPeople size={"24px"} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-lg lg:text-xl font-bold">
                Skill Development:
              </h2>
              <p className="text-sm lg:text-base text-gray-500 primary-font mt-1">
                Focus on real-world skills that enhance your career prospects.
              </p>
            </div>
          </div>

          <p
            data-aos="zoom-in"
            className="text-base lg:text-lg mt-8 text-gray-600 primary-font italic leading-relaxed"
          >
            Our tailored strategies have consistently driven increased online visibility, enhanced brand engagement, and significant growth in traffic and conversions, delivering measurable success for our clients.
          </p>
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-6 mt-10">
            <a href="#contact">
              <CtaButton name={"Get Started"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
