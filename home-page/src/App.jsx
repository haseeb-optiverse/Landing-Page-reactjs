
import { Card } from "./components/card";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/home-components/home-page-1/home";
import { PropertyListing } from "./components/home-components/property-listing/propertyListing";
import { Login } from "./components/home-components/login-page/loginPage";
import { SignUp } from "./components/home-components/login-page/signUp";
import { Header } from "./components/header/header";
import ContactUs from "./components/home-components/contact-us/contactUs";
import Blog from "./components/home-components/blog-com/blog";





function App() {
  return (
    <>
     <Header />
    <Routes>   
      <Route path="/" element={ <Card />}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/property" element={<PropertyListing/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
       <Route path="/contact-us" element={<ContactUs/>} />
       <Route path="/blog" element={<Blog/>} />
    </Routes>
    </>
    
  );
}
export default App;
