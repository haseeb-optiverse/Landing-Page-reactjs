

import BaseButton from "./buttons";
import Contact from "./inputTable";
import { Choice } from "./planCards";
import {  Pricing } from "./priceHeading";


export const HomePage = () => {
  return (
    <div className="bg-slate-600 w-full">
    
    <Pricing />

     <Choice />
     
     <Contact />

     <BaseButton />
   


    </div>
  );
};
