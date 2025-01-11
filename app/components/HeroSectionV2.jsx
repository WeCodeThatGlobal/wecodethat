import Link from "next/link";
import React from "react";

const HeroSectionV2 = () => {
  return (
    <div
      className="mx-auto lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none"
      id="home"
    >
      <div className="w-full max-w-3xl mx-auto">
        <h1 className=" text-center text-5xl font-semibold tracking-tight sm:text-7xl sm:leading-tight">
          <span className="sm:text-9xl">Hello,</span> <br /> we’re WeCodeThat.
        </h1>
        <p className="mt-6 text-center text-lg font-medium  sm:text-xl/8">
          We are a digital agency that crafts innovative websites, mobile apps,
          and digital strategies designed to help your business thrive in the
          digital world. Let’s create something exceptional, together.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 w-full">
          <Link
            href="#"
            className="rounded-md bg-black text-white px-3.5 py-2.5 text-sm font-semibold border hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Start Your Journey with Us
            <span aria-hidden="true" className="ml-4">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionV2;
