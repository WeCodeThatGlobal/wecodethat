"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { Navbar } from "./components/Navbar";
import { useRef } from "react";
import WhoWeAre from "./components/WhoWeAre";
import WhoWeAre2 from "./components/WhoWeAre2";
import Aboutus from "./components/Aboutus";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";


export default function HeroSection() {

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <WhoWeAre />
      <WhoWeAre2 />
      <Aboutus />
      <Testimonials />
      <Blog />
    </>
  );
}
