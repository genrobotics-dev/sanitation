
"use client";
import { useState, useEffect } from "react";
function Hero10() {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowIndicator(window.scrollY > 0);
      if (scrollY > 50 && showIndicator) setShowIndicator(false);


    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="careers_sec pointer-events-none">
      <div className="careers_banner_content">
        <div className="container pointer-events-auto">
          <h1>Join Our Mission</h1>
          <p>
            Be a part of a team that's transforming communities and saving lives
            through robotics and AI.<br /> Your work can create a real-world
            impact.
          </p>
          <a href="#positions" className="careers_btn">
            View Open Positions
          </a>
        </div>
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
    </section>
  );
}

export default Hero10;
