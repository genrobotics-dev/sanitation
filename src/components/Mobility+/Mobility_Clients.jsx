
"use client";
import { useState, useEffect } from "react";
import Clients from "../common/Clients";
import img1 from "@/assets/clients/ahmedabad_airport.svg";
import img2 from "@/assets/clients/cmwssb.webp";
import img3 from "@/assets/clients/gudm.webp";
import img4 from "@/assets/clients/municipal_corporation_aurangabad.webp";

const clientData = [
  { image: img1, alt: "Ahmedabad Airport", width: 150, height: 150 },
  { image: img2, alt: "CMWSSB", width: 150, height: 150 },
  { image: img3, alt: "Gujarat Urban Development Mission", width: 150, height: 150 },
  { image: img4, alt: "Municipal Corporation Aurangabad", width: 150, height: 150 },
];

function Mobility_Clients() {
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

    if (screenWidth < 1024 || clientData.length > 5) {
      setIsStatic(false);
    } else {
      setIsStatic(true);
    }
  }, [screenWidth, clientData.length]);

  return (
    <div>
      <Clients clientsData={clientData} isStatic={isStatic} />
    </div>
  );
}

export default Mobility_Clients;
