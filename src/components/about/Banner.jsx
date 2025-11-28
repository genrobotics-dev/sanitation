import Image from "next/image";
import React from "react";

//import banner from "@/assets/about/banner.webp";

function Banner() {
  return (
    <div className="about_banner_sec">
      {/*<Image
        src={banner}
        width={0}
        height={0}
        alt="We are dedicated to designing and developing robotic solutions to address the most pressing social issues."
      />*/}
      <div className="content">
        <div className="mid_heading">
          <h1>
            It Started With <span>A History-Making Invention.</span>
          </h1>
        </div>
        <div className="mid_text">
          <p>
            Before Genrobotics Sanitation Tech existed, there was no safe way to clean a manhole.
            Millions of workers worldwide were forced to enter toxic sewers physically.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
