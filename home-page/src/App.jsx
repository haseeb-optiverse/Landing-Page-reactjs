import React from "react";
import { Card } from "./components/card";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { PropertyListing } from "./components/propertyListing";
import { PostProperty } from "./components/postProperty";

function App() {
  return (
    <Routes>   
      <Route path="/" element={ <Card />}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/property" element={<PropertyListing/>} />
      <Route path="/post" element ={<PostProperty/>} />
    </Routes>
    
  );
}
export default App;
