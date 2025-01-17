import Link from "next/link";
import React from "react";
import Header from "./Header";

const WhatWeDo = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div></div>
          <div>
            <Header
              alignment="text-left"
              title="We offer the best design and development services!
"
              subtitle="What We Do"
            />
            <div className="text-gray-600 mt-8 font-medium leading-loose">
              <p className="">
                Our objective is to offer a high-quality service and a
                dependable source of income to our investors while
                simultaneously minimizing any potential risks and automating and
                simplifying the relationships.
              </p>
              <ul className="mt-8 font-bold text-sm space-y-4">
                <li> Provide Web Design & Development</li>
                <li> We Provide Logo Design & Copywriting</li>
                <li>Best Website Support & Consultations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
