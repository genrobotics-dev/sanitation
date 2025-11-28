import React from "react";

import ico1 from "@/assets/about/transformation/the_genesis_logo.svg";
import ico2 from "@/assets/about/transformation/unstoppable_r&d_logo.svg";
import ico5 from "@/assets/about/transformation/global_authority_logo.svg";
import ico6 from "@/assets/about/transformation/unstoppable_r&d_logo.svg";
import Image from "next/image";

const features = [
  {
    icon: ico1,
    title: "The Genesis",
    desc: "Our vertical was established to operationalizethe Bandicoot innovation. What began as a solution for manholes quickly revealed a larger gap in industrial safety.",
  },
  {
    icon: ico2,
    title: "Expanding the Fleet",
    desc: "Manholes were just the beginning. On our journey, we built more robots to solve different hazardous problems creating specialized machines for sewers, open drains, and industrial tanks.",
  },
  {
    icon: ico6,
    title: "Unstoppable R&D",
    desc: "Innovation never stops. We are currently researching and developing new robots for new problems. If a sanitation challenge exists, our labs are already building the technology to solve it.",
  },
  {
    icon: ico5,
    title: "Global Authority",
    desc: "Today, we are the authorities in this niche. From the United Nations to the Supreme Court of India, our technology is cited as the benchmark for eliminating manual hazardous cleaning.",
  },

];

function Journey() {
  return (
    <section className="journey2_sec">
      <div className="md:container-fluid">
        <div className="lg:px-[90]">
          <div className="feature-grid">
            {features.map((item, idx) => (
              <div className="feature-card" key={idx}>
                <Image
                  width={0}
                  height={0}
                  src={item.icon}
                  alt={item.title}
                  className="icon"
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
