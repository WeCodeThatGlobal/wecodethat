"use client";
import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import Item from "./Item";
import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import HowWeWork from "./HowWeWork";
import Statistacs from "./Statistacs";
import CTAv2 from "./CTAv2";
import CTAv1 from "./CTAv1";
import AppointmentBook from "./AppointmentBook";
import ScrollToTop from "../components/ScrollToTop";
import FooterBlock from "../components/Footer";
import useScrollPosition from "../hooks/useScrollPosition";

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
    <>
      <Navbar />
      <main>
        <section className="bg-black mx-auto w-full">
          <HeroSection />
        </section>

        <WhoWeAre />

        <CTAv2 />

        <section className="max-w-7xl mx-auto">
          <WhatWeDo />
        </section>

        <Statistacs />
        <CTAv1 />
        <HowWeWork />

        <div className="bg-gray-950">
          <section className="max-w-7xl mx-auto px-5 py-16">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="lg:text-4xl font-bold !leading-[1.3] !mb-8 lg:!px-10 xl:!px-10 text-gray-100">
                Save your time and money by choosing our professional team.
              </h3>
            </div>
            <div className=" relative z-10 grid grid-cols-4 max-w-5xl mx-auto">
              <Item
                avatar="/avatar/001-boy.png"
                name="Subhankar Kumar"
                designation="co-founder"
                link="https://www.linkedin.com/in/subhankarkumar/"
              />
              <Item
                avatar="/avatar/003-man-1.png"
                name="Asim P A"
                designation="Associate Full Stack Developer"
                link="https://www.linkedin.com/in/asim-p-a-b08163206/"
              />
              <Item
                avatar="/avatar/004-man-2.png"
                name="Nilesh Patidar"
                designation="Associate Full Stack Developer"
                link="https://www.linkedin.com/in/nilesh-patidar-69781a251/"
              />
              <Item
                avatar="/avatar/005-man-3.png"
                name="Sasidaran Asokan"
                designation="Associate Front-End Developer"
                link="https://www.linkedin.com/in/sasidaranasokan/"
              />
              <Item
                avatar="/avatar/006-man-4.png"
                name="Sharan Srinivasan"
                designation="Digital Marketing Specialist"
                link="https://www.linkedin.com/in/sharan-srinivasan-868b4027b/"
              />
              <Item
                avatar="/avatar/006-man-4.png"
                name="Mukund Solanki"
                designation="Associate Flutter Developer"
                link="https://www.linkedin.com/in/mukundsolanki?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVMR%2BLThVTj21OIFIO6McOg%3D%3D"
              />
              <Item
                avatar="/avatar/006-man-4.png"
                name="Mohit Singh"
                designation="Associate Back-End Developer"
                link="https://www.linkedin.com/in/mohiitsingh?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1nqXZq1tTDyVBE2By2Xbrw%3D%3D"
              />
              <div className="w-36 absolute left-0 top-0 -translate-y-12 -translate-x-9 -z-10">
                <img src="/svg/circlestrip.svg" className="w-full" alt="" />
              </div>
              <div className="w-32 absolute right-0 bottom-0 translate-y-9 translate-x-8 -z-10">
                <img src="/svg/circle.svg" className="w-full" alt="" />
              </div>
            </div>
          </section>
        </div>
        <AppointmentBook />
      </main>
      <FooterBlock />
      <ScrollToTop percentage={scrollPercentage} />
    </>
  );
};

export default page;
