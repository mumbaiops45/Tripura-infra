"use client";
import Link from "next/link";

export default function CallButton() {
  return (
    <Link
      href="tel:+918790806677"
      className="fixed bottom-12 left-22 md:bottom-28 md:left-6 flex justify-center items-center
                 bg-[#008a00]
                 w-12 h-12
                 rounded-full z-50 cursor-pointer 
                 hover:scale-[1.05] transition"
    >
      {/* Phone Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-white"
      >
        <path d="M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.3 1.2.4 2.6.6 4 .6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h4.3c.6 0 1 .4 1 1 0 1.4.2 2.8.6 4 .1.4 0 .8-.3 1.1L6.6 10.8z" />
      </svg>
    </Link>
  );
}