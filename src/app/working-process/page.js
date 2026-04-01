import React from 'react'
import Process1 from '@/components/Step';
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




const Working_process = () => {
  return (
    <div>
      <section id='Services' className="Services  ">
        <div className="max-w-6xlflex items-center justify-center">
          <h1 className="text-center pb-15 py-16 bg-gradient-to-br from-white via-[var(--primary)]/10 to-white">
          How <span className="text-[var(--primary)]"> We Work </span>
          
        </h1>

        </div>
        <div className='px-15 py-10'>
          <h2 className=" inline-block mb-10 pl-4 pr-4 py-2 border-l-4 border-[var(--primary)] bg-gradient-to-r from-[var(--secondary)]/15 to-transparent">
            Project Execution 
            <span className="text-[var(--primary)]"> Process  </span>
          </h2>
        <Process1 processSteps={processSteps} />
        </div>
          
      </section>

    </div>
  )
}

export default Working_process