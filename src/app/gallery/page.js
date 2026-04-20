'use client'

import React, { useEffect, useState, useRef } from "react";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause } from "lucide-react";

const images = [
  "/images/g1.jpeg",
  "/images/g2.jpeg",
  "/images/g3.jpeg",
  "/images/g4.jpeg",
  "/images/g5.jfif",
  "/images/g5.jpeg",
  "/images/g6.jpeg",
  "/images/g7.jpeg",
  "/images/g8.jpeg",
  "/images/g9.jpeg",
  "/images/g10.jpeg",
];

const videos = [
  "/v1.mp4",
  "/v2.mp4",
  "/v3.mp4",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleVideoPlayPause = (index) => {
    const videoElement = videoRefs.current[index];
    if (!videoElement) return;

    if (playingVideo === index) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      // Pause currently playing video if any
      if (playingVideo !== null && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo].pause();
      }
      videoElement.play();
      setPlayingVideo(index);
    }
  };

  return (
    <div className="secondary-font overflow-x-hidden bg-white selection:bg-red-50 selection:text-red-600 relative">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center text-white py-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Our <span className="text-red-600">Gallery</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto opacity-90">
            Explore our premium collection of moments and work. A visual journey through our achievements and culture.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Photo <span className="text-red-600">Gallery</span></h2>
            <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-flow-dense gap-4 lg:gap-6 auto-rows-[250px]">
            {images.map((src, idx) => {
              // Create bento grid classes based on index to mix large, wide, tall, and small items
              let bentoClass = "col-span-1 row-span-1"; // default small square
              
              if (idx === 0 || idx === 8) bentoClass = "sm:col-span-2 sm:row-span-2"; // Large square
              else if (idx === 1 || idx === 6) bentoClass = "sm:col-span-2 row-span-1"; // Wide
              else if (idx === 4) bentoClass = "col-span-1 sm:row-span-2"; // Tall
              
              return (
              <div 
                key={idx} 
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${bentoClass}`}
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 100}
                onClick={() => setSelectedImage(src)}
              >
                <Image 
                  src={src} 
                  alt={`Gallery Image ${idx + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 transform">
                    <span className="bg-red-600 px-6 py-2 rounded-full inline-block font-medium tracking-wide">View</span>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Video <span className="text-red-600">Showcase</span></h2>
            <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 lg:gap-10">
            {videos.map((src, idx) => (
              <div 
                key={idx} 
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group bg-black w-[280px] h-[500px] lg:w-[320px] lg:h-[570px] flex-shrink-0"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <video
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[idx] = el;
                    }
                  }}
                  src={src}
                  className={`w-full h-full object-cover transition-all duration-500 ${playingVideo === idx ? 'opacity-100 scale-100' : 'opacity-80 scale-105 group-hover:opacity-90'}`}
                  loop
                  playsInline
                  onEnded={() => setPlayingVideo(null)}
                />
                
                {/* Overlay Gradient for Reel aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button 
                    onClick={() => handleVideoPlayPause(idx)}
                    className={`pointer-events-auto w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl ${playingVideo === idx ? 'bg-black/20 text-white/30 opacity-0 group-hover:opacity-100' : 'bg-red-600/90 text-white hover:bg-red-700 scale-110'}`}
                  >
                    {playingVideo === idx ? (
                      <Pause className="w-10 h-10 fill-current" />
                    ) : (
                      <Play className="w-10 h-10 fill-current ml-2" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-red-600 p-2 rounded-full transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video lg:aspect-auto lg:h-[85vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Selected Gallery Image" 
                fill 
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
