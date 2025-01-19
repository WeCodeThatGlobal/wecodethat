import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <div className="p-6 bg-slate-100 rounded-lg">
      <h4 className="font-bold text-2xl">Main Services</h4>
      <div className="flex flex-col space-y-4 mt-4">
        {services.map((service, index) => (
          <a
            href={service.link}
            className={`p-4 transition cursor-pointer rounded-md font-medium inline-flex justify-between items-center
                ${
                  service.active
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 bg-white hover:bg-blue-600 hover:text-white"
                }
                `}
          >
            {service.title}
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
