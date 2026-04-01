"use client";

const whyChooseData = [
  {
    id: "25+",
    title: "Years of Experience",
    desc: "Delivering trusted construction solutions with decades of industry expertise.",
  },
  {
    id: "150+",
    title: "Skilled Professionals",
    desc: "A strong team of engineers and experts ensuring precision and quality.",
  },
  {
    id: "180+",
    title: "Completed Projects",
    desc: "Successfully delivering residential, commercial, and industrial projects.",
  },
  {
    id: "100%",
    title: "Satisfied Clients",
    desc: "Building long-term relationships through trust and customer satisfaction.",
  },
  {
    id: "On-Time",
    title: "Project Delivery",
    desc: "Efficient planning and execution to ensure timely completion of every project.",
  },
  {
    id: "Top Quality",
    title: "Construction Standards",
    desc: "Using premium materials and modern techniques for durable structures.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 px-6 md:px-15 lg:px-[100px] bg-white">

      {/* HEADING */}
      <div className="mb-12">
        <h2 className="inline-block mb-6 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent text-2xl md:text-3xl font-semibold">
          Our Journey of Building
          <span className="text-[var(--primary)]"> Trust & Excellence</span>
        </h2>

        <p className="text-gray-600 max-w-3xl">
          With decades of experience in construction, we combine innovation, quality, and commitment to deliver projects that stand strong and inspire trust.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {whyChooseData.map((item, index) => (
          <div
            key={index}
            className="group bg-white shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center gap-4 hover:shadow-xl transition duration-300"
          >

            {/* CIRCLE */}
            <div className="px-5 h-20 md:h-14 flex items-center justify-center rounded-xl bg-[var(--primary)] text-white text-xl md:text-2xl font-bold shadow-md group-hover:scale-105 transition">
              {item.id}
            </div>

            {/* CONTENT */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyChooseSection;