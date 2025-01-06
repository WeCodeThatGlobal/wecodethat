import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <section className="">
      <div className="mx-auto">
        <div className="flex flex-col space-y-16 px-5 sm:px-16 md:px-20 lg:px-28 py-28">
          <div className="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">
            <h1 className="text-3xl font-semibold text-blue-950 dark:text-white md:text-4xl xl:text-5xl leading-tight">
              We are offering High Level services
            </h1>
          </div>

          <div className="flex items-center max-w-6xl mx-auto p-[10px] gap-y-5">
            {/* left col */}
            <div className="flex flex-col items-center w-3/5 gap-y-5">
              {/* left top col */}
              <div className="w-full flex gap-x-5">
                {/* 1st box */}
                <div className="w-1/2 flex flex-col justify-end items-end pb-5 rounded-tl-[35px]">
                  <div className="h-[100px] w-full"></div>
                  <div className="px-5 pt-5">
                    <h3 className="text-2xl font-medium mb-2">
                      Product Placement
                    </h3>
                    <p className="mb-2">
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit,
                      sed do eiusmod tempor incididunt labore.
                    </p>
                    <Link href="/">Read More</Link>
                  </div>
                </div>
                {/* 2nd box */}
                <div className="w-1/2 bg-slate-300 flex flex-col justify-end items-end pb-5">
                  <div className="h-[100px] w-full"></div>
                  <div className="px-5 pt-5">
                    <h3 className="text-2xl font-medium mb-2">
                      Product Placement
                    </h3>
                    <p className="mb-2">
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit,
                      sed do eiusmod tempor incididunt labore.
                    </p>
                    <Link href="/">Read More</Link>
                  </div>
                </div>
              </div>

              {/* left bottom col */}
              <div className="w-full flex gap-x-5">
                {/* 3rd box */}
                <div className="w-[64%] bg-slate-300 flex flex-col justify-end items-end pb-5 rounded-bl-[35px]">
                  <div className="h-[100px]"></div>
                  <div className="px-5 pt-5">
                    <h3 className="text-2xl font-medium mb-2">
                      Campaign Management
                    </h3>
                    <p className="mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link href="/">Read More</Link>
                  </div>
                </div>
                {/* 4th box */}
                <div
                  className="w-2/5 bg-slate-300 flex flex-col justify-end items-end bg-[75%_0]  bg-cover bg-no-repeat group"
                  style={{ backgroundImage: `url(/service/service2.webp)` }}
                >
                  <div className="h-full bg-gradient-to-b from-black/10 to-black/75 bg-opacity-75 transition duration-300 group-hover:bg-black group-hover:bg-opacity-30">
                    <div className="h-[100px] relative"></div>
                    <div className="px-5 pt-5 pb-5">
                      <div className="">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-50">
                          Promotion Ads
                        </h3>
                        <p className="mb-2 text-gray-200">
                          Lorem ipsum dolor sit amet, consec tetur adipiscing
                          elit sed do.
                        </p>
                        <Link href="/" className="text-gray-50 text-sm">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right col */}
            <div className="w-2/5 h-full">
              <div className="bg-red-950 w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
