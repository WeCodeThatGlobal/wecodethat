import Link from "next/link";
import React from "react";
import Header from "./Header";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto py-32">
          <Header
            alignment="text-center"
            title="Our step by step working process"
            subtitle="Work Process"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="relative">
              <div className="process-style text-center">
                <div className="bg-blue-600 w-24 h-24 mx-auto text-center flex items-center justify-center relative">
                  <img
                    className="w-16"
                    decoding="async"
                    src="/workprocess/icon-01.png"
                    alt="Process Image"
                  ></img>

                  <div className="absolute bg-gray-900 px-1 py-0.5 -top-2 -left-2 text-gray-100 font-bold">
                    01
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-600">Starting</p>
                  <h4 className="font-bold text-xl mt-2">Research</h4>
                  <p className="text-gray-600 font-medium mt-2">
                    Understand goals, analyse, and define objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="process-style arrow-top text-center md:mt-16">
                <div className="bg-blue-600 w-24 h-24 mx-auto text-center flex items-center justify-center relative">
                  <img
                    className="w-16"
                    decoding="async"
                    src="/workprocess/icon-02.png"
                    alt="Process Image"
                  ></img>

                  <div className="absolute bg-gray-900 px-1 py-0.5 -top-2 -left-2 text-gray-100 font-bold">
                    02
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-600">Planning</p>
                  <h4 className="font-bold text-xl mt-2">Design</h4>
                  <p className="text-gray-600 font-medium mt-2">
                    Craft user-friendly prototypes and refine interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="process-style  text-center">
                <div className="bg-blue-600 w-24 h-24 mx-auto text-center flex items-center justify-center relative">
                  <img
                    className="w-16"
                    decoding="async"
                    src="/workprocess/icon-03.png"
                    alt="Process Image"
                  ></img>

                  <div className="absolute bg-gray-900 px-1 py-0.5 -top-2 -left-2 text-gray-100 font-bold">
                    03
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-600">Design</p>
                  <h4 className="font-bold text-xl mt-2">Development</h4>
                  <p className="text-gray-600 font-medium mt-2">
                    Build, test, and optimise with scalable solutions
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="process-style last text-center  md:mt-16">
                <div className="bg-blue-600 w-24 h-24 mx-auto text-center flex items-center justify-center relative">
                  <img
                    className="w-16"
                    decoding="async"
                    src="/workprocess/icon-04.png"
                    alt="Process Image"
                  ></img>

                  <div className="absolute bg-gray-900 px-1 py-0.5 -top-2 -left-2 text-gray-100 font-bold">
                    04
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-600">Build</p>
                  <h4 className="font-bold text-xl mt-2">Final Production</h4>
                  <p className="text-gray-600 font-medium mt-2">
                    Deliver, deploy, and support seamless operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
