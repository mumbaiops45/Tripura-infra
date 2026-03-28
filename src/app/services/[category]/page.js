// app/services/[category]/page.js

import { notFound } from "next/navigation";
import Image from "next/image";

const servicesData = [
  {
    id: "01",
    title: "Residential",
    slug: "residential",
    items: [
      {
        name: "Home",
        img: "/home.webp",
        title: "Custom Home Construction",
        description: (
          <>
            We design and build <strong>personalized homes</strong> with superior materials, ensuring comfort, safety, and lasting structural strength.
            <br />
            Every home is crafted with <strong>attention to detail</strong>, combining functional layouts with modern aesthetics to create a space that truly feels like yours.
            <br />
            From foundation to finishing, we ensure <strong>high-quality workmanship, transparent pricing, and on-time delivery</strong> at every stage of construction.
          </>
        ),
        painPoints: {
          title: "Common Problems Homeowners Face",
          points: ["Budget overrun fear", "Bad contractors", "Delay in work", "Low quality materials"],
          solution: "We eliminate these problems with transparent pricing, strict timelines, and quality control at every stage.",
        },
        services: {
          title: "What You Get",
          items: ["Custom floor planning", "Vastu-compliant design", "Structural engineering", "Turnkey construction", "Material selection guidance"],
        },
        features: {
          items: ["Dedicated project manager", "Weekly updates", "Premium materials", "On-time delivery", "End-to-end execution"],
        },
      },
      {
        name: "Luxury Villas",
        img: "/Luxury villas.webp",
        title: "Luxury Villa Construction",
        description: (
          <>
            We design and build <strong>premium luxury villas</strong> with elegant architecture, modern amenities, and high-quality finishes for a refined living experience.
            <br />
            Each villa is a reflection of exclusivity and sophistication, crafted with <strong>premium materials, custom designs, and smart home integration</strong> tailored to your lifestyle.
            <br />
            Our team ensures <strong>flawless execution, unique architectural character, and long-lasting value</strong> in every luxury project we undertake.
          </>
        ),
        painPoints: {
          title: "Luxury Construction Challenges",
          points: ["Overpriced construction", "Poor finishing quality", "Lack of unique design"],
          solution: "Our team ensures premium materials, unique design, and flawless execution within a controlled budget.",
        },
        services: {
          title: "What You Get",
          items: ["Architectural villa design", "Premium finishing", "Smart home integration", "Landscape development"],
        },
        features: {
          items: ["High-end materials", "Custom designs", "Smart automation", "Attention to detail"],
        },
      },
      {
        name: "Residential Apartments",
        img: "/Residential Appartments.webp",
        title: "Apartment Construction",
        description: (
          <>
            We construct <strong>thoughtfully planned residential apartments</strong> combining space efficiency, elegant interiors, and durable construction quality.
            <br />
            Our approach focuses on <strong>optimized layouts, structural integrity, and modern design</strong> to deliver buildings that meet both investor expectations and resident comfort.
            <br />
            From planning and approvals to final execution, we ensure <strong>safe, scalable, and cost-effective development</strong> delivered on schedule.
          </>
        ),
        painPoints: {
          title: "Developer Concerns",
          points: ["Safety issues", "Project delays", "Budget mismanagement"],
          solution: "We ensure safe, cost-efficient, and timely delivery with structured planning and execution.",
        },
        services: {
          title: "What You Get",
          items: ["Multi-floor construction", "Structural planning", "Compliance support", "Execution management"],
        },
        features: {
          items: ["Strong RCC structure", "Optimized layouts", "Regulatory compliance", "Timely delivery"],
        },
      },
      {
        name: "Row Houses",
        img: "/Row Houses.webp",
        title: "Row House Construction",
        description: (
          <>
            We build <strong>smartly designed row villas</strong> offering privacy, natural light, and functional layouts that balance comfort and style.
            <br />
            Our designs focus on <strong>efficient space utilization, modern aesthetics, and community-focused living</strong>, making each unit both practical and visually appealing.
            <br />
            With consistent quality across all units, we deliver <strong>durable, affordable, and premium row house solutions</strong> that hold strong resale value.
          </>
        ),
        painPoints: {
          title: "Buyer Concerns",
          points: ["Poor layouts", "Low resale value", "Inconsistent quality"],
          solution: "We ensure smart layouts, durable construction, and consistent quality across all units.",
        },
        services: {
          title: "What You Get",
          items: ["Compact design planning", "Community layout", "Standardized construction"],
        },
        features: {
          items: ["Modern designs", "Cost-effective", "Uniform quality"],
        },
      },
    ],
  },
  {
    id: "02",
    title: "Commercial Construction",
    slug: "commercial-construction",
    items: [
      {
        name: "High-Rise Towers",
        img: "/High-Rise Towers.webp",
        title: "High-Rise Construction",
        description: (
          <>
            We develop <strong>high-rise commercial buildings</strong> with engineering excellence in tall structures, precision design, superior materials, and modern architectural appeal.
            <br />
            Our team handles everything from <strong>structural engineering and regulatory approvals to full execution management</strong>, ensuring safety at every level.
            <br />
            We deliver projects that meet <strong>modern urban demands with timely completion and strict compliance</strong> to all building standards.
          </>
        ),
        painPoints: {
          title: "Project Challenges",
          points: ["Safety risks", "Approval delays", "Execution delays"],
          solution: "We manage approvals, safety, and execution efficiently for smooth delivery.",
        },
        services: {
          title: "What You Get",
          items: ["Structural engineering", "Planning & approvals", "Execution management"],
        },
        features: {
          items: ["Advanced construction", "Compliance handling", "Timely completion"],
        },
      },
      {
        name: "Retail Spaces",
        img: "/Retail Spaces.webp",
        title: "Retail Space Construction",
        description: (
          <>
            We build <strong>modern retail and shopping hubs</strong> designed for functionality, visibility, and long-term business growth.
            <br />
            Our layouts are crafted to <strong>maximize customer flow, brand visibility, and efficient space usage</strong>, helping businesses create impactful and memorable shopping environments.
            <br />
            From shop fit-outs to large retail complexes, we deliver <strong>attractive, durable, and brand-focused commercial spaces</strong> built for performance.
          </>
        ),
        painPoints: {
          title: "Retail Issues",
          points: ["Poor layout", "Low customer flow"],
          solution: "We create layouts that improve customer movement and visibility.",
        },
        services: {
          title: "What You Get",
          items: ["Shop layout planning", "Interior setup", "Brand-focused design"],
        },
        features: {
          items: ["Attractive design", "Functional layout", "Durable build"],
        },
      },
      {
        name: "Hospital Construction",
        img: "/Hospital Construction.webp",
        title: "Healthcare Facility Construction",
        description: (
          <>
            We construct <strong>safe, compliant, and efficiently designed healthcare facilities</strong> with smart planning and durable infrastructure built for long-term use.
            <br />
            Our patient-centric layouts incorporate <strong>medical equipment integration, hygienic design standards, and strict regulatory compliance</strong> at every stage.
            <br />
            From small clinics to large hospital complexes, we deliver <strong>functional, safe, and future-ready healthcare infrastructure</strong> tailored to operational needs.
          </>
        ),
        painPoints: {
          title: "Healthcare Challenges",
          points: ["Regulatory compliance", "Medical equipment integration", "Hygiene standards"],
          solution: "We ensure functional layouts, safety, and full compliance with healthcare regulations.",
        },
        services: {
          title: "What You Get",
          items: ["Medical layout planning", "Equipment integration", "Regulatory approvals", "Construction management"],
        },
        features: {
          items: ["Hygienic design", "Durable structure", "Patient safety focused"],
        },
      },
      {
        name: "P.G. Hostels",
        img: "/P.G. Hostels.webp",
        title: "Hostel Construction",
        description: (
          <>
            We build <strong>comfortable, cost-effective, and low-maintenance hostel buildings</strong> designed for maximum utility and space optimization.
            <br />
            Our functional layouts prioritize <strong>resident safety, efficient room design, and shared space management</strong> to create a secure and convenient living environment.
            <br />
            Every hostel we construct is built with <strong>durable materials, smart planning, and easy-to-maintain finishes</strong> for long-term operational efficiency.
          </>
        ),
        painPoints: {
          title: "Hostel Concerns",
          points: ["Safety", "Efficient layouts", "Maintenance"],
          solution: "We provide secure, well-planned, and easy-to-maintain hostel buildings.",
        },
        services: {
          title: "What You Get",
          items: ["Functional room layouts", "Safety management", "Durable construction"],
        },
        features: {
          items: ["Secure design", "Optimized space", "Maintenance-friendly"],
        },
      },
    ],
  },
  {
    id: "03",
    title: "Industrial Construction",
    slug: "industrial-construction",
    items: [
      {
        name: "Industrial Civil Works",
        img: "/Industrial Civil Works.webp",
        title: "Industrial Civil Construction",
        description: (
          <>
            We handle <strong>end-to-end civil construction for industrial facilities</strong> with robust foundations, heavy-duty structures, and precision engineering.
            <br />
            Our team manages <strong>structural planning, safety compliance, and project supervision</strong> to ensure every industrial build meets the highest durability standards.
            <br />
            With a focus on <strong>efficient timelines and regulatory adherence</strong>, we deliver industrial civil projects that are built to perform under demanding conditions.
          </>
        ),
        painPoints: {
          title: "Industrial Challenges",
          points: ["Safety risks", "Heavy machinery handling", "Timeline delays"],
          solution: "We implement strict safety and project management to deliver efficiently.",
        },
        services: {
          title: "What You Get",
          items: ["Structural engineering", "Project supervision", "Safety compliance"],
        },
        features: {
          items: ["Strong structures", "Efficient execution", "Regulatory adherence"],
        },
      },
      {
        name: "PEB Sheds",
        img: "/PEB Sheds.webp",
        title: "Pre-Engineered Building Sheds",
        description: (
          <>
            We construct <strong>durable, cost-effective steel shed solutions</strong> designed for quick installation and long-term performance across industrial and storage applications.
            <br />
            Our pre-engineered building systems offer <strong>custom layouts, optimized structural design, and fast assembly</strong> without compromising on strength or quality.
            <br />
            From material selection to installation supervision, we deliver <strong>reliable PEB sheds that maximize usable space</strong> and minimize construction time.
          </>
        ),
        painPoints: {
          title: "PEB Shed Issues",
          points: ["Structural stability", "Material sourcing", "Timely delivery"],
          solution: "We provide durable pre-engineered structures with efficient timelines.",
        },
        services: {
          title: "What You Get",
          items: ["Custom design", "Material selection", "Installation supervision"],
        },
        features: {
          items: ["Durable sheds", "Optimized layout", "Quick assembly"],
        },
      },
    ],
  },
  {
    id: "04",
    title: "Interior Solution",
    slug: "interior-solution",
    items: [
      {
        name: "Residential Interiors",
        img: "/Residential Interiors.webp",
        title: "Residential Interior Design",
        description: (
          <>
            We create <strong>elegant, functional, and personalized interior designs</strong> that enhance comfort, style, and everyday living in your home.
            <br />
            Our team works closely with you to develop <strong>thoughtful layouts, curated material palettes, and cohesive design themes</strong> that reflect your personality and lifestyle.
            <br />
            From living rooms to bedrooms and kitchens, we deliver <strong>beautiful, organized, and budget-conscious interiors</strong> that transform your space into a place you love.
          </>
        ),
        painPoints: {
          title: "Interior Challenges",
          points: ["Cluttered layouts", "Poor aesthetics", "Budget constraints"],
          solution: "We deliver organized, stylish, and cost-efficient interiors.",
        },
        services: {
          title: "What You Get",
          items: ["Space optimization", "Modern design", "Material selection guidance"],
        },
        features: {
          items: ["Stylish interiors", "Functional spaces", "Budget-conscious planning"],
        },
      },
    ],
  },
];

