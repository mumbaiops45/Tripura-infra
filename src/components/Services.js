"use client";

import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    id: "01",
    title: "Residential",
    slug: "residential",
    items: [
      { name: "Home", img: "/home.webp", slug: "home" },
      { name: "Luxury villas", img: "/Luxury villas.webp", slug: "luxury-villas" },
      { name: "Residential Appartments", img: "/Residential Appartments.webp", slug: "residential-appartments" },
      { name: "Row Houses", img: "/Row Houses.webp", slug: "row-houses" },
    ],
  },
  {
    id: "02",
    title: "Commercial Construction",
    slug: "commercial-construction",
    items: [
      { name: "High-Rise Towers", img: "/High-Rise Towers.webp", slug: "high-rise-towers" },
      { name: "Retail Spaces", img: "/Retail Spaces.webp", slug: "retail-spaces" },
      { name: "Hospital Construction", img: "/Hospital Construction.webp", slug: "hospital-construction" },
      { name: "P.G. Hostels", img: "/P.G. Hostels.webp", slug: "pg-hostels" },
    ],
  },
  {
    id: "03",
    title: "Industrial Construction",
    slug: "industrial-construction",
    items: [
      { name: "Industrial Civil Works", img: "/Industrial Civil Works.webp", slug: "industrial-civil-works" },
      { name: "PEB Sheds", img: "/PEB Sheds.webp", slug: "peb-sheds" },
      { name: "Warehouses", img: "/Warehouses.webp", slug: "warehouses" },
      { name: "Banquet Halls", img: "/Banquet Halls.webp", slug: "banquet-halls" },
    ],
  },
  {
    id: "04",
    title: "Interior Solution",
    slug: "interior-solution",
    items: [
      { name: "Residential Interiors", img: "/Residential Interiors.webp", slug: "residential-interiors" },
      { name: "Commercial Interiors", img: "/Commercial Interiors.webp", slug: "commercial-interiors" },
    ],
  },
  {
    id: "05",
    title: "Project Management",
    slug: "project-management",
    items: [
      { name: "Project Management", img: "/Project Management.webp", slug: "project-management" },
    ],
  },
  {
    id: "06",
    title: "Renovation & Extension Work",
    slug: "renovation-extension-work",
    items: [
      { name: "Extension Work", img: "/Extension Work.webp", slug: "extension-work" },
    ],
  },
];

const Services = () => {
    return (
        <section id="services" className="py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                
                <h2 className="inline-block mb-10 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent">
                    Our
                    <span className="text-[var(--primary)]"> Services </span>
                </h2>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {servicesData.map((service, index) => (
                        <div key={index} className="shadow-md p-6 rounded-2xl">

                            {/* Card Heading */}
                            <h3 className="mb-4 text-[var(--primary)]">
                                {service.title}
                            </h3>

                            {/* Items */}
                            <div className="flex flex-col gap-4">
                                {service.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">

                                        {/* Image */}
                                        <div className="relative w-[50px] h-[50px]">
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                fill
                                                className="object-fit rounded-md"
                                            />
                                        </div>

                                        {/* Text */}
                                        <span>{item.name}</span>

                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <Link
  href={`/services/${service.slug}`}
  className="primary-btn mt-6 px-8 py-2 rounded-lg inline-block"
>
 Know More
</Link>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;