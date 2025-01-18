import Link from "next/link";
import React from "react";
import Header from "./Header";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="grid grid-cols-2 gap-8 mt-16">
          <div className="image-hover position-relative overflow-hidden">
            <img
              className="w-full h-auto rounded-md"
              src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/about-05.jpg"
              alt="Descriptive alt text"
            />
          </div>
          <div className="image-hover position-relative overflow-hidden">
            <img
              className="w-full h-auto rounded-md mt-24"
              src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/about-04.jpg"
              alt="Descriptive alt text"
            />
          </div>
          </div>
          <div className="">
            <Header
              alignment="text-left"
              title="We offer the best design and development services!"
              subtitle="Who we are"
            />
            <div className="text-gray-600 mt-8 font-medium leading-loose">
              <p className="">
                Our objective is to offer a high-quality service and a
                dependable source of income to our investors while
                simultaneously minimizing any potential risks and automating and
                simplifying the relationships.
              </p>
              <ul className="mt-8 font-bold text-sm space-y-4">
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
                  Provide Web Design & Development
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
                  We Provide Logo Design & Copywriting
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
                  Best Website Support & Consultations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
