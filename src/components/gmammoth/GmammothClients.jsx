import React from "react";

import Clients from "../common/Clients";

import img3 from "@/assets/clients/cherthala_municipality.webp";
import img4 from "@/assets/clients/kannur_municipal_corporation.webp";
import img5 from "@/assets/clients/kozhikode_municipal_corporation.webp";
import img6 from "@/assets/clients/kerala_water_authority.webp";
import img7 from "@/assets/clients/thiruvananthapuram_corporation.webp";

const clientData = [
  { image: img3, alt: "Cherthala Municipality", width: 150, height: 150 },
  { image: img4, alt: "Kannur Municipal Corporation", width: 150, height: 150 },
  { image: img5, alt: "kozhikode Municipal corporation", width: 150, height: 150 },
  { image: img6, alt: "Kerala Wanter Authority Kochi", width: 150, height: 150 },
  { image: img7, alt: "Trivandrum Municipal corporation", width: 150, height: 150 },
];

function GmammothClients() {
  return (
    <div>
      <Clients clientsData={clientData} />
    </div>
  );
}

export default GmammothClients;
