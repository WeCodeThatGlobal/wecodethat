import React from "react";
// import Svg from "./components/Svg";

const HeroSectionV1 = () => {
  return (
    <main className="w-full overflow-hidden scroll-smooth">
      <section className="relative py-24">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
          <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
            <div className="relative">
              <h1 className="text-indigo-950 dark:text-white text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold text">
                Build Your Online Platform with best
                <span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600 px-3">
                  Digital Agency
                </span>
              </h1>
              <svg
                className="h-auto w-16 text-orange-500 absolute top-0 right-3 -translate-y-10"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                ></path>
              </svg>

              <svg
                className="h-auto w-40 text-cyan-500 absolute bottom-0 -rotate-12 -translate-x-36  translate-y-11 -z-30"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
            <p className="mt-10 text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, fugit! Laborum quo maxime at sapiente quasi
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6 w-full">
              <a
                href="#"
                className="rounded-md bg-black text-white px-11 py-2.5 text-sm font-semibold hover:text-black hover:bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
              >
                Contact Us
                <span aria-hidden="true" className="ml-4">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
            <div>{/* <Svg />   */}</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSectionV1;
