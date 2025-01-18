"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { Navbar } from "./components/Navbar";
import { useRef, useEffect, useState } from "react";
import WhoWeAre from "./components/WhoWeAre";
import WhoWeAre2 from "./components/WhoWeAre2";
import Aboutus from "./components/Aboutus";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import useScrollPosition from "./hooks/useScrollPosition";


export default function HeroSection() {
  const box = useRef(null)
  const scrollPosition = useScrollPosition();

  const scrollPercentage = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

  console.log("scrollPercentage : ", scrollPercentage)
  return (
    <div ref={box}>
      <Hero showStickyNav={scrollPosition > 300} />
      <Services />
      <WhoWeAre />
      <WhoWeAre2 />
      <Aboutus />
      <Testimonials />
      <Blog />
      <Footer />
      <ScrollToTop  percentage={scrollPercentage}/>
    </div>
  );
}
