"use client";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from "react";
import "./Hero.css";
import { Navbar } from "./Navbar";

const posts = [
  {
    image: "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/slide-01.jpg",
    text: "Welcome to Slide 1",
  },
  {
    image: "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/slide-02.jpg",
    text: "Explore Slide 2",
  },
  {
    image: "https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/slide-03.jpg",
    text: "Discover Slide 3",
  },
];

export default function Hero() {
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
      <Navbar />
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
              <div className="slide-text">
                <h2>{post.text}</h2>
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
