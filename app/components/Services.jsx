"use client";
import React from "react";
import Header from "./Header";
import "./Services.css";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto py-16">
          <Header title="Services That Help You Grow." subtitle="What We Do" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="card group relative p-6 bg-white shadow rounded-md bg-service-01">
              <span className="icon">
                <Image
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png"
                  width={40}
                  height={40}
                />
              </span>

              <div className="overflow-hidden relative z-50">
                <h3 className="text-3xl font-bold group-hover:text-gray-900 text-slate-50 mb-3">
                  <a>
                    Custom <br /> Web Development
                  </a>
                </h3>

                <div className="card-content">
                  <p className="text-gray-600 mt-8 font-medium leading-loose">
                    Crafting high-performing, user-friendly websites that scale
                    with your business.
                  </p>
                  <div className="mt-3">
                    <a
                      href="../services/web-development"
                      className=" text-gray-600 tracking-wider flex items-center gap-x-3"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="rgb(75 85 99)"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card group relative p-6 bg-white shadow rounded-md bg-service-02">
              <span className="icon">
                <Image
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png"
                  width={40}
                  height={40}
                />
              </span>

              <div className="overflow-hidden relative z-50">
                <h3 className="text-3xl font-bold group-hover:text-gray-900 text-slate-50 mb-3">
                  <a>
                    E-Commerce <br /> Solutions
                  </a>
                </h3>

                <div className="card-content">
                  <p className="text-gray-600 mt-8 font-medium leading-loose">
                    Creating online stores that offer seamless shopping
                    experiences for customers.
                  </p>
                  <div className="mt-3">
                    <a
                      href="../services/web-development"
                      className=" text-gray-600 tracking-wider flex items-center gap-x-3"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="rgb(75 85 99)"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card group relative p-6 bg-white shadow rounded-md bg-service-03">
              <span className="icon">
                <Image
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png"
                  width={40}
                  height={40}
                />
              </span>

              <div className="overflow-hidden relative z-50">
                <h3 className="text-3xl font-bold group-hover:text-gray-900 text-slate-50 mb-3">
                  <a>
                    Digital <br /> Marketing
                  </a>
                </h3>

                <div className="card-content">
                  <p className="text-gray-600 mt-8 font-medium leading-loose">
                    Developing comprehensive strategies to enhance your brand
                    visibility and engagement online
                  </p>
                  <div className="mt-3">
                    <a
                      href="../services/digital-marketing"
                      className=" text-gray-600 tracking-wider flex items-center gap-x-3"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="rgb(75 85 99)"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
