"use client"
import React from "react";
import Clients from "../common/Clients";

import img1 from "@/assets/clients/indah_water.webp";
import img2 from "@/assets/clients/municipal_committee_of_leh.webp";
import img3 from "@/assets/clients/thiruvananthapuram_airport.svg";

const clients = [
  { image: img2, alt: "Municipal Committee of Leh (MCL)", width: 150, height: 150 },
  { image: img1, alt: "Indah Water", width: 150, height: 150 },
  { image: img3, alt: "Thiruvananthapuram Airport", width: 150, height: 150 },
];

function Wilboar_Clients() {


  return (
    <div>
      <Clients clientsData={clients} />
    </div>
  );
}

export default Wilboar_Clients;
