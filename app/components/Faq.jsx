import { useState } from "react";

const sections = [
  {
    question: "What is GST cancellation?",
    answer:
      "GST cancellation refers to the process of deactivating a GST registration, stopping all taxable activities under GST.",
  },
  {
    question: "What is GST cancellation?",
    answer:
      "GST cancellation refers to the process of deactivating a GST registration, stopping all taxable activities under GST.",
  },
  {
    question: "What is GST cancellation?",
    answer:
      "GST cancellation refers to the process of deactivating a GST registration, stopping all taxable activities under GST.",
  },
  {
    question: "What is GST cancellation?",
    answer:
      "GST cancellation refers to the process of deactivating a GST registration, stopping all taxable activities under GST.",
  },
];

export default function Accordion() {
  const [openSections, setOpenSections] = useState(null);

  const handleToggle = (index) => {
    setOpenSections((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="max-w-4xl mx-auto flex flex-col w-1/2 py-20">
      <h2 className="text-center">Faqs</h2>
      {sections.map((section, index) => (
        <div
          key={index}
          className="w-full flex flex-col justify-between p-[30px] border-b-[1px] border-gray-300 mb-4"
        >
          {/* Header with onClick */}
          <div
            className="flex justify-between cursor-pointer "
            onClick={() => handleToggle(index)}
          >
            <span className="text-lg font-semibold">{section.question}</span>
            <div>
              {openSections === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Content to toggle */}
          <div
            className={`transition-all duration-400 overflow-hidden ${
              openSections === index ? "max-h-auto" : "max-h-0"
            }`}
          >
            {openSections === index && (
              <div className="mt-7 space-y-4">
                <p className="text-gray-700">{section.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
