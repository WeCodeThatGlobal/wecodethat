import React from "react";
import { Navbar } from "../components/Navbar";
import Item from "./Item";
import HeroSection from "./HeroSection";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";

import FooterBlock from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="max-w-7xl mx-auto w-full">
          <HeroSection />
        </section>

        <WhoWeAre />

        <section className="max-w-7xl mx-auto">
          <WhatWeDo />
        </section>

        <Testimonials />

        <section className="max-w-7xl mx-auto px-5 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 class="lg:text-4xl font-bold !leading-[1.3] !mb-8 lg:!px-10 xl:!px-10 text-gray-700">
              Save your time and money by choosing our professional team.
            </h3>
          </div>
          <div className="flex relative z-10">
            <Item />
            <Item />
            <Item />
            <Item />
            <div className="w-36 absolute left-0 top-0 -translate-y-12 -translate-x-9 -z-10">
              <img src="/svg/circlestrip.svg" className="w-full" alt="" />
            </div>
            <div className="w-32 absolute right-0 bottom-0 translate-y-9 translate-x-8 -z-10">
              <img src="/svg/circle.svg" className="w-full" alt="" />
            </div>
          </div>
        </section>
        <ContactUs />
      </main>
      <FooterBlock />
    </>
  );
};

export default page;
