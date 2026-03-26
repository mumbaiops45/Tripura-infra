"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  { name: "Home", slug: "/", href: "/" },
  { name: "About Us", slug: "/about", href: "/about" },
  { name: "Our Services", slug: "/services", href: "/services" },
  { name: "Why Choose Us", slug: "/why-us", href: "/why-us" },
  { name: "Our Packages", slug: "/packages", href: "/packages" },
  { name: "Contact Us", slug: "/contact", href: "/contact" },
];

const servicesList = [
  "Residential Construction",
  "Commercial Construction",
  "Industrial Construction",
  "Interior Solution",
  "Project Management",
  "Renovation & Extension Work",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="h-[80px] bg-white shadow-md w-full fixed top-0 left-0 z-50 flex items-center">
      
      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">

        {/* Logo */}
        <Link href="/" onClick={handleLinkClick}>
          <div className="relative w-[120px] h-[70px]">
            <Image
              src="/logo.webp"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">

          {menuItems.map((item, index) => (
            <li key={index}>
              
              {/* SERVICES DROPDOWN */}
              {item.slug === "/services" ? (
                <div className="relative group">
                  <button
                    className={`flex items-center gap-1 transition ${
                      pathname.startsWith("/services")
                        ? "text-[var(--primary)]"
                        : "text-black group-hover:text-[var(--primary)]"
                    }`}
                  >
                    {item.name} <ChevronDown size={16} />
                  </button>

                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-3 w-56 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                    {servicesList.map((service, i) => (
                      <li key={i}>
                        <Link
                          href="/services"
                          onClick={handleLinkClick}
                          className="block px-3 py-2 rounded hover:bg-gray-100 hover:text-[var(--primary)] transition"
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`transition ${
                    pathname === item.slug
                      ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                      : "text-black hover:text-[var(--primary)]"
                  }`}
                >
                  {item.name}
                </Link>
              )}

            </li>
          ))}

        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white px-4 pb-4 absolute top-[80px] left-0 w-full ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-4 font-medium">

          {menuItems.map((item, index) => (
            <li key={index}>

              {item.slug === "/services" ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex justify-between w-full ${
                      pathname.startsWith("/services")
                        ? "text-[var(--primary)]"
                        : ""
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {servicesOpen && (
                    <ul className="ml-4 mt-2 flex flex-col gap-2">
                      {servicesList.map((service, i) => (
                        <li key={i}>
                          <Link
                            href="/services"
                            onClick={handleLinkClick}
                            className="block py-1 hover:text-[var(--primary)]"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`block ${
                    pathname === item.slug
                      ? "text-[var(--primary)]"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              )}

            </li>
          ))}

        </ul>
      </div>

    </nav>
  );
};

export default Navbar; 