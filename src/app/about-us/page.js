"use client";
import React from 'react'
import Image from 'next/image'
import ServicesLayout from '@/components/About/Services'
import { motion } from "framer-motion";
import WhyChooseSection from '@/components/About/feature';

const About = () => {
  return (
    <div className=' '>
        <h1 className="text-center pb-15 py-16 bg-gradient-to-br from-white via-[var(--primary)]/10 to-white">
          <span className="text-[var(--primary)]"> About </span>Us
        </h1>

      <section className=" bg-white md:px-15 px-6">

      
        <div className="max-w-7xl  grid md:grid-cols-2 gap-10 items-center py-20">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/about.jpg"
              alt="About Tripura Infra"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="inline-block mb-6 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent text-2xl md:text-3xl font-semibold">
              Building Dreams with Trust, Precision & Innovation
            </h2>
            <p>
              At <strong>Tripura Infra Developers</strong>, we believe every <strong>dream</strong> deserves a <strong>solid foundation</strong>. With over <strong>20 years of experience</strong> in <strong>construction</strong> and <strong>real estate</strong>, we have earned a reputation as one of Hyderabad’s most reliable and forward-thinking developers. Our journey began with a vision to transform the way people experience construction. Combining <strong>engineering excellence</strong>, <strong>modern design</strong>, and <strong>customer-centric values</strong>, we create <strong>homes</strong> and <strong>commercial spaces</strong> that go beyond walls and ceilings — delivering <strong>comfort</strong>, <strong>safety</strong>, and <strong>long-term value</strong>. Our team of highly qualified <strong>engineers</strong>, <strong>architects</strong>, and <strong>planners</strong> are not just professionals — they are <strong>visionaries</strong> and <strong>problem-solvers</strong>, bringing <strong>creativity</strong> and <strong>technical precision</strong> to every project.
            </p>
          </div>

        </div>
      </section>
      <ServicesLayout />
      <WhyChooseSection />

    </div>
  )
}

export default About