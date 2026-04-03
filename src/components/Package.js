"use client";
import React, { useState } from "react";

const data = {
  residential: {
    title: "Residential Construction",
    rows: [
      ["1.", "Essential home package", "₹ 1590/- sft"],
      ["2.", "Valu plus package", "₹ 1790/- sft"],
      ["3.", "Smart choice package", "₹ 1990/- sft"],
      ["4.", "Elite living package", "₹ 2290/- sft"],
    ],
  },
  commercial: {
    title: "Commercial",
    rows: [
      ["1.", "Core bare shell", "₹ 1290/- sft"],
      ["2.", "Flex", "₹ 1690/- sft"],
      ["3.", "Edge", "₹ 2190/- sft"],
      ["4.", "Prime edge", "₹ 2390/- sft"],
    ],
  },
  villas: {
    title: "Luxury Villas",
    rows: [
      ["1.", "Signature villa package", "₹ 2490/- sft"],
      ["2.", "Royal heritage package", "₹ 2690/- sft"],
      ["3.", "Grand elite package", "₹ 2990/- sft"],
      ["4.", "Supreme signature package", "₹ 3190/- sft"],
    ],
  },
};

const OurPackages = () => {
  const [active, setActive] = useState("residential");

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-[var(--primary)]/5 to-transparent ">

      <h2 className="text-center mb-10 pl-4 pr-4 py-2 ">
        Our <span className="text-[var(--primary)]">Packages</span>
      </h2>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">

        {/* LEFT SIDEBAR */}
        <div>
          <p className="mb-2 font-bold text-black">
            click to see packages
          </p>
          <div className="md:h-full flex flex-col gap-3 ">
            {[
              { key: "residential", label: "Residential Construction" },
              { key: "commercial", label: "Commercial" },
              { key: "villas", label: "Luxury Villas" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`font-bold text-center backdrop-blur-xl px-4 py-3 md:h-[30%] md:text-left rounded-lg border transition whitespace-nowrap
                ${active === item.key
                    ? "bg-[var(--primary)] text-white"
                    : "bg-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>


        {/* RIGHT TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border border-black rounded-xl overflow-hidden">

            {/* Header */}
            <thead className="bg-[var(--primary)] text-white">
              <tr className="text-[var(--primery)] text-lg md:text-xl font-bold">
                <th className="border border-black p-4 w-[80px]">No.</th>
                <th className="border border-black p-4">
                  {data[active].title}
                </th>
                <th className="border border-black p-4 w-[150px]">Price</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data[active].rows.map((row, i) => (
                <tr key={i} className="text-center text-lg font-semibold">
                  <td className="border border-black p-4">{row[0]}</td>
                  <td className="border border-black p-4">{row[1]}</td>
                  <td className="border border-black p-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default OurPackages;