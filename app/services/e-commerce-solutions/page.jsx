"use client";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { useRef, useEffect, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

import FooterBlock from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import ServicesCard from "../../components/ServiceCard";
import CallUsCard from "../../components/CallUsCard";
import Layout, { Sidebar, MainContent } from "../../components/Layout";
import ScrollToTop from "../../components/ScrollToTop";
import CTAv1 from "../../about-us/CTAv1";

const services = [
  {
    title: "Custom Web Development",
    active: false,
    link: "./web-development",
  },
  {
    title: "Mobile App Development",
    active: false,
    link: "./mobile-app-development",
  },
  {
    title: "E-Commerce Solutions",
    active: true,
    link: "./e-commerce-solutions",
  },
  {
    title: "Digital Marketing",
    active: false,
    link: "./digital-marketing",
  },
];

const page = () => {
  const box = useRef(null);
  const scrollPosition = useScrollPosition();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const percentage =
        scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0;
      setScrollPercentage(percentage);
    };

    updateScrollPercentage();
  }, [scrollPosition]);

  return (
    <div ref={box}>
      <Navbar />
      <PageHeader title="E-Commerce Solutions" />
      <Layout>
        <Sidebar>
          <ServicesCard services={services} />
          <div className="mt-8">
            <CallUsCard />
          </div>
        </Sidebar>
        <MainContent>
          <div className="image-hover">
            <img
              className="rounded-lg"
              decoding="async"
              src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-01.jpg"
              title="service-details-01"
              alt="service-details-01"
              loading="lazy"
            />
          </div>

          <div className="my-8">
            <h3 className="font-bold text-3xl">E-Commerce Solutions</h3>
            <p className="text-gray-600 font-medium mt-4 leading-relaxed">
              At WeCodeThat, we specialize in building robust, scalable, and
              user-friendly e-commerce platforms that drive sales and enhance
              customer experiences. Whether you're launching your first online
              store or looking to optimize your existing one, our team provides
              end-to-end e-commerce solutions tailored to meet your business
              goals.
            </p>

            <div className="grid grid-cols-2 my-8 gap-4">
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-2.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">
                    Custom E-Commerce Design
                  </h4>
                  <p className="mt-2 text-gray-800">
                    Create a visually appealing and user-friendly online store
                    that aligns with your brand and attracts customers.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">
                    Seamless Shopping Experience
                  </h4>
                  <p className="mt-2 text-gray-800">
                    Deliver a smooth, fast, and secure shopping experience with
                    intuitive navigation and streamlined checkout processes.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Mobile Friendly Design</h4>
                  <p className="mt-2 text-gray-800">
                    Ensure your E-commerce store performs flawlessly across all
                    devices, from desktops to smartphones.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">
                    Payment Gateway Integration
                  </h4>
                  <p className="mt-2 text-gray-800">
                    Enable secure, flexible payment options for your customers
                    with integrated payment gateways that support various
                    methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CTAv1 />
          <div className="my-8">
            <h3 className="font-bold text-3xl">
              Benefits of Working with WeCodeThat
            </h3>
            <div className="text-gray-600 mt-8 font-medium leading-loose">
              <p>
                At WeCodeThat, we approach e-commerce development with a focus
                on driving growth and delivering an exceptional customer
                journey. Partnering with us means you're choosing a solution
                that is as scalable as your business, with a focus on
                functionality, security, and performance.
              </p>
              <ul className="mt-8 space-y-4">
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
                  <strong>Tailored e-commerce solutions:</strong>&nbsp;Designed
                  to meet your specific business needs.
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
                  <strong>Optimized user experience:</strong>&nbsp;For higher
                  conversion rates and sales.
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
                  <strong>Secure payment processing:</strong> With data
                  protection for peace of mind.
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
                  <strong>Scalable solutions:</strong> That grow with your
                  business.
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
                  <strong>Ongoing support and maintenance:</strong> To keep your
                  e-commerce platform running smoothly.
                </li>
              </ul>
            </div>

            <p className="text-gray-600 font-medium mt-8 leading-relaxed">
              By choosing WeCodeThat, you’re partnering with a team dedicated to
              taking your online store to the next level and helping you succeed
              in the competitive e-commerce landscape.
            </p>
          </div>
        </MainContent>
      </Layout>
      <FooterBlock />
      <ScrollToTop percentage={scrollPercentage} />
    </div>
  );
};

export default page;
