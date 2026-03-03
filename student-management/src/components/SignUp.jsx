import { useState } from "react";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
 export const SignUp = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()

const signUpHandel = () =>{

 


if (username == "" || password == "") {
  alert("Please enter password")
}else{
   localStorage.setItem("username", username)
  localStorage.setItem("password", password)
  alert("sign Up ")
  navigate("/login")
}

}


    return(
         <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h1 className="font-bold text-3xl text-center">Sign Up</h1>

            <div className="flex flex-col gap-4 mt-6 p-3">
            <div className="flex flex-col">
            <label className="font-medium">Username</label>
            <input  
            className="border border-gray-500 p-2 w-[96%] rounded-md outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text" placeholder="Enter Username" />
             </div>
             <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <input
             className="border border-gray-600 p-2 w-[96%] rounded-md outline-none" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             type="password" placeholder="Enter Password" />

           
              </div>
            </div>
            <div className="p-3">
            <button 
            onClick={signUpHandel}
            className="w-[96%] bg-orange-500 text-white py-2 rounded-md mt-6 hover:bg-orange-600 transition"
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
