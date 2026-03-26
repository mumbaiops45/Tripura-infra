"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 👇 Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
            <h2 className="inline-block mb-10 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent">
            About  
            <span className="text-[var(--primary)]"> Tripura Infra </span>Developers
          </h2>
       

          <p className="leading-relaxed">
            At <strong>Tripura Infra Developers</strong>, we believe that every dream deserves a solid foundation — a home built with <strong>trust</strong>, <strong>precision</strong>, and <strong>innovation</strong>. With over <strong>20 years of experience</strong> in the construction and real estate industry, we’ve earned our reputation as one of the most <strong>reliable</strong> and <strong>forward-thinking developers</strong> in Hyderabad.
            <br /><br />
            Our journey began with a simple vision: to transform the way people experience construction. Over the years, we have combined <strong>engineering excellence</strong>, <strong>modern design</strong>, and <strong>customer-centric values</strong> to create homes and commercial spaces that go beyond just walls and ceilings — they embody <strong>comfort</strong>, <strong>safety</strong>, and <strong>long-term value</strong>.
            <br /><br />
            Our team of highly qualified engineers, architects, and planners are more than just professionals — they are <strong>visionaries</strong> and <strong>problem-solvers</strong> who bring creativity and technical precision to every project.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className={`relative w-full h-[350px] md:h-[380px] transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <Image
            src="/about.jpg" // 👈 replace with your image
            alt="About Tripura Infra Developers"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default About;