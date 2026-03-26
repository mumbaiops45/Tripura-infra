"use client";

import Image from "next/image";

const servicesData = [
    {
        id: "01",
        title: "Residential",
        items: [
            { name: "Home", img: "/home.webp" },
            { name: "Luxury villas", img: "/Luxury villas.webp" },
            { name: "Residential Appartments", img: "/Residential Appartments.webp" },
            { name: "Row Houses", img: "/Row Houses.webp" },
        ],
    },
    {
        id: "02",
        title: "Commercial Construction",
        items: [
            { name: "High-Rise Towers", img: "/High-Rise Towers.webp" },
            { name: "Retail Spaces", img: "/Retail Spaces.webp" },
            { name: "Hospital Construction", img: "/Hospital Construction.webp" },
            { name: "P.G. Hostels", img: "/P.G. Hostels.webp" },
        ],
    },
    {
        id: "03",
        title: "Industrial Construction",
        items: [
            { name: "Industrial Civil Works", img: "/Industrial Civil Works.webp" },
            { name: "PEB Sheds", img: "/PEB Sheds.webp" },
            { name: "Warehouses", img: "/Warehouses.webp" },
            { name: "Banquet Halls", img: "/Banquet Halls.webp" },
        ],
    },
    {
        id: "04",
        title: "Interior Solution",
        items: [
            { name: "Residential Interiors", img: "/Residential Interiors.webp" },
            { name: "Commercial Interiors", img: "/Commercial Interiors.webp" },
        ],
    },
    {
        id: "05",
        title: "Project Management",
        items: [
            { name: "Project Management", img: "/Project Management.webp" },
        ],
    },
    {
        id: "06",
        title: "Renovation & Extension Work",
        items: [
            { name: "Extension Work", img: "/Extension Work.webp" },
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
                            <button className="primary-btn mt-6 px-8 py-2 rounded-lg">
                                Know More
                            </button>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;