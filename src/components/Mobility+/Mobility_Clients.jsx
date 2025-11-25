import React from "react";
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
  return (
    <div>
      <Clients clientsData={clientData} />
    </div>
  );
}

export default Mobility_Clients;
