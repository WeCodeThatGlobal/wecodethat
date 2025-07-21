"use client";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { useRef, useEffect, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import FooterBlock from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

const challengeList = [
  `Aggregating thousands of fragmented mechanics while protecting service quality.`,
  `Balancing a two-sided onboarding flow (some users act as both customer and expert).`,
  `Handling variable job pricing—every vehicle, fault, and location can change the estimate.`,
  `Guaranteeing OTP login and UPI/Card payments even on low-bandwidth connections.`,
  `Meeting India’s DPDP data-privacy requirements from day 1.`,
];

const approachList = [
  `Conducted interviews with over 40 vehicle owners and 30+ mechanics across metro and tier-2 cities`,
  `Mapped complete service lifecycles to identify friction points and automation opportunities`,
  `Prioritized MVP flows that worked under low-bandwidth and low-device-performance conditions`,
  `Iteratively rolled out and refined features like slot booking, estimate builders, and payout flows based on live user feedback`,
  `Used microservices and modular design to enable rapid, isolated updates without platform-wide disruptions`,
];

const solutionList1 = [
  `Micro-services split by auth, catalog, bookings, payments, and notifications for easier scaling.`,
  `Stateless REST APIs secured by short-lived JWT tokens issued after OTP verification.`,
  `Event-driven job matching using Kafka for dynamic assignment based on vehicle, location, and availability.`,
  `Media store + CDN for pre-/post-service photos to aid dispute resolution while keeping apps lightweight.`,
];
const solutionList2 = [
  `One-hand navigation with familiar bottom-tab patterns.`,
  `Dynamic forms surface only relevant fields, reducing first-time entry to <45 seconds.`,
  `Contextual nudges boost profile completeness to 92% after three sessions.`,
];
const solutionList3 = [
  `OTP login, multi-vehicle wallet, and address book.`,
  `Search, category browse, smart filters (availability, rating, price).`,
  `Cart with GST calculation, service add-ons, and slot scheduler.`,
  `Real-time service timeline and push/SMS alerts.`,
  `Secure payments via UPI, Card, or Pay After Service.`,
  `Rating, review, and complete service history.`,
];
const solutionList4 = [
  `KYC upload (PAN/Aadhaar) and verification.`,
  `Availability toggle, service radius, and vehicle-type preferences.`,
  `Job-offer cards with auto-decline countdown.`,
  `Estimate builder, QR-code payments, and gated workflow for pre/post photos.`,
  `Earnings dashboard and simple payout requests.`,
];
const solutionList5 = [
  `KPI dashboard for jobs, users, GMV, ratings.`,
  `KYC/user management with audit trail.`,
  `CMS for service catalog and price controls.`,
  `Dispute resolution center and payout automation.`,
  `Configurable commissions by city, category, or rating.`,
];
const solutionList6 = [
  `TLS 1.2+ enforced on all traffic.`,
  `AES-256 encryption for PII at rest via AWS KMS.`,
  `Role-based API gateway with VPN + MFA for admin routes.`,
  `PCI-DSS certified payment gateway integration.`,
  `DPDP-aligned privacy features like right-to-delete and data export.`,
];

const techStackList = [
  {
    key: "Backend",
    value: "Microservices architecture using REST APIs, JWT, Kafka",
  },
  {
    key: "Frontend",
    value: "Mobile-first design with dynamic forms, bottom-tab navigation",
  },
  {
    key: "Security",
    value: "TLS 1.2+, AES-256 encryption, PCI-DSS-compliant payment processing",
  },
  { key: "Storage & Media", value: "AWS KMS, CDN-backed media store" },
  {
    key: "Analytics/Admin",
    value: "Custom KPI dashboard, CMS, automated payouts",
  },
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
const futureRoadmap = [
  `Live mechanic tracking on a map`,
  `Parts inventory integrations`,
  `Loyalty programs for customers and mechanics`,
  `In-app chat with photo annotations for estimate clarity`,
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
              <h1 className="text-[#ffffff] text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tight font-ibm leading-tight mb-16">
                From Booking to Bumper Powering <br /> Mobile Car-Repair
                Marketplace
              </h1>
            </div>
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] mx-auto overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/caseStudy/veegokit.png"
                  alt="Screenshot of the One Call Tax website"
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
              VeeGoKit set out to eliminate the friction vehicle owners face
              when booking trustworthy repairs while giving independent
              mechanics a predictable job pipeline. The founders envisioned a
              single mobile marketplace that would cover discovery, booking,
              execution, payment, and feedback inside one polished experience.
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot-icon lucide-dot"
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

            <p className="flex items-center gap-x-1">
              To solve the diverse and complex needs across user types, we
              followed a product-led, feedback-driven development strategy.
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
              <strong>Architecture Highlights:</strong>
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
              <strong>Mobile UX Principles:</strong>
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
            <p className="flex items-center gap-x-1 ">
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
              <strong>Core Functionality Delivered:</strong>
            </p>
            <div className="pl-5 space-y-5">
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
                <strong>Customer App:</strong>
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
                <strong>Mechanic App:</strong>
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
                <strong>Admin Portal:</strong>
              </p>
              <ul className="pl-5 space-y-2">
                {solutionList5.map((item, index) => (
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
                <strong>Security & Compliance:</strong>
              </p>
              <ul className="pl-5 space-y-2">
                {solutionList6.map((item, index) => (
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
            </div>
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
                — VeeGoKit Management Team
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
                  <span>
                    <strong>{tech.key}:</strong> {tech.value}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Business Impact */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Ongoing Engagement:</h2>
            <ul className="pl-5 space-y-2">
              {futureRoadmap.map((item, index) => (
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
        </div>

        <FooterBlock />
        <ScrollToTop percentage={scrollPercentage} />
      </div>
    </div>
  );
};

export default page;
