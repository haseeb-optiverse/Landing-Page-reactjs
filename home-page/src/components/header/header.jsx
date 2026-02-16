import { logo } from "../../assets";
import {href, Link} from "react-router-dom";
const navlinks =[
  {
    text:"Home",
    href:"home"
  },
   {
    text:"Property-listing",
    href:"property"
  },
   {
    text:"Post-property",
    href:"post"
  },
   {
    text:"Blog",
    href:"blog"
  },
   {
    text:"Contact-us",
    href:"contact"
  },
   {
    text:"Login",
    href:"login"
  },
   {
    text:"SignUp",
    href:"signUp"
  },
]
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
                    <Link to="/home" 
                     className=" hover:bg-orange-500 hover:text-white transition p-2 rounded-md ">

                      Home
                    </Link>

                    <Link to="/property" className=" hover:bg-orange-500  hover:text-white transition p-2 rounded-md ">
                      Property listing
                    </Link>

                    <Link to="/post" 
                     className=" hover:bg-orange-500 transition  hover:text-white p-2 rounded-md ">
                      Post property
                    </Link>
                    <Link to="" 
                     className=" hover:bg-orange-500 transition  hover:text-white p-2 rounded-md ">
                      Blog
                    </Link>
                    <Link to="" 
                     className=" hover:bg-orange-500 transition  hover:text-white p-2 rounded-md ">
                      Contact us
                    </Link>
                  </ul>
        
                  <div className="flex space-x-4">
                    <Link to="/login"className="px-5 py-2 font-medium border border-gray-300 rounded-md  hover:text-white hover:bg-orange-500 ">
                      Login
                    </Link>
                    <Link to="/signUp" className="px-5 py-2 font-medium border border-gray-300 rounded-md  hover:text-white hover:bg-orange-500 ">
                      Sign up
                    </Link>
                  </div>
                </div>
                </div>
    )
};