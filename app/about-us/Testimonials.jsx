import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-[90rem]  mx-auto px-5 py-20 !bg-[#ffffff]">
      <div
        className="rounded-lg bg-overlay bg-overlay-light-500 pb-20 [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0  xxl:rounded-[.8rem] "
        data-image-src="../../assets/img/photos/bg22.png"
        style={{
          backgroundImage: "url(/images/bg22.png)",
        }}
      >
        <div className="max-w-7xl m-auto py-[4.5rem] px-0">
          <div>
            <div className="flex flex-wrap mx-[-15px] lg:mx-[24px] mt-[-50px] lg:mt-0">
              <div className="lg:w-1/3 w-full flex-[0_0_auto] px-[15px] lg:px-[20px] mt-[50px] lg:mt-0 max-w-full text-center lg:text-left mx-auto">
                <h3 className="text-lg font-semibold lg:text-4xl mb-3 !leading-[1.3] text-gray-700 pr-16">
                  We are proud of our works
                </h3>
                <p className="text-2xl !leading-[1.6] font-medium !mb-0 text-gray-600">
                  We bring solutions to make life easier for our customers.
                </p>
              </div>
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] xl:!mt-2 lg:!mt-2 max-w-full">
                <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] !text-center">
                  {[
                    {
                      icon: "/svg/target.svg",
                      value: "1000+",
                      label: "Completed Projects",
                    },
                    {
                      icon: "/svg/bar-chart.svg",
                      value: "4x",
                      label: "Revenue Growth",
                    },
                    {
                      icon: "/svg/employees.svg",
                      value: "99.7%",
                      label: "Customer Satisfaction",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full"
                    >
                      <div className="flex flex-col items-center">
                        <img src={item.icon} className="w-12 mb-2" alt="icon" />
                        <h3 className="text-4xl font-semibold tracking-[normal] !leading-none mb-2">
                          {item.value}
                        </h3>
                        <p className="!mb-0 text-gray-500">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="mb-20 max-w-7xl mx-auto ">
          <div className="flex flex-wrap mx-[-15px] mt-[-8rem] isotope z-10">
            {[
              {
                text: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.",
                name: "Coriss Ambady",
                role: "Financial Analyst",
              },
              {
                text: "Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.",
                name: "Cory Zamora",
                role: "Marketing Specialist",
              },
              {
                text: "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.",
                name: "Nikolas Brooten",
                role: "Sales Manager",
              },
              {
                text: "Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam vitae libero.",
                name: "Coriss Ambady",
                role: "Financial Analyst",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full "
              >
                <div className="bg-white rounded-md shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] border-b-4 !border-[#c5d7f6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                  <div className="flex-[1_1_auto] p-[40px]">
                    <blockquote className="text-base !leading-[1.7] font-medium m-[0_0_1rem] pl-4 icon !mb-0 relative p-0 border-0 text-gray-500 ">
                      <p className="relative z-10">{item.text}</p>
                      <div className="flex items-center text-left ">
                        <div className="mt-2 !pl-0">
                          <h5 className="!mb-1 text- font-semibold !leading-[1.5] text-gray-700 ">
                            {item.name}
                          </h5>
                          <p className="!mb-0 text-[0.8rem] text-gray-400">
                            {item.role}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="#f9fafb"
                            stroke="#f9fafb"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="lucide lucide-quote absolute top-0 left-0 translate-x-2"
                          >
                            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                          </svg>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
