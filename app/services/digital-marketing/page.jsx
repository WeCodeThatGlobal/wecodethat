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
    active: false,
    link: "./e-commerce-solutions",
  },
  {
    title: "Digital Marketing",
    active: true,
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
      <PageHeader title="Digital Marketing" />
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
              src="/services/web/service-details-01.jpg"
              title="service-details-01"
              alt="service-details-01"
              loading="lazy"
            />
          </div>

          <div className="my-8">
            <h3 className="font-bold text-3xl">Digital Marketing</h3>
            <p className="text-gray-600 font-medium mt-4 leading-relaxed">
              At WeCodeThat, we specialize in creating data-driven digital
              marketing strategies that increase brand visibility, engage target
              audiences, and drive measurable results. Whether you're aiming to
              grow your brand's presence, enhance lead generation, or boost
              sales, our team delivers custom digital marketing solutions
              designed to achieve your specific business objectives.
            </p>

            <div className="grid grid-cols-2 my-8 gap-4">
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="/services/web/service-details-2.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">SEO Optimization</h4>
                  <p className="mt-2 text-gray-800">
                    Improve your search engine rankings and attract more organic
                    traffic with effective SEO strategies.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="/services/web/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">PPC Advertising</h4>
                  <p className="mt-2 text-gray-800">
                    Drive immediate traffic and generate leads with targeted
                    pay-per-click advertising campaigns across various
                    platforms.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="/services/web/service-details-4.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Social Media Marketing</h4>
                  <p className="mt-2 text-gray-800">
                    Engage with your audience, build a community, and grow brand
                    awareness on social media.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="/services/web/service-details-5.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Content Marketing</h4>
                  <p className="mt-2 text-gray-800">
                    Create valuable and relevant content to attract, inform, and
                    convert your audience.
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
                At WeCodeThat, we approach digital marketing with a focus on
                measurable growth and long-term success. Partnering with us
                means you're choosing a comprehensive approach that integrates
                strategy, creativity, and analytics to drive results.
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <strong>Tailored digital marketing solutions:</strong>&nbsp;
                  Designed to meet your unique business goals.
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <strong>Improved online presence:</strong>&nbsp; With SEO,
                  social media, and content marketing strategies.
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <strong>Targeted advertising:</strong>&nbsp; To attract the
                  right audience and maximize ROI.
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <strong>Data-driven insights:</strong>&nbsp; For better
                  decision-making and strategy optimization.
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
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <strong>Ongoing support and optimization:</strong>&nbsp; To
                  ensure your digital marketing efforts continue to deliver
                  success.
                </li>
              </ul>
            </div>

            <p className="text-gray-600 font-medium mt-8 leading-relaxed">
              By choosing WeCodeThat, you’re partnering with a team dedicated to
              elevating your brand in the digital landscape and helping you
              thrive in an ever-evolving online market.
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
