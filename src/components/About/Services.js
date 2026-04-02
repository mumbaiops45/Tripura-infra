"use client";

import Image from "next/image";
import { useState } from "react";

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
    items: [{ name: "Project Management", img: "/Project Management.webp" }],
  },
  {
    id: "06",
    title: "Renovation & Extension Work",
    items: [{ name: "Extension Work", img: "/Extension Work.webp" }],
  },
];

const ServicesLayout = () => {
  const [Active, setActive] = useState("Residential");

  const activeService = servicesData.find(
    (service) => service.title === Active
  );

  return (
    <section className="py-16 px-6 md:px-15 bg-gradient-to-b from-[var(--primary)]/5 to-transparent">

      {/* HEADING */}
      <h2 className="inline-block mb-10 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent">
        Our <span className="text-[var(--primary)]">Services</span>
      </h2>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">

        {/* LEFT SIDEBAR */}
        <div className="flex flex-col gap-4">
          {servicesData.map((service) => (
            <>
            <div
              key={service.id}
              onClick={() => setActive(service.title)}
              className={`cursor-pointer border rounded-xl p-4 transition ${Active === service.title
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "bg-white border-gray-200 hover:shadow-md"
                }`}
            >
              <h3 className="font-semibold text-sm md:text-base">
                {service.title}
              </h3>
              
              
            </div>
            <div>
                {Active === service.title && (
                <div className="md:hidden">
                  {activeService && (
                    <>
                      {/* TITLE */}
                      <h2 className="hidden text-xl md:text-2xl font-semibold text-[var(--primary)] border-l-4 border-[var(--primary)] pl-4 mb-6">
                        {activeService.title}
                      </h2>

                      {/* ITEMS GRID */}
                      <div className="grid grid-cols-1 gap-6">
                        {activeService.items.map((subItem, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center gap-4 md:gap-3 border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
                          >
                            {/* IMAGE */}
                            <div className="relative w-full h-52 rounded-lg overflow-hidden shrink-0">
                              <Image
                                src={subItem.img}
                                alt={subItem.name}
                                fill
                                className="object-cover"
                              />
                            </div>

                            {/* TEXT */}
                            <p className="text-sm md:text-base font-medium text-gray-700">
                              {subItem.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
              </div>
            </>
            
            
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="hidden md:block">
          {activeService && (
            <>
              {/* TITLE */}
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--primary)] border-l-4 border-[var(--primary)] pl-4 mb-6">
                {activeService.title}
              </h2>

              {/* ITEMS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeService.items.map((subItem, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-4 md:gap-3 border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
                  >
                    {/* IMAGE */}
                    <div className="relative w-16 h-16 md:w-full md:h-52 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={subItem.img}
                        alt={subItem.name}
                        fill
                        className="object-fill"
                      />
                    </div>

                    {/* TEXT */}
                    <p className="text-sm md:text-base font-medium text-gray-700">
                      {subItem.name}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default ServicesLayout;