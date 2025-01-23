import Link from "next/link";
import React, { useState } from "react";
import Header from "./Header";
import Image from "next/image";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: "1",
    question: "Why Choose WeCodeThat?",
    para_1:
      "WeCodeThat is your partner in transforming ideas into reality. With a team of experienced developers, designers, and strategists, we prioritize delivering high-quality solutions tailored to your unique needs. Whether you're a startup or an established business, we bring your vision to life with speed, precision, and creativity.",
    answer: [],
    para_2: "",
  },
  {
    id: "2",
    question: "How Can We Help You?",
    para_1: "We specialize in:",
    answer: [
      "Custom Web and Mobile App Development",
      "UI/UX Design to create stunning user experiences",
      "MVP Development for startups to launch faster",
      "E-commerce Solutions to boost your online sales",
      "Ongoing Maintenance and Support for your projects",
    ],
    para_2: "From ideation to execution, we’re here to make it happen.",
  },
  {
    id: "3",
    question: "What Makes Us Different?",

    answer: [
      <>
        <strong>Collaborative Approach:</strong> We work with you every step of
        the way.
      </>,
      <>
        <strong>End-to-End Services:</strong> From strategy to deployment, we
        cover it all.
      </>,
      <>
        <strong>Scalable Solutions:</strong> Our solutions grow with your
        business.
      </>,
      <>
        <strong>Commitment to Excellence:</strong> Quality is at the heart of
        what we do.
      </>,
    ],
  },
  {
    id: "4",
    question: "How Do We Work?",
    answer: [
      <>
        <strong>Understanding Your Needs:</strong> We start by discussing your
        goals and challenges.
      </>,
      <>
        <strong>Strategic Planning:</strong> Our experts create a roadmap
        tailored to your project.
      </>,
      <>
        <strong>Seamless Execution:</strong>Using agile methodologies, we build,
        test, and refine.
      </>,
      <>
        <strong>Ongoing Support:</strong> We ensure everything runs smoothly
        post-launch.
      </>,
    ],
  },
];

const FAQ = () => {
  const [openFaqId, setOpenFaqId] = useState(null); // Track the open FAQ by its ID

  const toggleFaq = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id)); // Toggle the clicked FAQ
  };

  return (
    <div className="p-4">
      <div className="mx-auto">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white mt-4 py-4 px-4">
                <dt>
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="group flex w-full items-start justify-between text-left text-gray-900"
                  >
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className={`size-6 ${
                          openFaqId === faq.id ? "hidden" : "block"
                        }`}
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className={`size-6 ${
                          openFaqId === faq.id ? "block" : "hidden"
                        }`}
                      />
                    </span>
                  </button>
                </dt>
                {openFaqId === faq.id && (
                  <dd className="mt-2 pr-12 space-y-4">
                    <p className="text-base/7 text-gray-600">{faq.para_1}</p>
                    <ul className="list-disc ml-10 space-y-2">
                      {faq.answer.map((item, index) => (
                        <li
                          key={`${faq.id}-${index}`}
                          className="text-base/7 text-gray-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-base/7 text-gray-600">{faq.para_2}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <>
      <div
        className="relative w-full bg-cover bg-center pb-52"
        style={{
          backgroundImage: "url('/whatweare/bg-01.jpg')",
        }}
      >
        <div className="bg-gray-900 absolute inset-0 opacity-80 transition duration-300 ease-in-out"></div>
        <div className="pt-24 relative max-w-4xl mx-auto">
          <Header
            alignment="text-center"
            title="Web solutions allows your business to increase productivity!"
            subtitle="What We are"
            titleCss="text-gray-100"
          />
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-24 relative">
              <div className="rounded-xl px-8 py-2 bg-slate-100">
                <FAQ />
              </div>
              <div className="hidden md:block image-hover">
                <img
                  className="w-full h-auto rounded-xl"
                  src="/whatweare/bg-02.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
