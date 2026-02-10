import { image } from "../../assets";

export const HomeService = () => {
    return(
         <div className="relative w-full max-w-7xl">
                  <img
                    src={image}
                    alt="home image"
                    className="w-full max-w-7xl h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center rounded-xl">
                    <div className="bg-white w-[90%] max-w-4xl rounded-2xl shadow-xl p-8">
                      <p className=" font-bold justify-center flex">Select One</p>
                      <div className="mt-6 flex gap-4 justify-center">
                        <button className=" px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-orange-500 ">
                          Buy
                        </button>
                        <button className="px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-orange-500 ">
                          Rent
                        </button>
                        <button className="px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-orange-500 ">
                          Sale
                        </button>
                      </div>
        
                      <select className="w-full p-2 mt-6 rounded-md mb-4 border border-gray-300">
                        <option>Select City</option>
                        <option>Layyah</option>
                        <option>Multan</option>
                        <option>Lahore</option>
                        <option>Islamabad</option>
                        <option>Kirachi</option>
                      </select>
        
                      <div className="grid grid-cols-2 gap-2">
                        <select className="w-full p-2  rounded-md mb-2 border border-gray-300">
                          <option>Select Address</option>
                          <option>House</option>
                          <option>Apartment</option>
                          <option>Commercial</option>
                          <option>Land</option>
                        </select>
                        <select className="w-full p-2  rounded-md mb-2 border border-gray-300">
                          <option>Select Area</option>
                          <option>Layyah</option>
                          <option>Multan</option>
                          <option>Islamabad</option>
                        </select>
                      </div>
        
                      <p className=" font-bold justify-center flex mt-3">Select One</p>
                      <div className="flex gap-4 justify-center mt-4">
                        <button className="px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-orange-500 ">
                          MIN 0.000 lach
                        </button>
                        <button className="px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-orange-500 ">
                          MAX 0.000 lach
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
    )
};