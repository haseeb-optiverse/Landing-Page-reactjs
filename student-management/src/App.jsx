
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/login";
import { Dashboard } from "./components/dashboard";


function App() {
  return(
    <Routes>
       <Route path="/" element={<SignUp />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
   
  )
}
export default App