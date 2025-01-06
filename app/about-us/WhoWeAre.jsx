import React from "react";

const items = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.",
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.",
  },
];

const WhoWeAre = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-auto lg:px-5 px-4 mt-12 max-w-full">
            <div className=" h-full">
              <h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] leading-[1.35]">
                Who we are?
              </h2>
              <h3 className="text-lg font-semibold lg:text-4xl mb-3 !leading-[1.3] text-gray-700">
                Your Trusted Partners <br /> in Digital Innovation
              </h3>
              <p className="text-[17px] leading-relaxed font-medium mb-3 text-gray-500">
                Founded with a vision to bridge the gap between business needs
                and technology solutions, WeCodeThat has quickly established
                itself as a leading provider of tailored digital services. Our
                diverse team of developers, designers, and marketers work
                closely with clients to craft unique, user-centric solutions
                that drive growth and create long-lasting impact.
              </p>
              <p className="text-[17px] leading-relaxed font-medium mb-3 text-gray-500">
                We understand that every business is unique, and we believe that
                your website and digital presence should reflect your individual
                vision. That’s why we focus on creating bespoke solutions that
                align with your goals, target audience, and business values.
                From e-commerce platforms to mobile apps and SEO strategies, we
                cover all aspects of digital development.
              </p>
            </div>
          </div>

          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2">
            <div className="flex flex-wrap !relative overlap-grid-2">
              <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:mt-0">
                <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                  <img
                    className="!rounded-[.4rem] "
                    src="/images/who-we-are-1.jpg"
                    // srcset="./assets/img/photos/about2@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
                <figure className="absolute top-0 -translate-x-36">
                  <img
                    className="!rounded-[.4rem] "
                    src="/shape/shape1.svg"
                    // srcset="./assets/img/photos/about2@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
              </div>
              <div className="item xl:w-[55%] xl:mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:mt-[-45%] md:z-[4] md:ml-0">
                <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                  <img
                    className="!rounded-[.4rem] "
                    src="/images/who-we-are-1.jpg"
                    // srcset="./assets/img/photos/about3@2x.jpg 2x"
                    alt="image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
