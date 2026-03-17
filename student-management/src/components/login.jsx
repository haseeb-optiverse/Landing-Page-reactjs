import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandle = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === "" || password === "") {
      alert("Please enter username and password");
    } else if (username === storedUsername && password === storedPassword) {
      alert("Login successful");
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md  hover:shadow-2xl">
      <h1 className="font-bold text-3xl text-center">Login</h1>

      <div className="flex flex-col gap-4 mt-6 p-3">
        <div className="flex flex-col">
          <label className="font-medium">Username</label>
          <input
            className="border border-gray-500 p-2 w-[96%] rounded-md outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Username"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Password</label>
          <input
            className="border border-gray-600 p-2 w-[96%] rounded-md outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />
        </div>
      </div>
      <div className="p-3">
        <button
          onClick={loginHandle}
          className="w-[96%] bg-orange-500 text-white py-2 rounded-md mt-6 hover:bg-orange-600 transition"
        >
          Login
        </button>
      </div>
      <div className="flex justify-center gap-1">
        <p className="font-medium text-sm">Don't have any account?</p>
        <Link to="/" className="font-medium text-sm text-blue-600">
          
          Sign Up
        </Link>
      </div>
    </div>
  );
};
