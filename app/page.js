"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { useRef, useEffect, useState } from "react";
import WhoWeAre from "./components/WhoWeAre";
import WhoWeAre2 from "./components/WhoWeAre2";
import WorkProcess from "./components/WorkProcess";
import Aboutus from "./components/Aboutus";
import Testimonials from "./components/Testimonials";
import CaseStudy from "./components/CaseStudy";
import Blog from "./components/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import useScrollPosition from "./hooks/useScrollPosition";
import AppointmentBook from "./about-us/AppointmentBook";

export default function HeroSection() {
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
      <Hero showStickyNav={scrollPosition > 300} />
      <Services />
      <WhoWeAre />
      <WorkProcess />
      <WhoWeAre2 />
      <Aboutus />
      <Testimonials />
      <Blog />
      <CaseStudy />
      <AppointmentBook />
      <Footer />
      <ScrollToTop percentage={scrollPercentage} />
    </div>
  );
}
