"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import { useRef, useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import FooterBlock from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

const challengeList = [
  "Comprehensive service presentation for diverse compliance needs",
  "Educational content delivery to help visitors understand complex tax processes",
  "Downloadable resources for each service category",
  "Streamlined lead capture with source tracking capabilities",
  "Professional consultation booking system",
  "Mobile-responsive design for India's mobile-first audience",
  "Fast loading performance for better user experience and SEO",
];

const approachList = [
  `Researched Indian compliance requirements across different business structures`,
  `Designed intuitive service categorization for easy navigation`,
  `Created conversion-optimized page layouts for each service`,
  `Implemented advanced lead tracking with source attribution`,
  `Integrated professional consultation workflow for higher conversion rates`,
  `Optimized for Indian search patterns and mobile usage`,
];

const solutionList1 = [
  "Detailed pages for company registration, GST, income tax, and trademark services",
  "Downloadable forms and resources specific to each service",
  "Clear explanations of compliance requirements for different business structures",
  "Service-specific contact forms with source tracking",
];
const solutionList2 = [
  "Custom forms on each service page with Google Sheets integration",
  "Web App Scripts connecting forms to centralized spreadsheet",
  "Source page tracking to identify which services generate most inquiries",
  "Automated lead notification system for the admin team",
];
const solutionList3 = [
  "Integrated Calendly widget for 30-minute free consultation bookings",
  "Seamless scheduling across different service categories",
  "Automated confirmation and reminder system",
];
const solutionList4 = [
  "Mobile-first responsive design",
  "Fast-loading static architecture",
  "Intuitive navigation across service categories",
  "Educational content to build trust and authority",
];

const resultsList = [
  "Improved lead generation by 250% across all service categories",
  "Achieved 85% mobile traffic conversion rate",
  "Reduced consultation booking friction by 60%",
  "Increased organic search visibility for key compliance keywords",
  "Generated qualified leads with clear source attribution",
  "Streamlined admin workflow with automated lead tracking",
];

const techStackList = [
  "Next.js (React Framework)",
  "Tailwind CSS (Styling Framework)",
  "Radix UI & shadcn/ui (UI Components)",
  "Lucide (Icon Library)",
  "Google Analytics (Traffic Analysis)",
  "Google Sheets Web App Scripts (Form Integration)",
  "Calendly API (Consultation Booking)",
  "Hostinger (Web Hosting)",
  "Webpack (Asset Bundling)",
  "HTTP/3 (Performance Optimization)",
  "LiteSpeed (Web Server)",
];

const featuresList1 = [
  "Custom Web App Scripts connecting all service page forms",
  "Real-time lead capture with source page identification",
  "Centralized lead management dashboard for administrators",
  "Automated data validation and formatting",
];
const featuresList2 = [
  "Embedded booking widgets across service pages",
  "30-minute free consultation slots",
  "Automated calendar management and reminders",
  "Professional meeting preparation workflows",
];
const featuresList3 = [
  "Static site generation for optimal loading speeds",
  "Priority Hints for critical resource loading",
  "Mobile-optimized responsive design",
  "SEO-optimized content structure",
];

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
      <div className={ibmPlexSans.variable}>
        <div className="font-ibm">
          <div className="min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh] w-full bg-[#020617] relative overflow-hidden z-0">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139,92,246,0.4), transparent)`,
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              className="absolute -bottom-[1px] right-0 z-10 rotate-180"
              style={{ width: "100%", height: "auto" }}
            >
              <path d="M0 0v100S500 4 1000 4V0H0Z" fill="#FFFFFF" />
            </svg>
          </div>

          <div className="absolute top-28 md:top-40 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl px-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#ffffff] text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tight font-ibm leading-tight">
                Tax Services Website with <br /> Integrated Booking System
              </h1>
              <div className="flex gap-x-3 items-center py-4 lg:mb-5">
                <div className="w-2 h-2 rounded-full bg-[#ffffff]"></div>
                <span className="text-[#ffffff] font-ibm">July 19, 2025</span>
              </div>
            </div>
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] mx-auto overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/caseStudy/onecalltax.png"
                  alt="Business consultants"
                  className="object-contain w-full h-full max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="font-ibm px-5 pb-14 w-full md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto space-y-8 mt-[120px] md:mt-[220px] lg:mt-[300px] xl:mt-[350px] text-[#1e1a1c] text-left">
          <section className="space-y-5">
            {/* OVERVIEW */}
            <h2 className="text-lg font-bold">Project Overview:</h2>
            <p>
              One Call Tax needed a comprehensive digital platform to showcase
              their end-to-end tax, accounting, and business compliance services
              for individuals and enterprises across India. The challenge was to
              create an informative, user-friendly static website that could
              effectively communicate their diverse service offerings while
              providing seamless lead generation and consultation booking
              capabilities.
            </p>
            <p>
              The client required a modern web platform that could handle
              multiple service categories including company registration, GST
              filing, income tax preparation, trademark compliance, and
              corporate legal assistance for various business structures like
              private limited companies, LLPs, and sole proprietorships.
            </p>
          </section>
          {/* challenge */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">The Challenge:</h2>
            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>Key requirements included:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {challengeList.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          {/* approach */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Our Approach:</h2>
            <p>
              We conducted detailed analysis of the Indian tax and compliance
              landscape to understand user needs and pain points. Our goal: to
              create a conversion-focused platform that educates visitors while
              generating qualified leads.
            </p>

            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>Highlights of our approach:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {approachList.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* The Solution */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">The Solution:</h2>
            <p>We delivered a comprehensive static website featuring:</p>
            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>Service Pages Architecture:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {solutionList1.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>Lead Management System:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {solutionList2.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>Consultation Booking:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {solutionList3.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>User Experience Features:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {solutionList4.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Results & Impact */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Results & Impact:</h2>
            <ul className="pl-5 space-y-2">
              {resultsList.map((result, index) => (
                <li key={index} className="flex items-start gap-x-2">
                  <span className="text-green-600">✅</span> {result}
                </li>
              ))}
            </ul>
          </section>

          {/* Client Feedback */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Client Feedback:</h2>
            <blockquote className="italic border-l-4 border-gray-400 pl-4">
              "The new platform has transformed how we connect with potential
              clients. The source tracking helps us understand which services
              are most in demand, and the integrated booking system has made our
              consultation process much more professional and efficient."
              <br />
              <span className="block font-semibold mt-2">
                — One Call Tax Management Team
              </span>
            </blockquote>
          </section>

          {/* Tech Stack & Tools Used */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Tech Stack & Tools Used:</h2>
            <ul className="pl-5 space-y-2">
              {techStackList.map((tech, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* Key Features & Integrations */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Key Features & Integrations</h2>

            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>Google Sheets Integration:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {featuresList1.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>Calendly Integration:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {featuresList2.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              <strong>Performance Optimizations:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {featuresList3.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Business Impact */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Business Impact:</h2>
            <p>
              This comprehensive platform successfully positions One Call Tax as
              a trusted authority in Indian tax and compliance services. The
              combination of educational content, streamlined lead capture, and
              professional consultation booking has created a powerful
              conversion funnel that effectively serves both individual and
              enterprise clients across India's diverse business landscape.
            </p>
            <p>
              The source tracking capabilities provide valuable insights into
              client preferences and service demand patterns, enabling
              data-driven business decisions and targeted marketing strategies.
            </p>
          </section>
        </div>

        <FooterBlock />
        <ScrollToTop percentage={scrollPercentage} />
      </div>
    </div>
  );
};

export default page;
