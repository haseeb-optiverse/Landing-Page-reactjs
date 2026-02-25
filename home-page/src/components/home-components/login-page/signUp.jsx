import { Link } from "react-router-dom"; 
export const SignUp = () => {
    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h1 className="font-bold text-3xl text-center">Sign Up</h1>

            <div className="flex flex-col gap-4 mt-6 p-3">
            <div className="flex flex-col">
            <label className="font-medium">Username</label>
            <input  className="border border-gray-500 p-2 w-[96%] rounded-md outline-none" type="text" placeholder="Enter Username" />
             </div>
             <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <input className="border border-gray-600 p-2 w-[96%] rounded-md outline-none" type="password" placeholder="Enter Password" />
              </div>
            </div>
            <div className="p-3">
            <button className="w-[96%] bg-orange-500 text-white py-2 rounded-md mt-6 hover:bg-orange-600 transition"
            >SignUp
            </button>
            </div>
            
           <div className="flex justify-center gap-1">
            <p className="font-medium text-sm">
              Already have an account?
              
            </p>
            <Link to="/login"
            className="font-medium text-sm"
            > Login</Link>

            </div>
            
        </div>
    )
}
