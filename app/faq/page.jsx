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

const web_development = [
  {
    id: "1",
    question: "What is custom web development?",
    answer:
      "Custom web development involves creating websites tailored specifically to your business needs, ensuring a unique design and functionality.",
  },
  {
    id: "2",
    question: "How long does it take to develop a custom website?",
    answer:
      "Development timelines vary depending on the complexity of the project, but most websites take 4-12 weeks to complete.",
  },
  {
    id: "3",
    question: "Can you help with redesigning an existing website?",
    answer:
      "Yes, we specialize in redesigning and enhancing existing websites to improve performance, design, and functionality.",
  },
  {
    id: "4",
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely! We offer maintenance and support packages to ensure your website stays updated and performs optimally.",
  },
  {
    id: "5",
    question: "What technologies do you use for web development?",
    answer:
      "We work with modern frameworks and technologies like React, Angular, Vue.js, Node.js, PHP, and more.",
  },
];

const e_commerce = [
  {
    id: "1",
    question: "What types of e-commerce platforms do you work with?",
    answer:
      "We work with popular platforms like Shopify, WooCommerce, Magento, and custom-built solutions.",
  },
  {
    id: "2",
    question:
      "Can you integrate third-party tools like payment gateways and shipping APIs?",
    answer:
      "Yes, we can integrate various third-party tools, including payment gateways, shipping solutions, and analytics tools.",
  },
  {
    id: "3",
    question: "Do you offer multi-language or multi-currency support?",
    answer:
      "Yes, we can build e-commerce platforms that cater to global audiences with multi-language and multi-currency functionality.",
  },
  {
    id: "4",
    question: "Will my e-commerce site be mobile-friendly?",
    answer:
      "Absolutely! We ensure all e-commerce sites are fully responsive and optimized for mobile devices.",
  },
  {
    id: "5",
    question: "Can you help with SEO for my online store?",
    answer:
      "Yes, we provide SEO services to help improve the visibility and ranking of your e-commerce store.",
  },
];

const digitalMarketingQ = [
  {
    id: "1",
    question: "What digital marketing services do you offer?",
    answer:
      "We provide SEO, social media marketing, PPC campaigns, email marketing, content marketing, and more.",
  },
  {
    id: "2",
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Results depend on the strategy. For example, SEO may take 3-6 months, while PPC can yield immediate results.",
  },
  {
    id: "3",
    question: "Can you handle social media accounts for my business?",
    answer:
      "Yes, we offer social media management, including content creation, posting, and engagement strategies.",
  },
  {
    id: "4",
    question: "Do you provide performance reports?",
    answer:
      "Yes, we provide regular reports to track the performance of your campaigns and suggest improvements.",
  },
  {
    id: "5",
    question: "Can you create custom marketing strategies for my business?",
    answer:
      "Absolutely! We tailor every digital marketing strategy to align with your specific business goals and target audience.",
  },
];

const mobileAppQ = [
  {
    id: "1",
    question: "What platforms do you develop mobile apps for?",
    answer:
      "We develop apps for iOS, Android, and cross-platform solutions like React Native and Flutter.",
  },
  {
    id: "2",
    question: "How long does it take to develop a mobile app?",
    answer:
      "The timeline depends on the app's complexity, typically ranging from 3-6 months.",
  },
  {
    id: "3",
    question: "Can you help with app design and user experience (UX)?",
    answer:
      "Yes, we focus on creating intuitive and engaging app designs to enhance the user experience.",
  },
  {
    id: "4",
    question: "Do you provide support for app updates and maintenance?",
    answer:
      "Yes, we offer ongoing support, including updates, bug fixes, and feature enhancements.",
  },
  {
    id: "5",
    question: "Can you integrate APIs and third-party tools into the app?",
    answer:
      "Yes, we can integrate APIs, third-party tools, and other services as required by your app.",
  },
];

const project_initiation = [
  {
    id: "1",
    question: "How do we start a project with WeCodeThat?",
    answer:
      "To start, simply contact us with your project requirements. We'll schedule a consultation to understand your needs, after which we'll provide a detailed proposal.",
  },
  {
    id: "2",
    question: "What information do you need to begin?",
    answer:
      "We need a clear outline of your requirements, goals, budget, and timeline. Any design references or technical preferences are also helpful.",
  },
  {
    id: "3",
    question: "Do you provide a project roadmap?",
    answer:
      "Yes, once the project is confirmed, we provide a detailed roadmap, including milestones, timelines, and deliverables.",
  },
];

