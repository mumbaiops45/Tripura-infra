"use client";

import React, { useState, useRef, useEffect } from "react"; // ✅ add useEffect
import { motion, useAnimation, useMotionValue } from "framer-motion";

// Card Component
// Card Component
const Card = ({ heading, image, bottomText }) => {
  return (
    <div className="relative min-w-[260px] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent shadow-lg rounded-lg overflow-hidden">
      <h3 className="text-lg font-bold p-4">{heading}</h3>

      <img src={image} alt={heading} className="w-full h-60 object-cover" />

      {/* Bottom RIGHT clipped text */}
      <div
        className="absolute bottom-0 right-0 bg-[var(--primary)]/60 text-white p-1 text-right"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        {bottomText}
      </div>
    </div>
  );
};

// Carousel


const ClipPathCarousel = ({ cards }) => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const startAnimation = () => {
    const width = containerRef.current.scrollWidth / 2;

    controls.start({
      x: [0, -width], // ✅ animate from 0 to -width
      transition: {
        duration: 15,
        ease: "linear",
        // ❌ removed repeat: Infinity
      },
    });
  };

  // ✅ Start on mount
  useEffect(() => {
    startAnimation();
  }, []);

  const handleHover = () => {
    controls.stop();
  };

  const handleLeave = () => {
    const currentX = x.get();
    const width = containerRef.current.scrollWidth / 2;

    controls.start({
      x: -width,
      transition: {
        duration: Math.abs(width + currentX) / 50,
        ease: "linear",
      },
    });
  };

  return (
    <div
      className="overflow-hidden w-full py-10"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <motion.div
        ref={containerRef}
        className="flex gap-6"
        animate={controls}
        style={{ x }}
        onAnimationComplete={startAnimation} // ✅ now safely loops
      >
        {[...cards, ...cards].map((card, index) => (
          <Card key={index} heading={card.heading} image={card.image} bottomText={card.text} />
        ))}
      </motion.div>
    </div>
  );
};

export default ClipPathCarousel;