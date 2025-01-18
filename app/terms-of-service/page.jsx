"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import { useRef, useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

import FooterBlock from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ScrollToTop from "../components/ScrollToTop";

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
      <PageHeader title="Terms and Conditions" />
      <div className="container mx-auto px-4 md:px-8 mt-12">
        <div className="max-w-7xl ">
          <div className="prose lg:prose-lg prose-slate mx-auto my-16 text-">
            <h2>Introduction</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium.
            </p>
            <p>
              Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Duis aute irure dolor in reprehenderit moditempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem in
              reprehenderit moditempora incidunt ut labore et dolore.
            </p>

            <h2>Use of user information.</h2>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Duis aute irure dolor in
              reprehenderit moditempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem in reprehenderit moditempora incidunt
              ut labore et dolore ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>

            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Duis aute irure dolor in reprehenderit moditempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem in
              reprehenderit moditempora incidunt ut labore et dolore.
            </p>

            <h2>Disclosure of user information.</h2>
            <p>
              Quasi architecto beatae vitae dicta sunt explicabo. Duis aute
              irure dolor in reprehenderit moditempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem in reprehenderit
              moditempora incidunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
      <FooterBlock />
      <ScrollToTop percentage={scrollPercentage} />
    </div>
  );
};

export default page;
