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
                src="/whoweare/whoweare-01.jpg"
                alt="Descriptive alt text"
              />
            </div>
            <div className="image-hover position-relative overflow-hidden">
              <img
                className="w-full h-auto rounded-md mt-24"
                src="/whoweare/whoweare-02.jpg"
                alt="Descriptive alt text"
              />
            </div>
          </div>
          <div className="">
            <Header
              alignment="text-left"
              title="Your Trusted Partners in Digital Innovation"
              subtitle="Who we are"
            />
            <div className="text-gray-600 mt-8 font-medium leading-loose">
              <p className="">
                Founded with a vision to bridge the gap between business needs
                and technology solutions, WeCodeThat has quickly established
                itself as a leading provider of tailored digital services. Our
                diverse developers, designers, and marketers work closely with
                clients to craft unique, user-centric solutions that drive
                growth and create long-lasting impact.
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
                  Custom Web Development
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
                  Mobile App Development
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
                  E-Commerce Solutions
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
                  Digital Marketing
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
