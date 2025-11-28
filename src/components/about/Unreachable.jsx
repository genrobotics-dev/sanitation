import Image from "next/image";
import React from "react";
//import banner from "@/assets/about/cover.webp";
import feature1 from "@/assets/about/unreachable/robotic_scavenging.webp";
import feature2 from "@/assets/about/unreachable/industrial_safety.webp";
import feature3 from "@/assets/about/unreachable/digital_audit.webp";

import ico1 from "@/assets/about/unreachable/robotic_scavenging_logo.svg";
import ico2 from "@/assets/about/unreachable/industrial_safety.svg";
import ico5 from "@/assets/about/unreachable/digital_audit.svg";

const features = [
  {
    title: "Robotic Scavenging",
    description:
      "Automating the extraction of solid waste and sludge from manholes and sewers.",
    image: feature1,
    icon: ico1,
  },
  {
    title: "Industrial Safety",
    description:
      "Remote cleaning solutions for silos, chemical tanks, and processing plants.",
    image: feature2,
    icon: ico2,
  },
  {
    title: "Digital Audit",
    description:
      "Providing data-driven proof of cleanliness and safety compliance.",
    image: feature3,
    icon: ico5,
  },
];

function Unreachable() {
  return (
    <section className="unreachable_sec">
      <div className="container-fluid">
        <div className="lg:px-[4rem]">
          <div className="title_area">
            <div>
              <h1>We Engineer for the "Unreachable"</h1>
              <p>
                The Sanitation Tech vertical does not make general-purpose robots. We specialize exclusively in
                Confined Space Management (CSM). If a space is too toxic, too narrow, or too deep for a human,
                we build the technology to manage it.
              </p>
            </div>
          </div>

          <div className="card_wrapper mt-12 rounded-[15px] overflow-hidden">
            <div className="card_row flex flex-nowrap overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0 snap-x lg:snap-none">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="case_card card min-w-[300px] lg:min-w-0 flex-shrink-0 bg-white rounded-[15px] overflow-hidden snap-center group"
                >
                  <div className="image_wrapper relative h-52 w-full rounded-[15px] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="case_content relative px-6 pb-8 pt-12 bg-white">
                    <div className="absolute -top-8 left-6 w-16 h-16 bg-yellow-500 rounded-[15px] border-3 border-white p-3 flex items-center justify-center z-10">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h2>
                      {feature.title}
                    </h2>
                    <p>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unreachable;
