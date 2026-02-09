import React from "react";

import { productCardData } from "./components/static/static-data";
import { house, image, logo, search, Tick, expert, world } from "./assets";

function App() {
  return (
    <div className="min-h-screen bg-white p-4  ">
      <div className="max-w-7xl mx-auto flex items-center p-4 bg-white text-black shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Rentell logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="font-bold text-xl">Rentell.co.uk</h1>
        </div>

        <div className="flex w-full ml-16 font-bold items-center">
          <ul className="flex space-x-6 mx-auto cursor-pointer">
            <li className=" hover:bg-orange-500 transition p-2 rounded-md ">
              Home
            </li>
            <li className=" hover:bg-orange-500 transition p-2 rounded-md ">
              Property listing
            </li>
            <li className=" hover:bg-orange-500 transition p-2 rounded-md ">
              Post property
            </li>
            <li className=" hover:bg-orange-500 transition p-2 rounded-md ">
              Blog
            </li>
            <li className=" hover:bg-orange-500 transition p-2 rounded-md ">
              Contact us
            </li>
          </ul>

          <div className="flex space-x-4">
            <button className="px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-orange-500 ">
              Login
            </button>
            <button className="px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-orange-500 ">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
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
      </div>

      <p className="  font-bold justify-center flex mt-6 text-2xl ">
        Recently here
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-7xl mx-auto">
        {productCardData.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="font-bold">{product.title}</h2>
            <p>{product.pkr}</p>
            <p>{product.address}</p>
            <p>{product.street}</p>

            <div className="flex gap-4 justify-center mt-4">
              <button className="px-5 py-2 font-medium bg-orange-500 border border-gray-300 rounded-md hover:bg-orange-300 ">
                Buy
              </button>
              <button className="px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-blue-500 ">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center p-4">
          <h2 className="font-bold text-2xl mb-3">Islamabad Top Land</h2>
          <p className="mb-2">Exterior views of beautiful modern luxury home</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            dolorum ea? Aspernatur deserunt blanditiis molestiae id molestias
            mollitia eum ad fugit. Numquam magni odio dolorem sequi? Nam
            adipisci nemo id!
          </p>
        </div>
        <div>
          <img
            src={house}
            alt="house image"
            className="w-full h-64 object-cover rounded-lg mb-2"
          />
        </div>
      </div>

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

      <footer className="bg-orange-500 text-white mt-12 py-8 max-w-7xl mx-auto ">
       <div className="w-full bg-orange-500 mt-5">
        <div className="px-6 md:px-16 pt-7 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-medium text-white">Quick Links</p>
            <div className="flex flex-col gap-1">
              <p className="text-lg text-white">Home</p>
              <p className="text-lg text-white">Property listing</p>
              <p className="text-lg text-white">Post property</p>
              <p className="text-lg text-white">Blogs</p>
              <p className="text-lg text-white">Contact us</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-medium text-white">Other Links</p>
            <div className="flex flex-col gap-1">
              <p className="text-lg text-white">Facebook</p>
              <p className="text-lg text-white">WhatsApp</p>
              <p className="text-lg text-white">Instagram</p>
              <p className="text-lg text-white">YouTube</p>
              <p className="text-lg text-white">Telegram</p>
            </div>
          </div>
          <div className="flex flex-col relative sm:flex-row items-start sm:items-center gap-2  md:mt-20">
            <input
              type="text"
              placeholder="Enter email"
              className="border px-3 border-gray-300 text-black outline-none h-10 w-full sm:w-72 p-6 rounded-full"
            />
            <button className=" absolute right-1 h-10 px-5 bg-orange-500 hover:bg-orange-600 rounded-full">
              <span className="font-semibold text-white">Subscribe</span>
            </button>
          </div>
        </div>
        <div className="px-6 md:px-28">
          <hr className="border-t border-gray-300 mt-8 mb-3" />
          <div className="flex flex-col md:flex-row gap-3 md:gap-24 text-center md:text-left">
            <p className="text-white font-medium text-lg">
              DHA, Phase 1, Islamabad Pakistan
            </p>
            <p className="text-white font-medium text-lg">
              © All reserved copyright 2026
            </p>
          </div>
        </div>
      </div>
      </footer>
    </div>
  );
}
export default App;
