"use client";
import Link from "next/link";
import { Navbar } from "./components/Navbar";
import HeroSectionV2 from "./components/HeroSectionV2";
import Features3 from "./components/Features3";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Statistacs from "./components/Statistacs";
import Works from "./components/Works";
import CaseStudy from "./components/CaseStudy";
import CTA from "./components/CTA";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import Faq from "./components/Faq";
import { useRef } from "react";

export default function HeroSection() {
  const animationContainer = useRef(null);

  return (
    <>
      <Navbar />

      <HeroSectionV2 />

      <WhatWeDo />

      <div id="whoweare">
        <WhoWeAre />
      </div>
      <Features3 />
      <CTA />

      <Statistacs />
      {/* <Testimonials /> */}
      <Works />
      {/* <div id="works">
        <CaseStudy />
      </div> */}
      <Faq />
      <Footer />
    </>
  );
}
