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

const services = [
  {
    title: "Web Designing",
    active: true,
    link: "./web-designing",
  },
  {
    title: "Web Development",
    active: false,
    link: "./web-development",
  },
  {
    title: "Content Writing",
    active: false,
    link: "./content-writing",
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
      <PageHeader title="Web Designing" />
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
            <h3 className="font-bold text-3xl">Web Designing </h3>
            <p className="text-gray-600 font-medium mt-4 leading-relaxed">
              At WeCodeThat, we specialize in creating visually stunning,
              innovative, and brand-centric website designs that speak directly
              to your audience. Our designs go beyond aesthetics—crafting
              intuitive experiences that engage users, build trust, and
              transform visitors into loyal customers. Whether you’re launching
              a new site or refreshing an existing one, we deliver designs that
              elevate your brand and help your business grow.
            </p>

            <div className="grid grid-cols-2 my-8 gap-4">
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-2.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">
                    Creative and Unique Designs
                  </h4>
                  <p className="mt-2 text-gray-800">
                    We design websites that reflect your brand’s personality and
                    make a lasting impression.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">User-Centered Design</h4>
                  <p className="mt-2 text-gray-800">
                    Our intuitive layouts enhance user experience and drive
                    engagement.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Mobile First</h4>
                  <p className="mt-2 text-gray-800">
                    Responsive designs that ensure seamless experiences across
                    all devices.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">SEO-Optimized</h4>
                  <p className="mt-2 text-gray-800">
                    Designs that help improve search engine rankings and attract
                    organic traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8">
            <h3 className="font-bold text-3xl">
              Benefits of Working with WeCodeThat
            </h3>
            <div className="text-gray-600 mt-8 font-medium leading-loose">
              <p>
                At WeCodeThat, we see web design as an opportunity to create a
                dynamic and functional experience for your audience. Partnering
                with us means you're choosing a design-focused approach that
                prioritizes your brand’s vision, the user’s journey, and the
                overall performance of the site.
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
                  Unique, creative designs that reflect your brand and engage
                  your audience.
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
                  User-focused layouts that enhance interaction and conversion.
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
                  SEO-optimized designs that improve search engine rankings.
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
                  Responsive, mobile-first designs for seamless user
                  experiences.
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
                  Scalable designs that grow with your business needs.
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
                  Ongoing support to ensure your design remains current and
                  effective.
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
