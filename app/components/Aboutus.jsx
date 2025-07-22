import Link from "next/link";
import React from "react";
import Header from "./Header";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 flex items-center flex-col">
          <div className="grid grid-cols-5 gap-8 mt-16">
            <div className="col-span-2 image-hover flex self-center position-relative overflow-hidden">
              <img
                className="w-full h-auto rounded-md"
                src="/aboutus/about-us-02.jpg"
                alt="Descriptive alt text"
              />
            </div>
            <div className="col-span-3 image-hover position-relative overflow-hidden">
              <img
                className="w-full h-auto rounded-md"
                src="/aboutus/about-us-01.jpg"
                alt="Descriptive alt text"
              />
            </div>
          </div>
          <div className="px-4 md:px-8">
            <Header
              alignment="text-left"
              title="Empowering Startups Through Innovation"
              subtitle="About Us"
            />
            <div className="w-full">
              <div className="text-gray-600 mt-8 font-medium leading-loose">
                <p className="">
                  WeCodeThat was founded by passionate entrepreneurs who know
                  the challenges and opportunities of launching and scaling a
                  business. Our mission is to provide the technology, expertise,
                  and resources startups need to thrive in a competitive world.
                </p>
                <ul className="mt-8 space-y-4 list-outside leading-relaxed">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="size-5 text-blue-600 mr-1.5 shrink-0 self-start mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <p>
                      <strong>Startup Mindset:</strong> We approach every
                      project with the agility and creativity that only a
                      startup can offer.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="size-5 text-blue-600 mr-1.5 shrink-0 self-start mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <p>
                      <strong>Tailored Solutions:</strong> No cookie-cutter
                      approaches—every solution is designed specifically for
                      your business goals.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      className="size-5 text-blue-600 mr-1.5 shrink-0 self-start mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <p>
                      <strong>Collaboration First:</strong> Your success is our
                      success, and we partner with you every step of the way.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
