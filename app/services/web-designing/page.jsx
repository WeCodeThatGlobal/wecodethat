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
    link: "/",
  },
  {
    title: "Web Development",
    active: false,
    link: "/",
  },
  {
    title: "Content Writing",
    active: false,
    link: "/",
  },
  {
    title: "Digital Marketing",
    active: false,
    link: "/",
  },
];

const page = () => {
  const scrollPosition = useScrollPosition();
  const box = useRef(null);

  const scrollPercentage =
    (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

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
              Web designing is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              ‘Content here, content here’, making it look like readable
              English.
            </p>

            <div className="grid grid-cols-2 my-8 gap-4">
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-2.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Best Solutions</h4>
                  <p className="mt-2 text-gray-800">
                    We focus on the best practices for it solutions and
                    services.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg flex items-center">
                <img
                  className="rounded-l-lg"
                  src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-details-3.jpg"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">Data Analysys </h4>
                  <p className="mt-2 text-gray-800">
                    We focus on the best practices for it solutions and
                    services.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 font-medium mt-4 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <div className="my-8">
            <h3 className="font-bold text-3xl">Our work benefits </h3>
            <p className="text-gray-600 font-medium mt-4 leading-relaxed">
              Web designing is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              ‘Content here, content here’, making it look like readable
              English.
            </p>

            <p className="text-gray-600 font-medium mt-4 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of text.
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
