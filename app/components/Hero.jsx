"use client";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from "react";
import "./Hero.css";
import { Navbar } from "./Navbar";

const posts = [
  {
    image: "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/slide-01.jpg",
    text: "Creative Design",
    subtitle: "Strategic . Innovate . Excellence"
  },
  {
    image: "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/slide-02.jpg",
    text: "We Code That",
    subtitle: "Strategic . Innovate . Excellence"
  },
  {
    image: "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/slide-03.jpg",
    text: "Empower Elevate",
    subtitle: "Strategic . Innovate . Excellence"
  },
];

export default function Hero({showStickyNav}) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div className="hero-container">
      <Navbar showStickyNav={showStickyNav}/>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {posts.map((post, idx) => (
            <div className="embla__slide" key={idx}>
              <div className="image-overlay">
                <Image
                  src={post.image}
                  layout="fill"
                  objectFit="cover"
                  alt={`Slide ${idx + 1}`}
                  placeholder="blur"
                  blurDataURL={post.image}
                />
              </div>
              <div className="slide-text px-4">
                <h4 className="text-base md:text-xl font-bold text-blue-600 mb-1">{post.subtitle}</h4>
                <h2 className="text-5xl md:text-7xl font-bold">{post.text}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            className={`embla__dot ${idx === selectedIndex ? "is-active" : ""}`}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
