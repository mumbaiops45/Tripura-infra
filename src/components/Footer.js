"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const menuItems = [
  { name: "Home", slug: "home", href: "/" },
  { name: "About Us", slug: "about", href: "/about-us" },
  { name: "Our Services", slug: "services", href: "#services" },
  { name: "How We Work", slug: "why", href: "/working-process" },
  { name: "Our Packages", slug: "packages", href: "/packages" },
  { name: "Contact Us", slug: "contact", href: "/contact" },
];

const servicesList = [
  { name: "Residential Construction", slug: "/services/residential" },
  { name: "Commercial Construction", slug: "/services/commercial-construction" },
  { name: "Industrial Construction", slug: "/services/industrial-construction" },
  { name: "Interior Solution", slug: "/services/interior-solution" },
  { name: "Project Management", slug: "/services/project-management" },
  { name: "Renovation & Extension Work", slug: "/services/renovation-extension-work" },
];

const Footer = () => {
  return (
    <footer className="w-full ">

      {/* 🔝 Upper Footer */}
      <div className="bg-black text-white px-6 md:px-12 pt-10 pb-15">
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
            <p className="text-sm text-gray-300 leading-relaxed">
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
                      className="text-gray-300 hover:text-[var(--primary)] transition"
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
                    href={service.slug}
                    className="text-gray-300 hover:text-[var(--primary)] transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4️⃣ Contact */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-3 text-gray-300 text-sm">
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
              <li className="">
                <div className="mt-4 flex items-center justify-start gap-3">

                  <a
                    href="https://www.facebook.com/tripurainfra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
                  >
                    <FaFacebook size={18} />
                  </a>

                  <a
                    href="https://x.com/TripuraInfra?t=Paaos-qozGb1Z-TfxQ05vQ&s=08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
                  >
                    <FaXTwitter size={18} />
                  </a>

                  <a
                    href="https://www.instagram.com/tripura_infra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="https://www.youtube.com/@Tripura_infra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
                  >
                    <FaYoutube size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEKBqb55lJDggAAAZ1N1aPgKbvLpDMHOy1RxCdr94A1Cii3lD1cxyfxl--PiCglLL22Pb7sV3_rkE6STMgbUxNH7DGBee_lxmpaP-Oof7N0zL1UaroFyvtsQB96goWoTQtkUUg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftripurainfradevelopers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
                  >
                    <FaLinkedin size={18} />
                  </a>

                </div>
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