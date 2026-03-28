"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building, Castle } from "lucide-react";

const data = {
  residential: {
    title: "Residential Construction",
    subtitle: "Quality homes built for every budget",
    icon: <Home size={32} className="text-[var(--primary)]" />,
    rows: [
      ["1.", "Essential Home Package", "₹ 1,590/- sft"],
      ["2.", "Value Plus Package", "₹ 1,790/- sft"],
      ["3.", "Smart Choice Package", "₹ 1,990/- sft"],
      ["4.", "Elite Living Package", "₹ 2,290/- sft"],
    ],
  },
  commercial: {
    title: "Commercial Construction",
    subtitle: "Spaces engineered for business excellence",
    icon: <Building size={32} className="text-[var(--primary)]" />,
    rows: [
      ["1.", "Core Bare Shell", "₹ 1,290/- sft"],
      ["2.", "Flex Package", "₹ 1,690/- sft"],
      ["3.", "Edge Package", "₹ 2,190/- sft"],
      ["4.", "Prime Edge Package", "₹ 2,390/- sft"],
    ],
  },
  villas: {
    title: "Luxury Villas",
    subtitle: "Premium finishes for an elevated lifestyle",
    icon: <Castle size={32} className="text-[var(--primary)]" />,
    rows: [
      ["1.", "Signature Villa Package", "₹ 2,490/- sft"],
      ["2.", "Royal Heritage Package", "₹ 2,690/- sft"],
      ["3.", "Grand Elite Package", "₹ 2,990/- sft"],
      ["4.", "Supreme Signature Package", "₹ 3,190/- sft"],
    ],
  },
};

const tabs = [
  { key: "residential", label: "Residential Construction", icon: <Home size={24} /> },
  { key: "commercial", label: "Commercial", icon: <Building size={24} /> },
  { key: "villas", label: "Luxury Villas", icon: <Castle size={24} /> },
];

export default function PackagesPage() {
  const [active, setActive] = useState("residential");
  const current = data[active];

  return (
    <div className="">
      {/* HERO BANNER */}
      <section className="relative py-16 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">
        {/* Decorative circles */}
       

        <h1
          className="text-center mb-4"
        >
          Our <span className="text-[var(--primary)]">Packages</span>
        </h1>

        <p
          className="text-center text-black max-w-xl mx-auto text-base md:text-lg"
          
        >
          Transparent pricing with no hidden costs. Choose the package that fits your vision and budget.
        </p>
      </section>

      {/* PACKAGES SECTION */}
      <section className="pt-16 md:pt-24 pb-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2
          className="inline-block mb-10 pl-4 pr-6 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent"
          
        >
          Explore Our <span className="text-[var(--primary)]">Packages</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* LEFT SIDEBAR */}
          <div>
            <div className="flex flex-col md:flex-row justify-center gap-6  pb-2 md:pb-12">
              {tabs.map((item, idx) => (
                <motion.button
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
                  className={`relative flex items-center gap-2 px-6 py-6 md:py-5 text-left rounded-xl border transition-all duration-300 whitespace-nowrap md:whitespace-normal overflow-hidden font-semibold text-sm md:text-base shadow-sm ${
                    active === item.key
                      ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-[0_4px_20px_rgba(192,57,43,0.3)]"
                      : "bg-white text-gray-800 border-gray-200"
                  }`}
                >
                  {active === item.key && <span className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-white/30" />}
                  {item.icon}
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT TABLE */}
          <AnimatePresence mode="wait">
            <motion.div
            className="mb-10"
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-6 flex items-center gap-3">
                {current.icon}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">{current.title}</h3>
                  <p className="text-sm text-gray-500">{current.subtitle}</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200">
                <table className="w-full border-collapse">
                  <thead className="text-white bg-[var(--primary)]">
                    <tr>
                      <th className="p-4 text-left text-sm font-bold w-16 border-r border-white/20">No.</th>
                      <th className="p-4 text-left text-base md:text-lg font-bold border-r border-white/20">
                        Package Name
                      </th>
                      <th className="p-4 text-center text-base md:text-lg font-bold w-44">Price / sft</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.rows.map((row, i) => (
                      <motion.tr
                        key={i}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="border-b border-gray-100 last:border-none hover:bg-red-50/50 transition-colors"
                      >
                        <td className="p-4 text-center font-bold text-gray-400 border-r border-gray-100 text-sm">{row[0]}</td>
                        <td className="p-4 font-semibold text-gray-800 border-r border-gray-100 text-sm md:text-base">{row[1]}</td>
                        <td className="p-4 text-center font-bold text-sm md:text-base ">{row[2]}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}