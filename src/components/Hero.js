"use client";

import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    video: "/CONTRUCTION.mp4",
    tag: "Construction",
    title: "Building Strong Foundations",
    description: "We deliver high-quality construction solutions.",
    poster:"/poster.png",
    button: "Explore",
  },
  {
    id: 2,
    video: "/COMMERCIAL.mp4",
    tag: "Commercial",
    title: "Modern Commercial Spaces",
    description: "We build spaces for business growth.",
     poster:"/poster.png",
    button: "View Projects",
  },
  {
    id: 3,
    video: "/HOME.mp4",
    tag: "Residential",
    title: "Your Dream Home",
    description: "We create beautiful living spaces.",
     poster:"/poster.png",
    button: "Get Quote",
  },
];

// duplicate first slide
const extendedSlides = [...slides, slides[0]];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const videoRefs = useRef([]);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const handleVisibility = () => {
    if (document.hidden) {
      videoRefs.current[current]?.pause();
    } else {
      videoRefs.current[current]?.play().catch(() => {});
    }
  };

  document.addEventListener("visibilitychange", handleVisibility);
  return () => document.removeEventListener("visibilitychange", handleVisibility);
}, [current]);

  // Reset loop
  useEffect(() => {
    if (current === slides.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, 700);
    } else {
      setTransition(true);
    }
  }, [current]);

  // 🔥 CONTROL VIDEO PLAY
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

  return (
    <section className="relative w-full h-[60vh] md:h-[65vh] xl:h-[500px] overflow-hidden">

      <div
        className={`flex h-full ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-full">

            {/* ✅ Video FIX */}
          <video
  ref={(el) => (videoRefs.current[index] = el)}
 src={index === current ? slide.video : undefined}
  muted
  loop
  playsInline
  preload="none"  
    poster={slide.poster}  // ✅ IMPORTANT
  className="w-full h-full object-cover"
/>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-6 md:px-16">
              <div className="max-w-xl text-white">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  {slide.tag}
                </span>

                <h1 className="mt-6 text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>

                <p className="mt-4 text-gray-200">
                  {slide.description}
                </p>

                <button className="mt-6 primary-btn px-6 py-3 rounded-xl">
                  {slide.button}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer rounded-full bg-white transition-all ${
              current % slides.length === index
                ? "w-8 h-2"
                : "w-2 h-2 opacity-60"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;