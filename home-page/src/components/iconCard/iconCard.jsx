import { expert, search, Tick, world } from "../../assets";

export const IconCard = () => {
    return(
         <div className="max-w-7xl mx-auto mt-4 items-center">
        <span className="font-bold text-xl ">Why choose us</span>
        <div className="flex gap-48 mt-8 ">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Tick}
              alt="blue tick"
              className="w-auto h-16 object-contain mt-4"
            />
            <p className=" font-bold justify-center  mt-3">
              Verified Properties
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={search}
              alt="search-image"
              className="w-auto h-16 object-contain mt-4"
            />
            <p className=" font-bold justify-center  mt-3">
              Lightning-Fast Search
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={expert}
              alt="expert-support"
              className="w-auto h-16 object-contain mt-4"
            />
            <p className=" font-bold justify-center  mt-3">Expert Support</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={world}
              alt="world-icon"
              className="w-auto h-16 object-contain mt-4"
            />
            <p className=" font-bold justify-center  mt-3">
              Largest in Pakistan
            </p>
          </div>
        </div>
      </div>
    )
};