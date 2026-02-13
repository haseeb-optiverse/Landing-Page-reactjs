

import BusinessCard from "./businessCard";
import ButtonCard from "./buttonCard";
import InfoCard from "./infoCard";

import { MainCard } from "./mainCard";
export const PropertyListing = () => {
  return (
    <div className="max-w-7xl mx-auto bg-slate-100 ">
      <MainCard />

      <BusinessCard />

      <div className="max-w-7xl mx-auto p-20">
       <InfoCard />

       <ButtonCard />
      </div>
    </div>
  );
};
