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
          <div className="col-span-2 image-hover flex items-center position-relative overflow-hidden">
            <img
              className="w-full h-auto rounded-md"
              src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/why-choose-02.jpg"
              alt="Descriptive alt text"
            />
          </div>
          <div className="col-span-3 image-hover position-relative overflow-hidden">
            <img
              className="w-full h-auto rounded-md"
              src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/why-choose-01.jpg"
              alt="Descriptive alt text"
            />
          </div>
          </div>
          <div className="px-4 md:px-8">
            <Header
              alignment="text-left"
              title="We are award winning web development agency."
              subtitle="About Us"
            />
            <div className="w-full">
            <div className="text-gray-600 mt-8 font-medium leading-loose">
              <ul className="mt-8  space-y-4">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    className="size-5 text-blue-600 mr-1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Remarkable to receive such a personalized touch.
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    className="size-5 text-blue-600 mr-1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Duis aute irure dolor in reprehenderit in voluptate.
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    className="size-5 text-blue-600 mr-1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  I did not escape without a fight. Velit esse cillum dolore.
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
