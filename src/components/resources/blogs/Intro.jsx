"use client";

import React, { useState, useEffect } from "react";

const Intro = () => {
  const [showIndicator, setShowIndicator] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50 && showIndicator) setShowIndicator(false);

      // Fade-out effect
      const fadeEnd = 400; // distance in px where fade completes
      const newOpacity = Math.max(1 - scrollY / fadeEnd, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showIndicator]);

  return (
    <div
      className="blog_intro fixed inset-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden z-10 pointer-events-none"
      style={{ opacity }}
    >
      <div className="relative z-20 max-w-3xl px-6 text-center pointer-events-auto">
        <h1 className="font-anton text-5xl md:text-7xl">
          Our Blog
        </h1>
        <h4 className=" text-justify md:text-center mt-4 text-base md:text-lg">
          Insights, stories, and deep dives into the technology and mission
          {/* driving the sanitation revolution. */}
        </h4>
      </div>

      {/* Scroll Down Indicator */}
      {showIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-3xl animate-bounce">
            &#8595;
          </span>
          <span className="text-sm">Scroll Down</span>
        </div>
      )}
    </div>
  );
};

export default Intro;
