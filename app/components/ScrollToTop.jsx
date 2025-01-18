import React, { useState, useEffect } from 'react';

const ScrollToTop = ({percentage}) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) { // Show the button after 200px of scrolling
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const buttonStyle = {
    background: `conic-gradient(rgb(37, 99, 235) ${percentage}%, rgb(31, 39, 50) ${percentage}%)`,
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        style={buttonStyle}
        className="scroll-to-top fixed bottom-10 right-10 bg-blue-500 text-white rounded-full p-2 text-xl w-12 h-12 z-50"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
