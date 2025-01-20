import Link from "next/link";
import React from "react";
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
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: "2",
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

const FAQ = () => {
  return (
    <div className="">
      <div className="mx-auto">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="space-y-6 ">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.id}
                as="div"
                className="bg-white mt-4 py-4 px-4"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-[&:not([data-open])]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
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
