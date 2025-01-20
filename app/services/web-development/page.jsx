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
    active: false,
    link: "./web-designing",
  },
  {
    title: "Web Development",
    active: true,
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
      <PageHeader title="Web Development" />
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
            <h3 className="font-bold text-3xl">Web Development</h3>
            <p className="text-gray-600 font-medium mt-4 leading-relaxed">
              At WeCodeThat, we specialize in creating high-performing, visually
              stunning, and fully customized websites designed to elevate your
              brand and engage your audience. Whether you’re a startup or an
              established business, our team delivers cutting-edge web
              development solutions that drive results.
            </p>

            <div className="grid grid-cols-2 my-8 gap-4">
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-2.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Scalable Designs</h4>
                  <p className="mt-2 text-gray-800">
                    Stand out with a tailored website that grows with your
                    business needs.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Responsive and Fast</h4>
                  <p className="mt-2 text-gray-800">
                    Enjoy seamless performance across all devices for better
                    user experiences.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">SEO Optimized</h4>
                  <p className="mt-2 text-gray-800">
                    Boost search engine rankings with websites built for maximum
                    visibility and organic traffic.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Secure and Reliable </h4>
                  <p className="mt-2 text-gray-800">
                    Advanced security measures to protect your website and user
                    data.
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
                  Unique, tailored web solutions that set your business apart.
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
                  Improved user experience with fast-loading and responsive
                  designs.
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
                  Better visibility and higher rankings with SEO-optimized
                  websites.
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
                  Scalable and secure technology for long-term success.
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
                  Dedicated support team for maintenance and upgrades.
                </li>
              </ul>
            </div>

            <p className="text-gray-600 font-medium mt-8 leading-relaxed">
              By choosing WeCodeThat, you’re investing in a partner that’s as
              committed to your success as you are. Let us take your digital
              presence to the next level!
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
