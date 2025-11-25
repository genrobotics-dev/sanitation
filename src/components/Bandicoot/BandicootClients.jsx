import React from "react";
import Clients from "../common/Clients";

import img1 from "@/assets/clients/indian_oil.webp";
import img2 from "@/assets/clients/municipal_council_ambala.webp";
import img3 from "@/assets/clients/barc.webp";
import img4 from "@/assets/clients/phed_bhiwani.webp";
import img5 from "@/assets/clients/c_hed.webp";
import img6 from "@/assets/clients/coal_india.webp";
import img7 from "@/assets/clients/coimbatore_municipal_corporation.webp";
import img8 from "@/assets/clients/dhule_municipal_corporation.webp";
import img9 from "@/assets/clients/sabarmati_gas.webp";
import img10 from "@/assets/clients/genius_infra_engineering.webp";
import img11 from "@/assets/clients/ghmc.webp";
import img12 from "@/assets/clients/greater_jaipur.webp";
import img13 from "@/assets/clients/gmada.webp";
import img14 from "@/assets/clients/noida_development_authority.webp";
import img15 from "@/assets/clients/greater_visakhapatnam_municipal_corporation.webp";
import img16 from "@/assets/clients/municipal_corporation_gurugram.webp";
import img17 from "@/assets/clients/guwahati_municipal_corporation.webp";
import img18 from "@/assets/clients/aditya_birla.webp";
import img19 from "@/assets/clients/howrah_municipal_corporation.webp";
import img20 from "@/assets/clients/hindustan_petroleum.webp";
import img21 from "@/assets/clients/hsvp.webp";
import img22 from "@/assets/clients/haryana_urban_development_authority.webp";
import img23 from "@/assets/clients/indian_oil.webp";
import img24 from "@/assets/clients/jaipur_heritage.webp";
import img25 from "@/assets/clients/jal_sansthan_dehradun.webp";
import img26 from "@/assets/clients/jalkal_vibhag_nagar_nigam.webp";
import img27 from "@/assets/clients/kanpur_nagar_nigam.webp";
import img28 from "@/assets/clients/karur.webp";
import img29 from "@/assets/clients/khilari_infrastructure.webp";
import img31 from "@/assets/clients/kumbakonam_municipality.webp";
import img32 from "@/assets/clients/kerala_water_authority.webp";
import img33 from "@/assets/clients/brihanmumbai_municipal_corporation.webp";
import img34 from "@/assets/clients/municipal_committee_of_leh.webp";
import img35 from "@/assets/clients/meerut_city_municipal_corporation.webp";
import img36 from "@/assets/clients/municipal_corporation_chandigarh.webp";
import img37 from "@/assets/clients/indore_municipal_corporation.webp";
import img38 from "@/assets/clients/mysuru_city_municipal_corporation.webp";
import img39 from "@/assets/clients/nagpur_nagar_nigam.webp";
import img40 from "@/assets/clients/nellore_municipal_corporation.webp";
import img41 from "@/assets/clients/puri_municipality.webp";
import img42 from "@/assets/clients/corporation_of_panaji.webp";
import img43 from "@/assets/clients/city_of_patna.webp";
import img44 from "@/assets/clients/perambalur_municipality.webp";
import img45 from "@/assets/clients/phed_haryana.webp";
import img46 from "@/assets/clients/sri_muktsar_sahib.webp";
import img47 from "@/assets/clients/sangli.webp";
import img48 from "@/assets/clients/shristi_infraengineering.webp";
import img49 from "@/assets/clients/silvassa_municipal_council.webp";
import img50 from "@/assets/clients/suez_india.webp";
import img51 from "@/assets/clients/surat_municipal_corporation.webp";
import img52 from "@/assets/clients/municipal_council_tadipatri.webp";
import img53 from "@/assets/clients/tcs.webp";
import img54 from "@/assets/clients/technocraft_construction.webp";
import img55 from "@/assets/clients/templetech_innovations.webp";
import img56 from "@/assets/clients/thanjavur_municipal_corporation.webp";
import img57 from "@/assets/clients/tirunelveli_municipal_corporation.webp";
import img58 from "@/assets/clients/thoothukudi_smart_city.webp";
import img59 from "@/assets/clients/tiruppur_municipality.webp";
import img60 from "@/assets/clients/municipal_corporation_ujjain.webp";
import img61 from "@/assets/clients/ulhasnagar_municipal_corporation.webp";
import img62 from "@/assets/clients/vadodara_municipal_corporation.webp";
import img63 from "@/assets/clients/vasai_virar_municipal_corporation.webp";
const clientsData = [
  { image: img1, alt: "INDIAN OIL CORPORATION LTD", width: 150, height: 150 },
  { image: img2, alt: "Ambala Municipal Council", width: 150, height: 150 },
  { image: img3, alt: "BARC", width: 150, height: 150 },
  { image: img4, alt: "Bhiwani, PHED", width: 150, height: 150 },
  { image: img5, alt: "C-hed", width: 150, height: 150 },
  { image: img6, alt: "Coal India", width: 150, height: 150 },
  { image: img7, alt: "Coimbatore Municipal Corporation-HPCL", width: 150, height: 150 },
  { image: img8, alt: "Dhule Municipal Corporation", width: 150, height: 150 },
  { image: img9, alt: "Gandhinagar MC Sabarmati Gas Limited", width: 150, height: 150 },
  { image: img10, alt: "Genius Infrastructure", width: 150, height: 150 },
  { image: img11, alt: "Greater Hyderabad Municipal Corporation", width: 150, height: 150 },
  { image: img12, alt: "Greater Jaipur", width: 150, height: 150 },
  { image: img13, alt: "Greater Mohali Area Development Authority", width: 150, height: 150 },
  { image: img14, alt: "Greater Noida Industrial development Authority", width: 150, height: 150 },
  { image: img15, alt: "Greater Visakhapatnam Municipal Corporation", width: 150, height: 150 },
  { image: img16, alt: "Gurgaon Municipal Corporation", width: 150, height: 150 },
  { image: img17, alt: "Guwahati Assam", width: 150, height: 150 },
  { image: img18, alt: "Hindalco Industries Limited (Bharuch)", width: 150, height: 150 },
  { image: img19, alt: "Howrah Municipal Corporation", width: 150, height: 150 },
  { image: img20, alt: "HPCL Nasik (Nandurbar)", width: 150, height: 150 },
  { image: img21, alt: "HSVP Panipat", width: 150, height: 150 },
  { image: img22, alt: "HUDA Panchkula", width: 150, height: 150 },
  { image: img23, alt: "IOCL Bhopal (Nava Raipur)", width: 150, height: 150 },
  { image: img24, alt: " Jaipur Heritage", width: 150, height: 150 },
  { image: img25, alt: " Jal Sansthan Dehradun, Haldwani", width: 150, height: 150 },
  { image: img26, alt: " Jalkal Vibhag Nagar Nigam Prayagraj", width: 150, height: 150 },
  { image: img27, alt: "Kanpur", width: 150, height: 150 },
  { image: img28, alt: "Karur", width: 150, height: 150 },
  { image: img29, alt: "Khilari Infrastructure Private Limited (Pratapgarh)", width: 150, height: 150 },
  { image: img31, alt: "Kumbakonam Municipality", width: 150, height: 150 },
  { image: img32, alt: "KWA", width: 150, height: 150 },
  { image: img33, alt: "MCGM -MAK", width: 150, height: 150 },
  { image: img34, alt: "mcl_logo", width: 150, height: 150 },
  { image: img35, alt: "Meerut City Municipal Corporation", width: 150, height: 150 },
  { image: img36, alt: "Municipal Corporation Chandigarh", width: 150, height: 150 },
  { image: img37, alt: "Municipal Corporation Indore", width: 150, height: 150 },
  { image: img38, alt: "Mysuru City Corporation", width: 150, height: 150 },
  { image: img39, alt: "Nagpur Nagar Nigam", width: 150, height: 150 },
  { image: img40, alt: "Nellore Municipal Corporation", width: 150, height: 150 },
  { image: img41, alt: "Odisha, Puri", width: 150, height: 150 },
  { image: img42, alt: "Panaji", width: 150, height: 150 },
  { image: img43, alt: "Patna Municipal Corporation", width: 150, height: 150 },
  { image: img44, alt: "Perambalur Municipality", width: 150, height: 150 },
  { image: img45, alt: "PHED Sirsa", width: 150, height: 150 },
  { image: img46, alt: "Punjab- Sri Muktsar Sahib", width: 150, height: 150 },
  { image: img47, alt: "Sangli", width: 150, height: 150 },
  { image: img48, alt: "Shrishti Infrageneering Ltd", width: 150, height: 150 },
  { image: img49, alt: "Silvassa Municipal Council Area", width: 150, height: 150 },
  { image: img50, alt: "SUEZ India Pvt Ltd", width: 150, height: 150 },
  { image: img51, alt: "Surat Municipal Corporation", width: 150, height: 150 },
  { image: img52, alt: "Tadipatri Municipality", width: 150, height: 150 },
  { image: img53, alt: "TCS", width: 150, height: 150 },
  { image: img54, alt: "Technocraft Construction Pvt.Ltd", width: 150, height: 150 },
  { image: img55, alt: "Templetech Innovations Private Limited", width: 150, height: 150 },
  { image: img56, alt: "Thanjavur Municipal Corporation-ONGC", width: 150, height: 150 },
  { image: img57, alt: "Thirunelveli Municipal Corporation", width: 150, height: 150 },
  { image: img58, alt: "Thoothukudi Smart City Ltd", width: 150, height: 150 },
  { image: img59, alt: "Tiruppur Municipality", width: 150, height: 150 },
  { image: img60, alt: "Ujjain Municipal Corporation", width: 150, height: 150 },
  { image: img61, alt: "Ulhasnagar Municipal Corporation (CSR)", width: 150, height: 150 },
  { image: img62, alt: "Vadodara Municipal Corporation", width: 150, height: 150 },
  { image: img63, alt: "Vasai Virar Municipal Corporation", width: 150, height: 150 },
];


function BandicootClients() {
  return (
    <div>
      <Clients clientsData={clientsData} />
    </div>
  );
}

export default BandicootClients;
