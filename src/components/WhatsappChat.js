"use client";
import Link from "next/link";

export default function WhatsappChat() {
  return (
    <Link
  href="https://wa.me/918447117195"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-12 left-6 flex justify-center items-center
             bg-[#25D366]
             w-12 h-12
             px-3 py-3 rounded-full z-50 cursor-pointer hover:scale-[1.05] transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-7 h-7 fill-white"
  >
    <path d="M16 .4C7.3.4.3 7.4.3 16c0 2.8.7 5.5 2.1 7.9L.2 31.8l8.1-2.1c2.3 1.2 4.9 1.9 7.7 1.9 8.7 0 15.7-7 15.7-15.6S24.7.4 16 .4zm0 28.7c-2.4 0-4.8-.7-6.9-2l-.5-.3-4.8 1.2 1.3-4.7-.3-.5c-1.3-2.1-2-4.5-2-6.9C2.8 8.2 8.9 2.1 16 2.1s13.2 6.1 13.2 13.3S23.1 29.1 16 29.1zm7.3-9.8c-.4-.2-2.2-1.1-2.6-1.2-.4-.2-.7-.2-1 .2-.3.4-1 1.2-1.3 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.8-.7-1-.7h-.9c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 3.9c.2.2 2.5 3.9 6.1 5.4.9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
  </svg>
</Link>
  );
}