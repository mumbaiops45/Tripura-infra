"use client";

import React from "react";

export default function CardList({ cards }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="bg-[#fcfcfc] p-5 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md group"
                >
                    {/* Top Row */}
                    <div className="flex items-start gap-4">
                        <img
                            src={card.image}
                            alt={card.heading}
                            className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                        />

                        <h3
                            className="relative font-semibold text-gray-900 leading-snug
after:content-[''] after:absolute after:left-0 after:-bottom-1.5
after:h-[2px] after:w-1/4 after:bg-[var(--secondary)]
after:transition-all after:duration-300
group-hover:after:w-1/2"
                        >
                            {card.heading}
                        </h3>
                    </div>

                    {/* Paragraph */}
                    <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                        {card.paragraph}
                    </p>
                </div>
            ))}
        </div>
    );
}