// ✅ generateStaticParams stays the same
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    category: service.slug,
  }));
}

// ✅ generateMetadata — await params
export async function generateMetadata({ params }) {
  const { category } = await params;
  const service = servicesData.find((s) => s.slug === category);
  if (!service) return {};
  return {
    title: `${service.title} | Our Services`,
    description: `Explore our ${service.title} services`,
  };
}

// ✅ Page component — async + await params
export default async function ServiceCategoryPage({ params }) {
  const { category } = await params;
  const service = servicesData.find((s) => s.slug === category);

  if (!service) return notFound();

  return (
    <main className="mt-16 pb-20">

      {/* PAGE HERO */}
      <div className="  px-4 text-center">
        <h1 className="text-[var(--primary)] mb-3">{service.title}</h1>
        <p className="  mx-auto">
          Explore our range of {service.title.toLowerCase()} solutions built
          for quality, reliability, and your unique needs.
        </p>
      </div>

      {/* ITEMS */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8 py-16">
        {service.items.map((item, index) => (
          <section key={index} className="flex flex-col gap-10">

            {/* H2 — Item Name */}
            <div className="flex items-center gap-4">   
               <h2 className="inline-block  pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent">
                  
                    <span className="text-[var(--primary)]"> {item.name} </span>
                </h2>
             
             
            </div>

            {/* TOP: Image Left + Title/Description Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

              {/* Left — Image */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right — H3 + Description */}
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary)]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>

            </div>

            {/* BOTTOM: 3-Column Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1 — Pain Points */}
              <div className=" border border-red-100 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-black inline-block shrink-0" />
                  <h4 className="font-semibold  text-sm md:text-base">
                    {item.painPoints.title}
                  </h4>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.painPoints.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm ">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-green-700 bg-green-50 border border-green-100 rounded-lg p-2 mt-auto">
                  ✅ {item.painPoints.solution}
                </p>
              </div>

              {/* Card 2 — Services */}
              <div className=" border border-blue-100 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-black inline-block shrink-0" />
                  <h4 className="font-semibold  text-sm md:text-base">
                    {item.services.title}
                  </h4>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.services.items.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm ">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3 — Features */}
              <div className=" border border-[var(--primary)]/20 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-black inline-block shrink-0" />
                  <h4 className="font-semibold  text-sm md:text-base">
                    Key Features
                  </h4>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.features.items.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-black mt-0.5 shrink-0">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Divider */}
            {index < service.items.length - 1 && (
              <div className="w-full h-[1px] bg-gray-100 mt-4" />
            )}

          </section>
        ))}
      </div>

    </main>
  );
}