"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import { useRef, useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import Header from "../components/Header";
import FooterBlock from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ScrollToTop from "../components/ScrollToTop";

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

const page = () => {
  const box = useRef(null);
  const scrollPosition = useScrollPosition();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const percentage =
        scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0;
      setScrollPercentage(percentage);
    };

    updateScrollPercentage();
  }, [scrollPosition]);

  return (
    <div ref={box}>
      <Navbar />
      <PageHeader title="FAQ" />
      <div className="container mx-auto px-4 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto my-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="hidden md:block image-hover">
              <img
                className="w-full h-auto rounded-xl"
                src="/whatweare/bg-02.jpg"
              />
            </div>

            <div className="rounded-xl px-8 py-2 bg-slate-100">
              <Header
                alignment="text-left"
                title="FAQs for Custom Web Development"
                subtitle="FAQ"
              />
              <FAQ />
            </div>
          </div>
        </div>
      </div>
      <FooterBlock />
      <ScrollToTop percentage={scrollPercentage} />
    </div>
  );
};

export default page;
