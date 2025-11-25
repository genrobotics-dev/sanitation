import React from "react";
import Clients from "../common/Clients";

import keralaWaterAuthority from "@/assets/clients/kerala_water_authority.webp";
import municipalCouncilTadipatri from "@/assets/clients/municipal_council_tadipatri.webp";
import thoothukudiSmartCity from "@/assets/clients/thoothukudi_smart_city.webp";
import nelloreMunicipalCorporation from "@/assets/clients/nellore_municipal_corporation.webp";
import municipalCorporationGurugram from "@/assets/clients/municipal_corporation_gurugram.webp";
import thanjavurMunicipalCorporation from "@/assets/clients/thanjavur_municipal_corporation.webp";
import brihanmumbaiMunicipalCorporation from "@/assets/clients/brihanmumbai_municipal_corporation.webp";
import coimbatoreMunicipalCorporation from "@/assets/clients/coimbatore_municipal_corporation.webp";
import ghmc from "@/assets/clients/ghmc.webp";
import suezIndia from "@/assets/clients/suez_india.webp";
import sriMuktsarSahib from "@/assets/clients/sri_muktsar_sahib.webp";
import guwahatiMunicipalCorporation from "@/assets/clients/guwahati_municipal_corporation.webp";
import suratMunicipalCorporation from "@/assets/clients/surat_municipal_corporation.webp";
import dhuleMunicipalCorporation from "@/assets/clients/dhule_municipal_corporation.webp";
import noidaDevelopmentAuthority from "@/assets/clients/noida_development_authority.webp";
import gmada from "@/assets/clients/gmada.webp";
import phedHaryana from "@/assets/clients/phed_haryana.webp";
import phedBhiwani from "@/assets/clients/phed_bhiwani.webp";
import sabarmatiGas from "@/assets/clients/sabarmati_gas.webp";
import indoreMunicipalCorporation from "@/assets/clients/indore_municipal_corporation.webp";
import barc from "@/assets/clients/barc.webp";
import tiruppurMunicipality from "@/assets/clients/tiruppur_municipality.webp";
import mysuruCityMunicipalCorporation from "@/assets/clients/mysuru_city_municipal_corporation.webp";
import vadodaraMunicipalCorporation from "@/assets/clients/vadodara_municipal_corporation.webp";
import puriMunicipality from "@/assets/clients/puri_municipality.webp";
import cityOfPatna from "@/assets/clients/city_of_patna.webp";
import indianOil from "@/assets/clients/indian_oil.webp";
import perambalurMunicipality from "@/assets/clients/perambalur_municipality.webp";
import greaterVisakhapatnamMunicipalCorporation from "@/assets/clients/greater_visakhapatnam_municipal_corporation.webp";
import ulhasnagarMunicipalCorporation from "@/assets/clients/ulhasnagar_municipal_corporation.webp";
import tirunelveliMunicipalCorporation from "@/assets/clients/tirunelveli_municipal_corporation.webp";
import templetechInnovations from "@/assets/clients/templetech_innovations.webp";
import handInHandIndia from "@/assets/clients/hand_in_hand_india.webp";
import bharatPetroleum from "@/assets/clients/bharat_petroleum.webp";
import tataTrusts from "@/assets/clients/tata_trusts.webp";
import tcs from "@/assets/clients/tcs.webp";
import larsenToubro from "@/assets/clients/larsen_toubro.webp";
import cochinShipyard from "@/assets/clients/csl.webp";
import hindustanPetroleum from "@/assets/clients/hindustan_petroleum.webp";
import coalIndia from "@/assets/clients/coal_india.webp";
import adityaBirla from "@/assets/clients/aditya_birla.webp";
import kumbakonamMunicipality from "@/assets/clients/kumbakonam_municipality.webp";
import municipalCouncilAmbala from "@/assets/clients/municipal_council_ambala.webp";
import cHed from "@/assets/clients/c_hed.webp";
import geniusInfraEngineering from "@/assets/clients/genius_infra_engineering.webp";
import greaterJaipur from "@/assets/clients/greater_jaipur.webp";
import hsvp from "@/assets/clients/hsvp.webp";
import haryanaUrbanDevelopmentAuthority from "@/assets/clients/haryana_urban_development_authority.webp";
import jaipurHeritage from "@/assets/clients/jaipur_heritage.webp";
import jalSansthanDehradun from "@/assets/clients/jal_sansthan_dehradun.webp";
import jalkalVibhagNagarNigam from "@/assets/clients/jalkal_vibhag_nagar_nigam.webp";
import kanpurNagarNigam from "@/assets/clients/kanpur_nagar_nigam.webp";
import karurMunicipality from "@/assets/clients/karur.webp";
import khilariInfrastructure from "@/assets/clients/khilari_infrastructure.webp";
import municipalCommitteeOfLeh from "@/assets/clients/municipal_committee_of_leh.webp";
import meerutCityMunicipalCorporation from "@/assets/clients/meerut_city_municipal_corporation.webp";
import municipalCorporationChandigarh from "@/assets/clients/municipal_corporation_chandigarh.webp";
import nagpurNagarNigam from "@/assets/clients/nagpur_nagar_nigam.webp";
import corporationOfPanaji from "@/assets/clients/corporation_of_panaji.webp";
import sangli from "@/assets/clients/sangli.webp";
import shristiInfraEngineering from "@/assets/clients/shristi_infraengineering.webp";
import silvassaMunicipalCouncil from "@/assets/clients/silvassa_municipal_council.webp";
import technocraftConstruction from "@/assets/clients/technocraft_construction.webp";
import municipalCorporationUjjain from "@/assets/clients/municipal_corporation_ujjain.webp";
import vasaiVirarMunicipalCorporation from "@/assets/clients/vasai_virar_municipal_corporation.webp";
import thiruvananthapuramCorporation from "@/assets/clients/thiruvananthapuram_corporation.webp";
import cherthalaMunicipality from "@/assets/clients/cherthala_municipality.webp";
import kannurMunicipalCorporation from "@/assets/clients/kannur_municipal_corporation.webp";
import kozhikodeMunicipalCorporation from "@/assets/clients/kozhikode_municipal_corporation.webp";
import municipalCorporationAurangabad from "@/assets/clients/municipal_corporation_aurangabad.webp";
import cmwssb from "@/assets/clients/cmwssb.webp";
import gujaratUrbanDevelopmentMission from "@/assets/clients/gudm.webp";
import indahWater from "@/assets/clients/indah_water.webp";
const clientsData = [
  { image: keralaWaterAuthority, alt: "Kerala Water Authority", width: 150, height: 150 },
  { image: municipalCouncilTadipatri, alt: "Municipal Council Tadipatri", width: 150, height: 150 },
  { image: thoothukudiSmartCity, alt: "Thoothukudi Smart City", width: 150, height: 150 },
  { image: nelloreMunicipalCorporation, alt: "Nellore Municipal Corporation", width: 150, height: 150 },
  {
    image: municipalCorporationGurugram,
    alt: "Municipal Corporation Gurugram", width: 150, height: 150
  },
  {
    image: thanjavurMunicipalCorporation,
    alt: "Thanjavur Municipal Corporation", width: 150, height: 150
  },
  {
    image: brihanmumbaiMunicipalCorporation,
    alt: "Brihanmumbai Municipal Corporation", width: 150, height: 150
  },
  {
    image: coimbatoreMunicipalCorporation,
    alt: "Coimbatore Municipal Corporation", width: 150, height: 150
  },
  { image: ghmc, alt: "GHMC", width: 150, height: 150 },
  { image: suezIndia, alt: "SUEZ India", width: 150, height: 150 },
  { image: sriMuktsarSahib, alt: "Sri Muktsar Sahib", width: 150, height: 150 },
  {
    image: guwahatiMunicipalCorporation,
    alt: "Guwahati Municipal Corporation", width: 150, height: 150
  },
  { image: suratMunicipalCorporation, alt: "Surat Municipal Corporation", width: 150, height: 150 },
  { image: dhuleMunicipalCorporation, alt: "Dhule Municipal Corporation", width: 150, height: 150 },
  { image: noidaDevelopmentAuthority, alt: "Noida Development Authority", width: 150, height: 150 },
  { image: gmada, alt: "GMADA", width: 150, height: 150 },
  { image: phedHaryana, alt: "PHED Haryana", width: 150, height: 150 },
  { image: phedBhiwani, alt: "PHED Bhiwani", width: 150, height: 150 },
  { image: sabarmatiGas, alt: "Sabarmati Gas", width: 150, height: 150 },
  { image: indoreMunicipalCorporation, alt: "Indore Municipal Corporation", width: 150, height: 150 },
  { image: barc, alt: "BARC", width: 150, height: 150 },
  { image: tiruppurMunicipality, alt: "Tiruppur Municipality", width: 150, height: 150 },
  {
    image: mysuruCityMunicipalCorporation,
    alt: "Mysuru City Municipal Corporation", width: 150, height: 150
  },
  {
    image: vadodaraMunicipalCorporation,
    alt: "Vadodara Municipal Corporation", width: 150, height: 150
  },
  { image: puriMunicipality, alt: "Puri Municipality", width: 150, height: 150 },
  { image: cityOfPatna, alt: "City of Patna", width: 150, height: 150 },
  { image: indianOil, alt: "Indian Oil", width: 150, height: 150 },
  { image: perambalurMunicipality, alt: "Perambalur Municipality", width: 150, height: 150 },
  {
    image: greaterVisakhapatnamMunicipalCorporation,
    alt: "Greater Visakhapatnam Municipal Corporation", width: 150, height: 150
  },
  {
    image: ulhasnagarMunicipalCorporation,
    alt: "Ulhasnagar Municipal Corporation", width: 150, height: 150
  },
  {
    image: tirunelveliMunicipalCorporation,
    alt: "Tirunelveli Municipal Corporation", width: 150, height: 150
  },
  { image: templetechInnovations, alt: "Templetech Innovations", width: 150, height: 150 },
  { image: handInHandIndia, alt: "Hand in Hand India", width: 150, height: 150 },
  { image: bharatPetroleum, alt: "Bharat Petroleum", width: 150, height: 150 },
  { image: tataTrusts, alt: "Tata Trusts", width: 150, height: 150 },
  { image: tcs, alt: "TCS", width: 150, height: 150 },
  { image: larsenToubro, alt: "Larsen & Toubro", width: 150, height: 150 },
  { image: cochinShipyard, alt: "Cochin Shipyard Limited", width: 150, height: 150 },
  { image: hindustanPetroleum, alt: "Hindustan Petroleum", width: 150, height: 150 },
  { image: coalIndia, alt: "Coal India", width: 150, height: 150 },
  { image: adityaBirla, alt: "Aditya Birla", width: 150, height: 150 },
  { image: kumbakonamMunicipality, alt: "Kumbakonam Municipality", width: 150, height: 150 },
  {
    image: municipalCouncilAmbala,
    alt: "Municipal Council Ambala", width: 150, height: 150
  },
  { image: cHed, alt: "C-HED", width: 150, height: 150 },
  {
    image: geniusInfraEngineering,
    alt: "Genius Infra Engineering", width: 150, height: 150
  },
  { image: greaterJaipur, alt: "Greater Jaipur", width: 150, height: 150 },
  { image: hsvp, alt: "HSVP", width: 150, height: 150 },
  {
    image: haryanaUrbanDevelopmentAuthority,
    alt: "Haryana Urban Development Authority", width: 150, height: 150
  },
  { image: jaipurHeritage, alt: " Jaipur Heritage", width: 150, height: 150 },
  { image: jalSansthanDehradun, alt: " Jal Sansthan Dehradun", width: 150, height: 150 },
  {
    image: jalkalVibhagNagarNigam,
    alt: " Jalkal Vibhag Nagar Nigam", width: 150, height: 150
  },
  { image: kanpurNagarNigam, alt: "Kanpur Nagar Nigam", width: 150, height: 150 },
  { image: karurMunicipality, alt: "Karur Municipality", width: 150, height: 150 },
  {
    image: khilariInfrastructure,
    alt: "Khilari Infrastructure Pvt Ltd", width: 150, height: 150
  },
  {
    image: municipalCommitteeOfLeh,
    alt: "Municipal Committee of Leh", width: 150, height: 150
  },
  {
    image: meerutCityMunicipalCorporation,
    alt: "Meerut City Municipal Corporation", width: 150, height: 150
  },
  {
    image: municipalCorporationChandigarh,
    alt: "Municipal Corporation Chandigarh", width: 150, height: 150
  },
  { image: nagpurNagarNigam, alt: "Nagpur Nagar Nigam", width: 150, height: 150 },
  { image: corporationOfPanaji, alt: "Corporation of Panaji", width: 150, height: 150 },
  { image: sangli, alt: "Sangli", width: 150, height: 150 },
  {
    image: shristiInfraEngineering,
    alt: "Srishti Infra Engineering", width: 150, height: 150
  },
  {
    image: silvassaMunicipalCouncil,
    alt: "Silvassa Municipal Council", width: 150, height: 150
  },
  {
    image: technocraftConstruction,
    alt: "Technocraft Construction", width: 150, height: 150
  },
  {
    image: municipalCorporationUjjain,
    alt: "Municipal Corporation Ujjain", width: 150, height: 150
  },
  {
    image: vasaiVirarMunicipalCorporation,
    alt: "Vasai Virar Municipal Corporation", width: 150, height: 150
  },
  {
    image: thiruvananthapuramCorporation,
    alt: "Corporation of Thiruvananthapuram", width: 150, height: 150
  },
  { image: cherthalaMunicipality, alt: "Municipal Council Cherthala", width: 150, height: 150 },
  {
    image: kannurMunicipalCorporation,
    alt: "Municipal Corporation of Kannur", width: 150, height: 150
  },
  {
    image: kozhikodeMunicipalCorporation,
    alt: "Kozhikode Municipal Corporation", width: 150, height: 150
  },
  {
    image: municipalCorporationAurangabad,
    alt: "Municipal Corporation Aurangabad", width: 150, height: 150
  },
  { image: cmwssb, alt: "CMWSSB", width: 150, height: 150 },
  {
    image: gujaratUrbanDevelopmentMission,
    alt: "Gujarat Urban Development Mission", width: 150, height: 150
  },
  { image: indahWater, alt: "Indah Water", width: 150, height: 150 },
];

function Clients_Main() {
  return (
    <div>
      <Clients clientsData={clientsData} />
    </div>
  );
}

export default Clients_Main;
