"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare
} from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setError("Invalid Email");
      return;
    }

    setError("");

    emailjs.send(
      "service_1qajjl8",
      "template_y3r7go5",
      form,
      "tStv7JwZFWsbJU2Cf"
    )
    .then(() => {
      alert("Message Sent ✅");
    })
    .catch(() => {
      alert("Error sending message ❌");
    });
  };

  const iconSize = 18; // ✅ same size everywhere

  return (
    <div className="w-full ">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* LEFT SIDE */}
        <div className="bg-[var(--primary)] text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-sm opacity-90">
            We’d love to hear from you. Fill out the form and our team will get back to you shortly.
          </p>

          <div className="space-y-4 text-sm">
            
            <div className="flex items-start gap-3">
              <MapPin size={iconSize} />
              <div>
                <p>Plot no.48, Panchavati Homes</p>
                <p>Abdullapurmet Mandal, Turkayamjal Village, 501510</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={iconSize} />
              <p>+91 879 080 66 77</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={iconSize} />
              <p>+91 8500 833 683</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={iconSize} />
              <p>tripurainfradevelopers@gmail.com</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="relative">
              <User size={iconSize} className="absolute left-3 top-3 text-gray-400" />
              <input
                name="name"
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-[80vw] md:w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div className="relative">
              <Mail size={iconSize} className="absolute left-3 top-3 text-gray-400" />
              <input
                name="email"
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-[80vw] md:w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-[var(--primary)]"
              />
              {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
              )}
            </div>

            <div className="relative">
              <MessageSquare size={iconSize} className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message..."
                className="w-[80vw] md:w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <button
              type="submit"
              className="w-[80vw] md:w-full bg-[var(--primary)] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}