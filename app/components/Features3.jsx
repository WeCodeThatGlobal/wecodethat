import React, { useState } from "react";

const Features3 = () => {
  const [openSections, setOpenSections] = useState(null);

  const handleToggle = (index) => {
    setOpenSections((prevIndex) => (prevIndex === index ? null : index));
  };

  const sections = [
    {
      color: "#e0e9fa",
      title: "Immerse",
      description: "We dive deep into your world.",
      list: [
        "Understand your vision, goals, and challenges.",
        "Analyze your industry and identify growth opportunities.",
      ],
      result: "A clear roadmap tailored to your unique business.",
    },
    {
      title: "Strategize",
      description: "Great solutions start with great plans.",
      list: [
        "Co-create a strategic blueprint with milestones.",
        "Define the right tools, technologies, and workflows.",
      ],
      result: "A well-defined path toward success.",
    },
    {
      title: "Craft",
      description: "Where ideas come to life.",
      list: [
        "Design and build intuitive, scalable solutions.",
        "Collaborate with you at every stage for precision.",
      ],
      result: "A cutting-edge solution, ready to scale.",
    },
    {
      title: "Launch",
      description: "Taking your vision live.",
      list: [
        "Deploy seamlessly with zero disruptions.",
        "Perform rigorous testing for reliability.",
      ],
      result: "A powerful launch that sets you up for success.",
    },
    {
      title: "Evolve",
      description: "The journey doesn’t end here.",
      list: [
        "Monitor performance and collect feedback.",
        "Continuously enhance and scale as your business grows.",
      ],
      result: "A future-proof solution built to grow with you.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full flex justify-between items-center pt-2">
          <div className="pr-14 w-1/2">
            <h3 className="text-5xl font-semibold leading-tight">
              Ignite Growth with Our Proven SEO Mastery
            </h3>
          </div>
          <div className="w-1/2 pl-14 pr-10  leading-normal text-gray-600">
            Et magnis arcu elit elit ipsum. Eget in libero faucibus amet. Arcu,
            aliquam facilisi consequat proin velit sollicitudin non. Risus
            mauris risus molestie mus tellus enim nulla tortor. Ultrices semper
            dictum.
          </div>
        </div>
        <div className="w-full flex mt-12">
          <div className="pr-14 flex flex-col w-1/2">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`w-full flex flex-col justify-between p-[30px]    ${
                  openSections === index
                    ? "border-[1px] border-gray-300 rounded-2xl bg-[color]"
                    : `border-b-[1px] border-gray-300 mb-4`
                }`}
              >
                {/* Header with onClick */}
                <div
                  className="flex justify-between cursor-pointer "
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-lg font-semibold">{section.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`h-6 w-6 transform transition-transform duration-500 ${
                      openSections === index ? "-rotate-45" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>

                {/* Content to toggle */}
                <div
                  className={`transition-all duration-400 overflow-hidden ${
                    openSections === index ? "max-h-auto" : "max-h-0"
                  }`}
                >
                  {openSections === index && (
                    <div className="mt-7 space-y-4">
                      <p className="text-gray-700">{section.description}</p>
                      <ul className="list-disc list-outside text-gray-700 ml-8">
                        {section.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-gray-600">{section.result}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features3;
