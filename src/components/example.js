"use client";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChoose";
import Infrastructure from "@/components/HomeInfrastructure";
import OurPartners from "@/components/OurPartners";
import { motion } from "framer-motion";
import FAQSection from "@/components/FAQ";
const timeline = [
  {
    year: "01",
    title: "CAST BELTS AND SPARES",
    description:
      "Manufacturing high-performance cast link belts and spares designed for durability, heat resistance, and reliable operation in demanding industrial environments.",
    // features: [
    //   "CAST LINK BELTS"
    // ],
    image: "/home/manufacturing.png"
  },
  {
    year: "02",
    title: "HEAT TREATMENT FIXTURES",
    description:
      "Comprehensive range of heat treatment fixtures engineered for strength, dimensional stability, and long service life in high-temperature furnace applications.",
    // features: [
    //   "BASE GRIDS",
    //   "STACKABLE GRIDS",
    //   "CHARGING FIXTURES",
    //   "BASKETS",
    //   "MESHES",
    //   "FIXTURES FOR PIT FURNACE / GCF",
    //   "FURNACE FURNITURE / ACCESSORIES",
    //   "FURNACE RAIL AND ROLLERS",
    //   "PUSHER HEADS AND CHAIN GUIDE",
    //   "JOB PEDESTALS / FURNACE PIERS",
    //   "WALKING BEAMS SPARES",
    //   "SHAKER HEARTH PLATES"
    // ],
    image: "/home/HEAT TREATMENT FIXTURES.png"
  },
  {
    year: "03",
    title: "PARTS FOR FOOD MACHINERIES",
    description:
      "Precision-cast components for food processing equipment ensuring hygiene standards, corrosion resistance, and consistent performance.",
    // features: [
    //   "Mixing Blades",
    //   "PD Pump Parts"
    // ],
    image: "/home/PARTS FOR FOOD MACHINERIES.png"
  },
  {
    year: "04",
    title: "ROLLERS AND RADIANT TUBES",
    description:
      "High-temperature resistant rollers and radiant tube assemblies designed for efficient heat transfer and reliable furnace operations.",
    // features: [
    //   "FURNACE ROLLS",
    //   "RADIANT TUBE ASSEMBLIES",
    //   "RECUPERATOR TUBE ASSEMBLIES",
    //   "RIDER BARS"
    // ],
    image: "/home/ROLLERS AND RADIANT TUBES.png"
  },
  {
    year: "05",
    title: "SEPARATORS AND DECANTERS",
    description:
      "Robust cast components for separator and decanter systems ensuring operational efficiency, durability, and resistance to harsh industrial conditions.",
    // features: [
    //   "SEPARATORS"
    // ],
    image: "/home/SEPARATORS AND DECANTERS.jpg"
  },
  {
    year: "06",
    title: "GALVANIZING LINE SPARES",
    description:
      "Specialized cast spares for galvanizing lines built to withstand corrosive environments and continuous high-temperature operations.",
    // features: [
    //   "GALAVNIZING"
    // ],
    image: "/home/SEPARATORS AND DECANTERS.jpg"
  },
  {
    year: "07",
    title: "PETROCHEMICAL INDUSTRY",
    description:
      "Precision-engineered castings and spares tailored for petrochemical industry applications requiring heat resistance and structural integrity.",
    // features: [
    //   "SPARES FOR PETROCHEMICAL INDUSTRY"
    // ],
    image: "/home/PETROCHEMICAL INDUSTRY.jpg"
  },
  {
    year: "08",
    title: "CEMENT INDUSTRY",
    description:
      "Durable industrial cast components developed for heavy-duty cement plant operations with high wear resistance and thermal stability.",
    // features: [
    //   "SPARES FOR CEMENT INDUSTRY"
    // ],
    image: "/home/CEMENT INDUSTRY.jpg"
  }
];
const industries = [
  {
    title: "STEEL INDUSTRY / GALVANIZING LINES",
    description:
      "SAJJAN manufactures centrifugal and static cast components for steel mills and furnaces in heat- and corrosion-resistant grades."
  },
  {
    title: "CEMENT INDUSTRY",
    description:
      "High-quality cast components designed for durability and reliable performance in large-scale cement production."
  },
  {
    title: "PUMPS / VALVES & IMPELLORS",
    description:
      "Precision stainless steel castings with advanced heat treatment and non-destructive testing."
  },
  {
    title: "FOOD TECHNOLOGY",
    description:
      "Ultra-clean stainless steel castings using advanced CAD, de-gassing technology, and CNC machining."
  },
  {
    title: "PETROCHEMICAL INDUSTRY",
    description:
      "High-performance castings engineered for demanding petrochemical environments."
  }
];
const certifications = [
  {
    title: "ISO 9001:2015",
    description: `SAJJAN is accredited as an ISO 9001:2015 certified organization. This certification implies that SAJJAN has met strict guidelines with regard to product design processes, manufacturing procedures, distribution systems, and customer service methods for all products and services that SAJJAN provides.`
  },
  {
    title: "ISO 14001",
    description: `SAJJAN has gained ISO 14001:2015 certification for environmental management.`
  },
  {
    title: "OHSAS 18001",
    description: `SAJJAN has implemented the OHSAS 18001 system and the organization is working towards a structured and streamlined procedure to maintain health and safety standards.`
  },
  {
    title: "ISO 45001: 2018",
    description: `SAJJAN has upgraded to the ISO 45001: 2018 certification, world’s first integrated international standard for occupational health and safety. This is a new industry standard, the framework of which has been coordinated and developed by a committee of occupational health and safety experts from around the world. SAJJAN reinstated its health, safety and environmental committee and took a collaborative approach in reviewing all aspects of the company to ensure that the company is providing a safe and secure working environment.`
  }
];
const activities = [
  {
    title: "88th Annual Function Celebration at Sajjan Precision Castings",
    date: "13 April",
    image: "/home/Annual Function.jpg",
    link: "#"
  },
  {
    title: "Diet and Health Awareness Program",
    date: "10 September",
    image: "/home/Health Awareness.jpg",
    link: "#"
  },
  {
    title: "Tree Plantation Drive",
    date: "10 September",
    image: "/home/Tree Plantation.jpg",
    link: "#"
  },
  {
    title: "Awarded with Star Performance in Engineering Exports North India",
    date: "10 September",
    image: "/home/Awarded.jpg",
    link: "#"
  }
];



