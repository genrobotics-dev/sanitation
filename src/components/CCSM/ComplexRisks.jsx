
"use client";

import React, { useState, useEffect } from "react";
import bg from "@/assets/services/consulting/complex_risks_image.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function ComplexRisks() {

  return (
    <section className="complex-risks_sec">
      <div className="container-fluid">
        <div className="lg:px-[2rem]">
          <div className="flex flex-col items-center text-center">
            <div className="lg:hidden why_bandicoot_content mb-6 w-full max-w-[900px] text-center">
              <h1>The Complex Risks of Confined Spaces</h1>
              <span className="block text-gray-600">
                Navigating Through the Reality of Confined Spaces Cleaning
              </span>
              <hr className="my-3 mx-auto w-[60%] border-gray-400" />
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="bandicoot_image_wrapper mb-6 flex-1">
                <LazyLoadImage
                  src={bg.src}
                  width={0}
                  height={0}
                  alt="Confined spaces cleaning image"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="hidden lg:block why_bandicoot_content mb-6 w-full max-w-[900px] text-center">
                  <h1>The Complex Risks of Confined Spaces</h1>
                  <span className="block text-gray-600">
                    Navigating Through the Reality of Confined Spaces Cleaning
                  </span>
                  <hr className="my-3 mx-auto w-[60%] border-gray-400" />
                </div>
                <div className="why_bandicoot_content">
                  <p>
                    Working in confined spaces—such as industrial tanks,
                    manholes, silos, and pipelines—is one of the most hazardous
                    activities across industries. The risks are numerous and
                    often invisible:
                  </p>
                  <ul>
                    <li>
                      <strong>Atmospheric Hazards:</strong> Presence of toxic
                      gases, flammable vapors, or lack of oxygen can be
                      instantly fatal.
                    </li>
                    <li>
                      <strong>Physical Hazards:</strong> Risk of engulfment by
                      materials, structural collapse, or entanglement with
                      machinery.
                    </li>
                    <li>
                      <strong>Regulatory Complexities:</strong> Navigating and
                      adhering to strict national and international safety
                      regulations (like OSHA standards) is a significant
                      challenge for many organizations.
                    </li>
                    <li>
                      <strong>Inefficient Procedures:</strong> Lack of proper
                      planning and reliance on outdated methods can lead to
                      accidents, operational delays, and non-compliance
                      penalties.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplexRisks;

{/*"use client";

import React from "react";
import bg from "@/assets/services/consulting/complex_risks_image.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ComplexRisks() {
  return (
    <section className="complex-risks_sec">
      <div className="container-fluid">
        <div className="lg:px-[80]">
          <div className="row px-[20px]">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-3 p-0">
              <div className="md:hidden why_bandicoot_content">
                <h1>The Complex Risks of Confined Spaces</h1>
                <p className="text-center">
                  Moving from Reactive Response to Proactive Management
                </p>
              </div>
              <div className="bandicoot_image_wrapper">
                <LazyLoadImage
                  src={bg.src}
                  width={0}
                  height={0}
                  alt="Bandicoot product image"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "0.1s" },
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-3 p-0">
              <div className="why_bandicoot_content">
                <div className="hidden md:inline">
                  <h1>The Complex Risks of Confined Spaces</h1>
                  <span>
                    Navigating Through the Reality of Confined Spaces Cleaning
                  </span>
                  <hr />
                </div>
                <p>
                  Working in confined spaces—such as industrial tanks, manholes,
                  silos, and pipelines—is one of the most hazardous activities
                  across industries. The risks are numerous and often invisible:
                </p>
                <ul>
                  <li>
                    <strong>Atmospheric Hazards:</strong> Presence of toxic
                    gases, flammable vapors, or lack of oxygen can be instantly
                    fatal.
                  </li>
                  <li>
                    <strong>Physical Hazards:</strong> Risk of engulfment by
                    materials, structural collapse, or entanglement with
                    machinery.
                  </li>
                  <li>
                    <strong>Regulatory Complexities:</strong> Navigating and
                    adhering to strict national and international safety
                    regulations (like OSHA standards) is a significant challenge
                    for many organizations.
                  </li>
                  <li>
                    <strong>Inefficient Procedures:</strong> Lack of proper
                    planning and reliance on outdated methods can lead to
                    accidents, operational delays, and non-compliance penalties.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplexRisks;


 */}
