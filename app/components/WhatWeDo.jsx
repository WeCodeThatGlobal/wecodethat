import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      backgroundImage:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-01.jpg",
      iconSrc:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png",
      title: (
        <>
          Web <br /> Development
        </>
      ),
      description:
        "Crafting modern, responsive websites tailored to your brand, ensuring a seamless user experience and optimized performance.",
      link: "https://flywebwp.websitelayout.net/?service=web-designing",
    },
    {
      id: 2,
      backgroundImage:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-02.jpg",
      iconSrc:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/14.png",
      title: (
        <>
          Digital <br /> Marketing
        </>
      ),
      description:
        "Driving online growth with targeted strategies, boosting visibility, traffic, and conversions for your business.",
      link: "https://flywebwp.websitelayout.net/?service=Web-Development",
    },
    {
      id: 3,
      backgroundImage:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-03.jpg",
      iconSrc:
        "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/15.png",
      title: (
        <>
          Custom <br /> Web Application
        </>
      ),
      description:
        "Building bespoke applications like CRMs to streamline operations, automate tasks, and meet unique business needs.",
      link: "https://flywebwp.websitelayout.net/?service=Web-Application",
    },
  ];

  return (
    <section className="py-24 bg-gray-900" id="service">
      <div className="px-4 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto w-full space-y-4 mb-20 text-white">
          <h2 className="text-sm uppercase">What We Do</h2>
          <h3 className="text-[40px] font-semibold">
            Services That Help You Grow.
          </h3>
        </div>
        <div className="flex gap-x-10 items-center">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative w-1/3 bg-no-repeat bg-cover rounded-xl group"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
              }}
            >
              {/* Black overlay with transition */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl transition-opacity duration-300"></div>

              <div className="relative pb-10 px-10 min-h-[380px] rounded-xl transition-background duration-300 group-hover:bg-white">
                <div>
                  <div className="bg-gray-600 p-5 rounded-full inline-block -mt-9 mb-6">
                    <img src={item.iconSrc} alt="icon" className="w-11" />
                  </div>
                  <div className="overflow-hidden z-10">
                    <h2 className="text-[32px] font-bold mb-4 leading-tight text-white group-hover:text-black">
                      {item.title}
                    </h2>
                    <div className="translate-y-36 group-hover:translate-y-0 transition-transform duration-300 ">
                      <p className="leading-relaxed pr-6 mb-5 group-hover:text-gray-700">
                        {item.description}
                      </p>
                      <Link href="/">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