export default function Home() {
  return (
    <>
      <section className={`relative w-full py-15 md:py-0 h-auto md:h-screen overflow-hidden ${styles.hero}`}>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 block md:hidden">
          <img
            src="/home/hero-video-poster.png"
            alt="Steel manufacturing background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/home/hero.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 max-w-5xl mx-auto">
          <h1 className="mb-6">
            Forging Strength. Shaping the Future.
          </h1>

          <p className="mb-8 max-w-2xl">
            Delivering high-quality steel solutions engineered for durability,
            precision, and performance across modern industries.
          </p>

          <a href="/contact-us" className="primary-btn">
            Get Started
          </a>
        </div>

      </section>
      <section className="w-full py-6 lg:p-15 px-4
  flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-3/5 space-y-6">

          <h2 className="relative inline-block pb-4
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent">

            <span className="text-[var(--primary)]">
              SAJJAN
            </span>{" "}
            A Pioneer in <strong>Heat-Resistant & Precision Castings</strong> Since 1935

          </h2>

          <p>
            Sajjan Castings Limited is a pioneer in
            <strong> heat-resistant tool steel and stainless steel castings</strong>,
            manufactured through <strong>centrifugal, static and investment casting processes</strong>.
            Established in 1935, the Sajjan Group has grown into a globally trusted manufacturer
            serving customers in <strong>23 countries</strong>.
          </p>

          <p>
            With <strong>state-of-the-art facilities</strong>, strong
            <strong> in-house design capabilities</strong> and a skilled workforce,
            we produce precision castings including
            <strong> radiant tubes, walking beams, furnaces</strong> and
            specialized industrial components. Our products meet
            <strong> ASTM, DIN and ARE standards</strong> and are backed by
            <strong> ISO 9001:2015, ISO 14001:2015 and OHSAS 18001:2007 certifications</strong>.
          </p>

          <p>
            Driven by decades of expertise and a commitment to quality,
            <strong> Sajjan Castings</strong> remains one of the most reputed names
            in precision castings worldwide.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link href="/about" className="primary-btn">
              About Us
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-2/5">

          <div className="relative w-full h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
            <Image
              src="/home/industrial-heat-resistant-steel-castings-manufacturer.png"
              alt="industrial-heat-resistant-steel-castings-manufacturer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </section>
      <section className="py-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="relative inline-block pb-4
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent mb-4">
              Our <span className="text-[var(--primary)]">Products</span>
            </h2>
            <p className=" text-gray-300 max-w-3xl mx-auto">
              SAJJAN is a pioneer in manufacturing heat-resistant tool steel and stainless steel castings through centrifugal, static, and investment casting processes.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-10">

            <div
              className="
      grid gap-6
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
    "
            >

              {timeline.map((item, index) => {

                return (
                  <div
                    key={index}
                    className="relative group [perspective:1000px]"
                  >
                    <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                      {/* FRONT */}
                      <div
                        className="relative h-full w-full bg-white/10 backdrop-blur-md p-6 rounded-2xl
              after:content-[''] 
              after:absolute 
              after:top-0 
              after:left-0
              after:right-0
              after:h-2
              after:rounded-t-2xl
              after:bg-gradient-to-r 
              after:from-[var(--primary)]
              after:to-[var(--secondary)]
              [backface-visibility:hidden]"
                      >
                        <div className={`inline-block px-3 py-1 rounded-full mb-3 text-xs ${item.color}`}>
                          {item.year}
                        </div>

                        <h3 className="text-lg font-semibold mb-2 text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-300 mb-4">
                          {item.description}
                        </p>

                        {/* <div className="space-y-1">
                          {item.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-[var(--secondary)] text-xs">•</span>
                              <span className="text-xs text-gray-400">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div> */}
                      </div>

                      {/* BACK */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <Image
                          src={item.image || "/images/sample.jpg"}
                          alt={item.title}
                          fill
                          className="object-fill"
                        />
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              And this is just the beginning...
            </p>
            <Link
              href="/products"
              className="primary-btn px-8 py-3 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Our Product
            </Link>
          </div>
        </div>
      </section>
      {/* iertification */}
      <motion.section
        className="Certified relative py-16
  bg-gradient-to-br 
  from-[var(--primary)]/50 
  via-[var(--secondary)]/10 
  to-[var(--primary)]/50 overflow-hidden"

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 3, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="relative inline-block pb-4
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-0
        after:w-full
        after:h-1
        after:rounded-full
        after:bg-gradient-to-r
        after:from-[var(--primary)]
        after:to-transparent">
              We
              <span className="text-[var(--primary)]"> are Certified</span>
            </h2>
            <p className=" text-gray-300 max-w-3xl mx-auto">
              SAJJAN is a pioneer in manufacturing heat-resistant tool steel and stainless steel castings through centrifugal, static, and investment casting processes.
            </p>
          </div>

          {/* Certification Blocks */}
          <div className="grid grid-cols-1 gap-8 mt-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl 
      border-l-4 border-[var(--primary)] shadow-md"

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Flex container */}
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full 
          bg-[var(--primary)]/10 
          flex items-center justify-center">
                    <ShieldCheck
                      size={26}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[var(--primary)] font-semibold mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-700">
                      {cert.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      <WhyChooseUs />
      <Infrastructure />
      <section className="industry"
      >
        <div className="flex justify-center"><h2
          className="relative inline-block pb-4
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent"
        >
          <span className="text-[var(--primary)]">Industries </span>We Serve
        </h2></div>


        {industries.map((item, index) => (
          <section
            key={index}
            className="flex flex-col md:flex-row items-center justify-start gap-6 px-4 md:px-10 lg:px-15 py-10 my-15 md:my-0 relative"
          >
            {/* heading */}
            <div
              className="
        w-full md:w-5/12 pt-5 pb-15 px-6 md:py-20 md:px-20
        bg-white/5 backdrop-blur-lg
        border border-[var(--primary)]
        rounded-xl shadow-lg
        transition duration-300
        flex items-start md:items-center justify-center"
            >
              <h3
                className=" relative inline-block pb-4
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent"
              >
                {item.title}
              </h3>
            </div>
            {/* slide para */}

            <div
              className="
        md:w-1/2 w-[80vw] 
    md:absolute md:left-85 lg:left-120 absolute top-35 md:top-auto 
    bg-[var(--secondary)]/70 backdrop-blur-lg
    border border-white/35
    rounded-xl p-6 md:p-8 shadow-lg
    hover:border-[var(--secondary)]
    transition duration-300 hover:translate-y-1
    animate-slideInRight40
    flex flex-col items-end justify-center"
            >
              <p>{item.description}</p>
              <Link href="/industries">
                <button className="flex  items-center gap-2 secondary-btn">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </Link>


            </div>

          </section>
        ))}
      </section>
      <OurPartners />
      <section className="Activities py-15 px-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* ===== SECTION HEADING ===== */}
          <div className="flex items-center justify-between mb-14">
            <h2 className=" text-white">
              Activities
            </h2>
          </div>

          {/* ===== CARD GRID ===== */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {activities.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10  transition duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 text-xs text-white rounded-full">
                    {item.date}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 bg-white/5 backdrop-blur-md">
                  <h3 className="leading-snug">
                    {item.title}
                  </h3>

                  <Link
                    href={item.link}
                    className="inline-block mt-4 text-sm text-gray-400 group-hover:text-white transition"
                  >
                    Read More →
                  </Link>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
       {/* <FAQSection className="" /> */}
      {/* ================= CTA SECTION ================= */}
      <section className="CTA relative py-24 bg-gradient-to-br from-[var(--secondary)]/40 via-black/10 to-[var(--primary)]/30 ">

        {/* Glow Effect */}


        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            Ready to Power Your Project with
            <span className="text-[var(--primary)]"> SAJJAN?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Partner with SAJJAN for high-performance stainless steel and alloy steel
            casting solutions engineered for durability, efficiency, and industrial excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <Link className="" href="/contact-us">
              <button className="flex justify-between items-center gap-2 primary-btn">
                Request a Quote
                <ArrowRight size={18} />
              </button>
            </Link>

            <Link href="/products">
              <button className="flex justify-between items-center gap-2 secondary-btn">
                Our Products
              </button>
            </Link>

          </div>
        </div>
      </section>




    </>


  );
}