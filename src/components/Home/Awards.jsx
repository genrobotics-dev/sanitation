"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import img1 from "@/assets/awards/forbes_30_under_30.webp";
import img2 from "@/assets/awards/ai_gamechangers_award.webp";
import img3 from "@/assets/awards/swachhata_startup_challenge.webp";
import img4 from "@/assets/awards/young_changemaker_award.webp";
import img5 from "@/assets/awards/infosys_aarohan_social_innovation_award.webp";
import img6 from "@/assets/awards/amrut_technology_award.webp";
import img7 from "@/assets/awards/birac_social_impact_award.webp";
import img8 from "@/assets/awards/national_startup_award.webp";
import img11 from "@/assets/awards/pride_of_kerala.webp";
import img12 from "@/assets/awards/level_next_award.webp";
import img13 from "@/assets/awards/ficci_award_2019.webp";
import img14 from "@/assets/awards/asia_inspiration_award.webp";
import img15 from "@/assets/awards/anjali_mashelkar_inclusive_innovation_award.webp";

import Image from "next/image";
import { CustomNextArrow, CustomPrevArrow } from "../CustomArrows";

const awards = [
  {
    img: img2,
    title: "Recognized by MeitY as One of India’s Top 3 AI Startups",
    subtitle: "Celebrating our transformative impact on global urban sanitation.",
  },
  {
    img: img1,
    title: "Forbes 30 Under 30 Asia Recognition",
    subtitle: "For Bandicoot, transforming sanitation practices in India.",
  },
  {
    img: img3,
    title: "Awarded the Swachhata Startup Challenge, by the Government of India",
    subtitle: "Recognized for pioneering achievements in robotics automation.",
  },
  {
    img: img4,
    title: "Young Changemaker Honour from The Hindu BusinessLine",
    subtitle: "For inventing Bandicoot, the world’s first robotic scavenger.",
  },
  {
    img: img5,
    title: "Infosys Aarohan Award for Excellence in Social Innovation",
    subtitle: "For the revolutionary Bandicoot robot, eliminating manual scavenging.",
  },
  {
    img: img6,
    title: "Recipient of the AMRUT Tech Challenge Award",
    subtitle:
      "Recognized for Bandicoot’s innovative solution in sewer cleaning safety.",
  },
  {
    img: img7,
    title: "BIRAC Distinction in High-Impact Social Innovation",
    subtitle:
      "For Bandicoot & Bandicoot Mobility+ improving worker safety and sanitation",
  },
  {
    img: img8,
    title: "National Startup Award for the Best Campus-Initiated Startup",
    subtitle:
      "For Bandicoot, the world’s first manhole-cleaning robot."
  },
  // {
  //   img: img9,
  //   title: "Economic Times Distinction in Social Enterprise Innovation",
  //   subtitle: "For Promising Innovative Solution",
  // },
  {

    img: img11,
    title: "Pride of Kerala Award By the Govt of Kerala",
    subtitle: "Recognized by Kerala Startup Mission for Bandicoot’s impact.",
  },
  {
    img: img12,
    title: "Level Next Award – India Scale-Up Program",
    subtitle:
      "For demonstrating scalable, impactful innovation in robotics.",
  },
  {
    img: img13,
    title: "ISC FICCI Honour for Outstanding Corporate Initiative",
    subtitle:
       "For Bandicoot’s innovative approach to improving urban hygiene.",
  },
  {
    img: img14,
    title: "Asia Inspiration Award for Outstanding Contributions to Sanitation",
    subtitle:
      "For Bandicoot, providing a sustainable alternative to manual scavenging.",
  },
  {
    img: img15,
    title: "Anjani Mashelkar Award for Excellence in Inclusive Innovation",
    subtitle:
      "For Bandicoot, pioneering robotics solutions with high social impact.",
  },
];

function Awards() {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 1024 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      setActiveSliderIndex(current);
    },
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="recognitions_sec">
      <div className="container-fluid awards_container">
        <div className="lg:px-[4rem] ">
          <div className="rec_wrapper">
            <h1 className="title">Awards & Recognitions</h1>
            <p className="subtitle">
              Discover the tangible difference Genrobotics' solutions
            </p>
            <br />
            <Slider {...settings}>
              {awards.map((item, idx4) => {
                return (
                  <div className="slider_wrapper_sub" key={idx4}>
                    <div
                      className={
                        idx4 == activeSliderIndex
                          ? "card slider_card slick-center"
                          : "card slider_card"
                      }
                    >
                      <div className="image_wrapper">
                        <Image
                          src={item?.img}
                          alt={item?.title}
                          fill
                          className="image_inner"
                        />
                      </div>
                      <h3>{item?.title}</h3>
                      <p>{item?.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
