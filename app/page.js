"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { Navbar } from "./components/Navbar";
import { useRef } from "react";
import WhoWeAre from "./components/WhoWeAre";


export default function HeroSection() {

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <WhoWeAre />
    </>
  );
}
