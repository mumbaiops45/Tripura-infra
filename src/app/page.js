import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OurPackages from "@/components/Package";
import CardList from "@/components/CardList";

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
      <section id='Why_Us' className="Why_Us scroll-mt-10 w-full py-15 px-15">
        <div className="">

          <h2 className="inline-block mb-10 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent">
            Our
            <span className="text-[var(--primary)]"> Services </span>
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
    </div>
  );
}
