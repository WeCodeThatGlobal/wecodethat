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
    active: true,
    link: "./mobile-app-development",
  },
  {
    title: "E-Commerce Solutions",
    active: false,
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
      <PageHeader title="Mobile App Development" />
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
            <h3 className="font-bold text-3xl">Mobile App Development</h3>
            <p className="text-gray-600 font-medium mt-4 leading-relaxed">
              At WeCodeThat, we offer custom mobile app development services
              designed to empower your business and engage your audience.
              Whether you need an iOS app, Android app, or a cross-platform
              solution, our expert developers deliver high-quality mobile
              applications tailored to your business goals. With a focus on user
              experience, scalability, and security, we create apps that stand
              out in today’s competitive market.
            </p>

            <div className="grid grid-cols-2 my-8 gap-4">
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-2.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">
                    Custom Mobile App Design
                  </h4>
                  <p className="mt-2 text-gray-800">
                    Stand out with visually stunning, user-centric designs
                    tailored to your business needs.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">High-Performance Apps</h4>
                  <p className="mt-2 text-gray-800">
                    Enjoy fast, reliable, and smooth performance for enhanced
                    user engagement.
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
                    Cross-Platform App Development
                  </h4>
                  <p className="mt-2 text-gray-800">
                    Maximize your reach with apps optimized for both iOS and
                    Android platforms.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Scalable Solutions</h4>
                  <p className="mt-2 text-gray-800">
                    Ensure your app grows with your business demands.
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
                Partnering with WeCodeThat means collaborating with a team
                dedicated to delivering top-notch mobile app solutions that
                align with your business vision.
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
                  <strong>Tailored Solutions:</strong>&nbsp;Unique apps designed
                  to meet your business needs and goals.
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
                  <strong>Enhanced User Experience:</strong>&nbsp;Intuitive,
                  fast-loading, and responsive designs that engage users.
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
                  <strong>Higher Visibility:</strong> Apps optimized for App
                  Store Optimization (ASO) and user retention.
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
                  <strong>Scalable Technology:</strong> Future-proof mobile apps
                  that evolve with your business.
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
                  <strong>Reliable Support:</strong> Ongoing maintenance,
                  updates, and technical support to keep your app running
                  smoothly.
                </li>
              </ul>
            </div>

            <p className="text-gray-600 font-medium mt-8 leading-relaxed">
              By choosing WeCodeThat, you're choosing a partner who understands
              that great web design is more than just aesthetics it’s about
              creating a user experience that resonates and drives results.
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
