'use client'

import React, { useEffect } from "react";
import CtaButton from "./CtaButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div data-aos="fade-up" className="text-center px-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#7A6960] mb-4">
          Elevate Your Digital Presence
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Expert digital marketing, web development, and software solutions tailored to your business needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <CtaButton name="Get Started" />
          </a>
          <a href="/services">
            <button className="bg-transparent border-2 border-red-600 text-[#7A6960] px-8 py-2 rounded-3xl hover:bg-red-50 transition">
              Explore Services
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
