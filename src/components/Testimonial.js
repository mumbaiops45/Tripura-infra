"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Harish Nair",
    comment:
      "Their interior team transformed my apartment beautifully. The designs are elegant, functional, and exactly how I imagined. Thank you, Tripura Infra Developers!",
    rating: 5,
  },
  {
    name: "Ramesh Kumar",
    comment:
      "Tripura Infra Developers made our dream home come true! The entire team was professional, transparent, and delivered on time without compromising on quality. I was truly impressed by their attention to detail.",
    rating: 5,
  },
  {
    name: "Suma Reddy",
    comment:
      "From the first consultation to the final handover, everything was smooth and stress-free. Their engineers guided us through every step, including loan approvals and design changes. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vinay Patel",
    comment:
      "We partnered with Tripura Infra Developers for our commercial complex, and the experience was excellent. They maintained clear communication, followed deadlines, and delivered a structure that exceeded expectations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    comment:
      "The quality of construction is top-notch! What I loved most was their commitment to transparency — no hidden costs, no surprises. Truly a trustworthy team.",
    rating: 5,
  },
];

const StarIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "var(--primary)" : "none"}
    stroke="var(--primary)"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Background decorative circles */}
      <div className="absolute -top-32 -right-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[#c8893c]/5 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-[#c8893c]/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="relative inline-block pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent text-xl sm:text-2xl md:text-3xl font-semibold">
            What Our <span className="text-[var(--primary)]">Clients Say</span>
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_8px_48px_rgba(200,137,60,0.1)] border border-[var(--primary)]/20 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16">

              {/* Quote mark + comment */}
              <div>
                <span
                  className="block text-5xl sm:text-6xl leading-none mb-3 sm:mb-4 select-none"
                  style={{ color: "var(--primary)", opacity: 0.25 }}
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="text-sm sm:text-base text-[#3a2510]/80 leading-[1.9] font-light">
                  {t.comment}
                </p>
              </div>

              {/* Footer: name + stars + dots */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 pt-6 border-t border-[var(--primary)]/10">

                {/* Stars + name */}
                <div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} filled={i < t.rating} />
                    ))}
                  </div>
                  <p className="font-semibold text-[#1a0f07] text-sm sm:text-base leading-tight">
                    {t.name}
                  </p>
                </div>

                {/* Dot navigation */}
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`rounded-full bg-[var(--primary)] transition-all duration-300 ${
                        active === i
                          ? "w-6 h-2 opacity-100"
                          : "w-2 h-2 opacity-25"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}