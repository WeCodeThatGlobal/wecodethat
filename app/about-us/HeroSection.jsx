import React from "react";

const Header = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-0 h-[64rem] w-full stroke-gray-500 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div>
        <div className="px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32 text-center">
          <div className="mx-auto gap-x-14 lg:mx-0 lg:max-w-none ">
            <div className="relative w-full max-w-3xl mx-auto">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl sm:leading-tight">
                <span className="sm:text-9xl">Hello,</span> <br /> we’re
                WeCodeThat.
              </h1>
              <p className="mt-6 text-pretty text-lg font-medium text-white sm:text-xl/8">
                We are a digital agency that crafts innovative websites, mobile
                apps, and digital strategies designed to help your business
                thrive in the digital world. Let’s create something exceptional,
                together.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 w-full">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold hover:text-white hover:bg-black hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  hover:shadow-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Your Journey with Us<span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
