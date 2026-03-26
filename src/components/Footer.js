"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const menuItems = [
  { name: "Home", slug: "home", href: "/" },
  { name: "About Us", slug: "about", href: "#about" },
  { name: "Our Services", slug: "services", href: "#services" },
  { name: "Why Choose Us", slug: "why", href: "#why" },
  { name: "Our Packages", slug: "packages", href: "#packages" },
  { name: "Contact Us", slug: "contact", href: "#contact" },
];

const servicesList = [
  "Residential Construction",
  "Commercial Construction",
  "Industrial Construction",
  "Interior Solution",
  "Project Management",
  "Renovation & Extension Work",
];

const Footer = () => {
  return (
    <footer className="w-full">

      {/* 🔝 Upper Footer */}
      <div className="bg-black text-white px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* 1️⃣ Logo + About */}
          <div>
            <div className="relative w-[140px] h-[60px] mb-4">
              <Image
                src="/logo.webp"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              We provide high-quality construction and interior solutions with
              modern design, strong execution, and reliable project delivery.
            </p>
          </div>

          {/* 2️⃣ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {menuItems
                .filter((item) => item.slug !== "services")
                .map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[var(--primary)] transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* 3️⃣ Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-[var(--primary)] transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4️⃣ Contact */}
          
<div>
  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
  <ul className="flex flex-col gap-3 text-gray-400 text-sm">
    <li className="flex items-center gap-2">
      <MapPin className="w-5 h-5 text-[var(--primary)]" /> 
      Plot no.48, Panchavati Homes, Abdullapurmet Mandal, Turkayamjal Village, 501510
    </li>
    <li className="flex items-center gap-2">
      <Phone className="w-5 h-5 text-[var(--primary)]" /> 
      +91 879 080 66 77 / +91 8500 833 683
    </li>
    <li className="flex items-center gap-2">
      <Mail className="w-5 h-5 text-[var(--primary)]" /> 
      tripurainfradevelopers@gmail.com
    </li>
  </ul>
</div>

        </div>
      </div>

      {/* 🔻 Bottom Copyright */}
      <div className="bg-[var(--primary)] text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Tripura Infra Developers. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;