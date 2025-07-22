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

// DotIcon Component
const DotIcon = () => (
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
);

// Arrays
const objectives = [
  "Centralize all chess coaching tools into one intuitive platform",
  "Enable lesson delivery, attendance tracking, homework, and live gameplay",
  "Provide rich student performance insights and engagement tools",
  "Design with scalability for both solo coaches and large academies",
  "Ensure seamless cross-device (mobile & desktop) usage",
];

const challenges = [
  "Coaches using fragmented tools (Zoom, Google Sheets, PDFs)",
  "Lack of structured progress tracking or performance feedback",
  "No white-label or branding options for academies",
  "Need for real-time multiplayer boards with classroom controls",
  "Varying tech-literacy across user base (kids, parents, coaches)",
];

const approach = [
  "Conducted interviews with over 25 coaches from 5+ countries",
  "Prototyped lesson flows and student journeys using Figma",
  "Built with scalability in mind — from 1-on-1 lessons to 100+ student batches",
  "Used modular architecture to roll out features rapidly based on usage feedback",
];

const solution = {
  coaches: [
    "Live Classroom with PGN/FEN board, timers, and leaderboards",
    "Lesson planner with pre-built curriculum and homework",
    "Quiz builder with auto-grading",
    "Attendance and performance analytics dashboard",
    "In-class engagement tools (polls, interactive moves)",
  ],
  students: [
    "Personalized dashboard with lesson history and upcoming sessions",
    "Homework with progress tracking",
    "Play with Computer (built-in engine)",
    "Gamified elements like points, badges, and rankings",
  ],
  platform: [
    "Web & mobile responsive dashboard",
    "Custom branding and subdomains for academies",
    "Multi-language support",
    "Role-based access (Coach, Admin, Parent, Student)",
    "Secure video class integration (Zoom/Jitsi APIs)",
  ],
};

const techStack = [
  "Next.js (Frontend)",
  "Node.js + Express (Backend API)",
  "PostgreSQL (Database)",
  "Redis (Session caching)",
  "WebSocket (Real-time gameplay)",
  "Figma (UI/UX)",
  "Firebase (Notifications & Authentication)",
];

const ongoing = [
  "AI-based feedback on games and lessons",
  "Parent Portal with fee tracking and attendance reports",
  "Android & iOS apps in roadmap",
  "Multi-coach session support and class recordings",
  "API for LMS integrations",
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
                The All-in-One LMS Built For Chess <br /> Coaches, With Chess
                Coaches
              </h1>
            </div>
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] mx-auto overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/caseStudy/chessplay.png"
                  alt="Screenshot of the ChessPlay.io application dashboard"
                  className="object-contain w-full h-full max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="font-ibm px-5 pb-14 w-full md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto space-y-8 mt-[120px] md:mt-[220px] lg:mt-[300px] xl:mt-[350px] text-[#1e1a1c] text-left">
          {/* Project Overview */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Project Overview:</h2>
            <p>
              ChessPlay.io was born out of a need to streamline how chess
              coaches and academies manage lessons, track progress, and engage
              students. Traditional methods like WhatsApp, spreadsheets, and
              disconnected platforms made it difficult to scale or deliver a
              unified learning experience.
            </p>
            <p>
              WeCodeThat set out to build a dedicated, all-in-one coaching
              solution that would cater specifically to the needs of chess
              instructors, students, and academy managers—complete with live
              lessons, tracking, assessments, and analytics.
            </p>
          </section>

          {/* Objectives */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Objectives:</h2>
            <ul className="pl-5 space-y-2">
              {objectives.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <DotIcon /> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Challenges:</h2>
            <ul className="pl-5 space-y-2">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <DotIcon /> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Our Approach */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Our Approach:</h2>
            <p>
              To address user diversity and complexity, we took a product-led,
              feedback-driven development route.
            </p>
            <ul className="pl-5 space-y-2">
              {approach.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <DotIcon /> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* The Solution */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">The Solution:</h2>
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
              <strong>For Coaches:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {solution.coaches.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <DotIcon /> {item}
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
              <strong>For Students:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {solution.students.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <DotIcon /> {item}
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
              <strong>Platform Features:</strong>
            </p>
            <ul className="pl-5 space-y-2">
              {solution.platform.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <DotIcon /> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Testimonial */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">What Our Users Say:</h2>
            <blockquote className="italic border-l-4 border-gray-400 pl-4">
              “We finally stopped juggling tools. ChessPlay.io gave us
              everything we needed to teach better, track growth, and focus on
              what matters our students.”
              <br />
              <span className="block font-semibold mt-2">
                — Lakshmanan Arumugam, Head Coach, Achievers Chess Academy
              </span>
            </blockquote>
          </section>

          {/* Tech Stack */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Tech Stack:</h2>
            <ul className="pl-5 space-y-2">
              {techStack.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <DotIcon /> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Ongoing Dev */}
          <section className="space-y-5">
            <h2 className="text-lg font-bold">Ongoing Development:</h2>
            <ul className="pl-5 space-y-2">
              {ongoing.map((item, index) => (
                <li key={index} className="flex items-start gap-x-1">
                  <DotIcon /> {item}
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
