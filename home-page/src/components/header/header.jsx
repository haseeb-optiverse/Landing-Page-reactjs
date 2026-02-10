import { logo } from "../../assets";

export const Header =() => {
    return(
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
    )
};