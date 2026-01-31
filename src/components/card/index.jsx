import { fields, addressFields } from "../../static/static-data";
import {InputFields} from "../../components/inputFields/input-fields";
import { AddressDetails } from "../../components/addressDetails/addressDetails";
import { Address, Contract } from "../../components/headings/headings";
import { ContractTitle, Description } from "../contractTitle/contractTitle";

 
 export const Card = () => {
    return(
        <section>
         <div className="max-w-6xl mx-auto bg-white rounded-xl  mb-8">
       <Contract />

        <div className="p-6 bg-purple-300 space-y-6 rounded-b-xl">
     
         <ContractTitle />

        <InputFields fields={fields} />


       
          <h3 className="font-semibold">Address Details</h3>
          <AddressDetails addressFields={addressFields} />
          </div>
              </div>
      <div className="max-w-6xl mx-auto bg-white rounded-xl ">
       <Address />

        <div className="p-6 bg-purple-50 space-y-4 rounded-b-xl">
          <h3 className="font-semibold">Adresse 1</h3>

        <AddressDetails addressFields={addressFields} />

         <Description />
        </div>
      </div>
      </section>
    )
}