import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OurPackages from "@/components/Package";
import CardList from "@/components/CardList";
import ClipPath from "@/components/ClipPath";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonial";

const processSteps = [
  {
    title: "Share Your Requirements",
    description:
      "Tell us your dream project details — location, budget, and ideas. Our team will understand your needs and schedule a quick discussion.",
    image: "/Share Your RequirementsShare Your Requirements.webp",
  },
  {
    title: "Meet Our Experts",
    description:
      "Connect with our engineers and architects who will help you plan your project, explain the process, and suggest the best construction options.",
    image: "/Meet Our Experts.webp",
  },
  {
    title: "Book with Us",
    description:
      "Once you’re satisfied with the proposal, book your project confidently. We’ll prepare a transparent agreement with clear timelines and cost details.",
    image: "/Book with Us.webp",
  },
  {
    title: "Track Progress",
    description:
      "Watch your project come to life! Get regular updates, site photos, and progress reports — all managed with complete transparency.",
    image: "/Track Progress.webp",
  },
  {
    title: "Handover",
    description:
      "Your dream home is ready! We hand over your completed project with all documentation, finishing touches, and post-construction support.",
    image: "/Handover.webp",
  },
];


const Project = [
  {
    heading: "Location: Ramanthapur",
    image: "/Ramanthapur.webp",
    text: "Area: 4500 Sft",
  },
  {
    heading: "Location: DVR colony",
    image: "/DVR colony.webp",
    text: "Area: 4800 sft",
  },
  {
    heading: "Location: Ramoji film city",
    image: "/Ramoji film city.webp",
    text: "Area: 3300 sft",
  },
  {
    heading: "Location: Sama Nagar",
    image: "/Sama Nagar.webp",
    text: "Area: 1200 sft",
  },
  {
    heading: "Location: Dammaiguda",
    image: "/Dammaiguda.webp",
    text: "Area: 2400 Sft",
  },
  {
    heading: "Location: NGOs colony",
    image: "NGOs colony.webp",
    text: "Area: 3600 sft",
  },
  {
    heading: "Location: Saheb Nagar",
    image: "/Saheb Nagar.webp",
    text: "Area: 1350 sft",
  },
];

const cardData = [
  {
    image: "/20+ Years of Trusted Experience.png",
    heading: "20+ Years of Trusted Experience",
    paragraph:
      "With over 20 years of industry experience, we have built a strong reputation for delivering reliable, high-quality construction projects that stand the test of time.",
  },
  {
    image: "/Expert Team of Engineers.png",
    heading: "Expert Team of Engineers Ensuring Precision & Quality",
    paragraph:
      "Our team of highly skilled engineers and professionals ensures every project is executed with precision, maintaining the highest standards of construction quality and safety.",
  },
  {
    image: "/Transparency.webp",
    heading: "100% Transparency – No Hidden Costs",
    paragraph:
      "We believe in complete transparency throughout the project lifecycle, providing clear cost breakdowns and ensuring there are no hidden charges at any stage.",
  },
  {
    image: "/Construction Using the Best Materials.png",
    heading: "Strong & Durable Construction Using the Best Materials",
    paragraph:
      "We use only premium-grade materials and proven construction techniques to ensure long-lasting durability, structural strength, and superior finish.",
  },
  {
    image: "/On-Time Delivery.png",
    heading: "On-Time Delivery with Professional Project Management",
    paragraph:
      "Our structured project management approach ensures timely completion of projects without compromising on quality, keeping your deadlines and expectations aligned.",
  },
  {
    image: "/Plan Approvals & Loan Assistance.webp",
    heading: "Plan Approvals & Loan Assistance",
    paragraph:
      "We assist you with necessary plan approvals and guide you through the loan process, making your construction journey smooth and hassle-free.",
  },
  {
    image: "/Customized Solutions for Every Homebuyer.png",
    heading: "Customized Solutions for Every Homebuyer’s Need",
    paragraph:
      "Every client is unique, and so are their requirements. We offer tailored construction solutions that match your vision, budget, and lifestyle needs perfectly.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <OurPackages />
      <section id='Why_Us' className="Why_Us  w-full py-15 px-6 md:px-15">
        <div className="">

          <h2 className="inline-block mb-10 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent">
            Why
            <span className="text-[var(--primary)]"> Choose US </span>
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='' className="complate_project w-full py-15 px-6 md:px-15">
        <div className="">

          <h2 className="inline-block mb-10 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent">
            Our completed
            <span className="text-[var(--primary)]"> projects</span>
          </h2>

        </div>
        <ClipPath cards={Project} />
      </section>
      <section className="Process bg-gradient-to-b from-[var(--secondary)]/5 to-transparent  w-full py-20 px-6 md:px-15 ">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">Project Execution
            <span className="text-[var(--primary)]">  Process </span>

          </h2>

        </div>
        <Process processSteps={processSteps} />
        
      </section>
      <Testimonials />
    </div>
  );
}
