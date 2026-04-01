"use client";
import ContactForm from "@/components/Form";
const ContactSection = () => {
  return (
    <section className="w-full   ">
      
      {/* Heading */}
      <div className="py-16 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">
       <h1 className="text-center ">
          <span className="text-[var(--primary)]"> Contact </span>Us
        </h1>
    
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-1 gap-12 items-start">

        {/* LEFT SIDE */}
        

        {/* RIGHT SIDE (FORM AREA) */}
        <div className="w-full h-full min-h-[350px] border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;