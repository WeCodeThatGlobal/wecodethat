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
      <div className="flex flex-col lg:flex-row">
        <div className="xl:w-6/12 lg:w-6/12 w-full flex-auto lg:px-5 px-4 mt-12 max-w-full">
          <div>
            <h2 className="text-lg font-bold lg:text-3xl leading-6 mb-3">
              Who Are We?
            </h2>
            <p className="text-[21px] leading-relaxed font-medium mb-3 text-gray-500">
              We are a digital and branding company that believes in the power
              of creative strategy and along with great design.
            </p>
            <p className="mb-3 text-gray-500">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </p>
            <div className="flex flex-wrap -mx-4 mt-4">
              <div className="xl:w-6/12 w-full mt-4 xl:px-5 px-4 max-w-full">
                <ul className="list-none space-y-3 text-gray-500">
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </i>
                    </span>
                    <span>
                      Aenean eu leo quam ornare curabitur blandit tempus.
                    </span>
                  </li>
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </i>
                    </span>
                    <span>
                      Nullam quis risus eget urna mollis ornare donec elit.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="xl:w-6/12 w-full mt-4 xl:px-5 px-4 max-w-full">
                <ul className="list-none space-y-3 text-gray-500">
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </i>
                    </span>
                    <span>Etiam porta sem malesuada magna mollis euismod.</span>
                  </li>
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full absolute left-0 top-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </i>
                    </span>
                    <span>Fermentum massa vivamus faucibus amet euismod.</span>
                  </li>
                </ul>
              </div>
            </div>
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

      <div className="mt-9 flex flex-wrap mx-auto">
        {items.map((item) => (
          <div key={item.id} className="xl:w-4/12 lg:w-4/12 w-full px-6 mt-6">
            <div className="flex flex-row">
              <div>
                <div className="bg-blue-100 pointer-events-none mr-4 w-9 h-9 flex items-center justify-center rounded-lg">
                  <span className="font-bold text-base text-indigo-500">
                    {item.id}
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold leading-snug text-gray-600 mb-3">
                  {item.title}
                </h4>
                <p className="mb-2 text-gray-500">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
