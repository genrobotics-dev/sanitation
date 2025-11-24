import React from "react";

import Services from "../common/Services";

const benefits = [
  {
    title: "Radical Transparency",
    description:
      "Build trust with stakeholders through verifiable, real-time data on all sanitation operations.",
    linkUrl: "no",
  },
  {
    title: "Peak Efficiency",
    description:
      "Optimize routes, reduce idle time, and automate reporting to significantly boost productivity.",
    linkUrl: "no",
  },
  {
    title: "Assured Compliance",
    description:
      "Maintain a complete digital record of all activities, ensuring you are always ready for audits and regulatory checks.",
    linkUrl: "no",
  },
  {
    title: "Smarter Decisions",
    description:
      "Leverage powerful analytics to make informed decisions about resource allocation and maintenance schedules.",
    linkUrl: "no",
  },
];

function Gcrow_services() {
  return (
    <Services
      benefits={benefits}
      title="The G Crow Advantage"
      description="From dashboards to drains, G Crow gives sanitation a digital command center."
      className="gcrow_services"
    />
  );
}

export default Gcrow_services;