const paymentDetails = [
  {
    id: "1",
    question: "What is your payment structure?",
    answer:
      "Typically, we require an advance payment of 30% before starting the project. The remaining payments are tied to project milestones or deliverables.",
  },
  {
    id: "2",
    question: "What payment methods do you accept?",
    answer:
      "We accept payments via bank transfer, credit cards, and online payment gateways such as PayPal.",
  },
  {
    id: "3",
    question: "Is the advance payment refundable?",
    answer:
      "Advance payments are generally non-refundable, as they cover the initial planning and resources. Exceptions may be discussed based on the situation.",
  },
];

const projectTimeline = [
  {
    id: "1",
    question: "How long does a typical project take?",
    answer:
      "The timeline depends on the project’s complexity. Small projects may take 4-6 weeks, while larger ones can take several months.",
  },
  {
    id: "2",
    question: "Will I be updated on the project progress?",
    answer:
      "Yes, we provide regular updates through meetings, reports, or access to our project management tools.",
  },
  {
    id: "3",
    question: "How do you ensure timely delivery?",
    answer:
      "We follow a structured project management process, including milestone tracking and regular reviews, to ensure on-time delivery.",
  },
];

const postDeliverySupport = [
  {
    id: "1",
    question: "Do you offer post-delivery support?",
    answer:
      "Yes, we provide support packages for maintenance, updates, and issue resolution after the project is delivered.",
  },
  {
    id: "2",
    question: "What if I need new features after the project is complete?",
    answer:
      "We can discuss and implement additional features as part of a new project phase or a separate agreement.",
  },
];

const revisionsFeedback = [
  {
    id: "1",
    question: "Can I request changes during the project?",
    answer:
      "Yes, changes can be requested. However, significant changes outside the initial scope may affect the timeline and cost.",
  },
  {
    id: "2",
    question: "How many revisions do you offer?",
    answer:
      "We include 3 rounds of revisions as part of the initial scope. Additional revisions can be discussed separately.",
  },
];

const FAQ = ({ faq }) => {
  return (
    <div>
      <div className="mx-auto">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="space-y-6 ">
            {faq.map((faq) => (
              <Disclosure
                key={faq.id}
                as="div"
                className="bg-slate-100 mt-4 py-4 px-4 rounded-xl"
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
          <div className="px-8 py-2 mb-5">
            <div className="mb-10">
              <Header
                alignment="text-center"
                title="Custom Web Development"
                subtitle="FAQ"
              />
            </div>
            <FAQ faq={web_development} />
          </div>
          <div className="px-8 py-2 mb-10">
            <h2
              className={`leading-tight mt-6 font-bold text-center text-4xl mb-10`}
            >
              E-Commerce Solutions
            </h2>
            <FAQ faq={e_commerce} />
          </div>
          <div className="px-8 py-2 mb-10">
            <h2
              className={`leading-tight mt-6 font-bold text-center text-4xl mb-10`}
            >
              Digital Marketing
            </h2>
            <FAQ faq={digitalMarketingQ} />
          </div>
          <div className="px-8 py-2 mb-10">
            <h2
              className={`leading-tight mt-6 font-bold text-center text-4xl mb-10`}
            >
              Mobile App Development
            </h2>
            <FAQ faq={mobileAppQ} />
          </div>
          <div className="px-8 py-2 mb-10">
            <h2
              className={`leading-tight mt-6 font-bold text-center text-4xl mb-5`}
            >
              FAQs for Project Process and Payment
            </h2>
            <h4 className="font-bold text-xl mb-10 text-center">
              Project Initiation
            </h4>
            <FAQ faq={project_initiation} />
          </div>
          <div className="px-8 py-2 mb-10">
            <h4 className="font-bold text-xl mb-10 text-center">
              Payment Terms
            </h4>
            <FAQ faq={paymentDetails} />
          </div>
          <div className="px-8 py-2 mb-10">
            <h4 className="font-bold text-xl mb-10 text-center">
              Project Timeline & Delivery
            </h4>
            <FAQ faq={projectTimeline} />
          </div>
          <div className="px-8 py-2 mb-10">
            <h4 className="font-bold text-xl mb-10 text-center">
              Revisions and Feedback
            </h4>
            <FAQ faq={revisionsFeedback} />
          </div>
          <div className="px-8 py-2 mb-10">
            <h4 className="font-bold text-xl mb-10 text-center">
              Post-Delivery Support
            </h4>
            <FAQ faq={postDeliverySupport} />
          </div>
        </div>
      </div>
      <FooterBlock />
      <ScrollToTop percentage={scrollPercentage} />
    </div>
  );
};

export default page;
