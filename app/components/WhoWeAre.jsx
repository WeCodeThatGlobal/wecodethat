import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      backgroundImage:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-01.jpg",
      iconSrc:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png",
      title: (
        <>
          Web <br /> Development
        </>
      ),
      description:
        "Crafting modern, responsive websites tailored to your brand, ensuring a seamless user experience and optimized performance.",
      link: "https://flywebwp.websitelayout.net/?service=web-designing",
    },
    {
      id: 2,
      backgroundImage:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-02.jpg",
      iconSrc:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/14.png",
      title: (
        <>
          Digital <br /> Marketing
        </>
      ),
      description:
        "Driving online growth with targeted strategies, boosting visibility, traffic, and conversions for your business.",
      link: "https://flywebwp.websitelayout.net/?service=Web-Development",
    },
    {
      id: 3,
      backgroundImage:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-03.jpg",
      iconSrc:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/15.png",
      title: (
        <>
          Custom <br /> Web Application
        </>
      ),
      description:
        "Building bespoke applications like CRMs to streamline operations, automate tasks, and meet unique business needs.",
      link: "https://flywebwp.websitelayout.net/?service=Web-Application",
    },
  ];

  return (
    <section className="py-24" id="whoweare">
      <div className="px-4 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
        <div className="flex w-full h-full">
          <div className="w-[45%] relative">
            <div className="mt-10">
              <div className="flex items-center">
                <div className="px-3 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-auto rounded-lg"
                    src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/about-05.jpg"
                    alt=""
                  />
                </div>
                <div className="px-3 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-auto mt-[160px] rounded-lg"
                    src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/about-04.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-56 h-20 text-white bg-gray-300 absolute bottom-6 left-[110px] flex justify-center items-center gap-x-4 p-5">
              <span className="text-6xl font-bold ">18</span>
              <span className="text-xl font-medium">Years of Experience</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="pl-[50px] mt-[30px] h-full flex flex-col justify-center">
              <div className="max-w-5xl mx-auto w-full space-y-4">
                <h2 className="text-sm uppercase">Who We Are</h2>
                <h3 className="text-[40px] font-semibold leading-tight">
                  We deliver top-notch <br /> web solutions!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At WeCodeThat, our goal is to provide exceptional web
                  development, digital marketing, and custom web application
                  services. We focus on empowering businesses with innovative,
                  reliable, and efficient solutions, simplifying operations
                  while minimizing risks.
                </p>
              </div>
              <div className="pt-[10px] mt-[10px] flex items-center">
                <div className="pl-[45px] pr-[30px] py-[35px] mr-10 mt-6 bg-white shadow-[0px_0px_62px_0px_rgba(0,_0,_0,_0.08)] rounded-lg relative before-element">
                  <h4 className="text-lg font-semibold my-1">
                    Shubhankar Kumar
                  </h4>
                  <span>Co-Founder, WeCodeThat</span>
                </div>
                <div className="pt-[10px] mt-[10px]">
                  <ul className="space-y-3 font-semibold">
                    <li className="flex items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="#4b5563"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      Web Development & Digital Marketing
                    </li>
                    <li className="flex items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="#4b5563"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      Custom Web Applications (e.g., CRMs)
                    </li>
                    <li className="flex items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="#4b5563"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      Expert Support & Consultations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
