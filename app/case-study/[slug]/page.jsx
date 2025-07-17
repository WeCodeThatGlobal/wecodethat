"use client";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { useRef, useEffect, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import FooterBlock from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import blogData from "../../case-study-data/data";

import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

const page = ({ params }) => {
  const box = useRef(null);
  const scrollPosition = useScrollPosition();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const post = blogData.find((p) => p.slug === params.slug);

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
        <div className="min-h-screen w-full bg-[#020617] relative overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139,92,246,0.4), transparent)`,
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            className="absolute bottom-0 right-0 z-10 rotate-180"
            style={{ width: "100%", height: "auto" }}
          >
            <path d="M0 0v100S500 4 1000 4V0H0Z" fill="#FFFFFF" />
          </svg>
          <div className="h-[80vh] flex flex-col justify-center items-center w-1/2 mx-auto">
            <h1 className="text-[#ffffff] text-center text-6xl/tight tracking-tight font-medium">
              {post.title}
            </h1>
            <div className="flex gap-x-3 items-center  mt-5">
              <div className="w-2 h-2 rounded-full bg-[#ffffff]"></div>
              <span className="text-[#ffffff]">{post.date}</span>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[300px] mx-auto relative z-20">
          <div className="absolute w-full top-0 -translate-y-2/4 rounded-xl overflow-hidden">
            <div className="block w-full h-full ">
              <img
                src="/images/group-of-business-consultant-working-management-big-data-and-analyze-financial-document-of-company.webp"
                alt=""
                className="object-cover"
              />
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
