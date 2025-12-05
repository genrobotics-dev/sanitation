"use client"
import React, { useEffect, useState } from "react";
import Clients from "../common/Clients";

import img1 from "@/assets/clients/indah_water.webp";
import img2 from "@/assets/clients/municipal_committee_of_leh.webp";
import img3 from "@/assets/clients/thiruvananthapuram_airport.svg";
import img4 from "@/assets/clients/zoho.webp";

const clients = [
  { image: img2, alt: "Municipal Committee of Leh (MCL)", width: 150, height: 150 },
  { image: img1, alt: "Indah Water", width: 150, height: 150 },
  { image: img3, alt: "Thiruvananthapuram Airport", width: 150, height: 150 },
  { image: img4, alt: "Zoho", width: 150, height: 150 },
];

function Wilboar_Clients() {
  const [isStatic, setIsStatic] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {

    if (screenWidth === 0) {
      return;
    }

    if (screenWidth < 1024 || clients.length > 5) {
      setIsStatic(false);
    } else {
      setIsStatic(true);
    }
  }, [screenWidth, clients.length]);

  return (
    <div>
      <Clients clientsData={clients} isStatic={isStatic} />
    </div>
  );
}

export default Wilboar_Clients;
