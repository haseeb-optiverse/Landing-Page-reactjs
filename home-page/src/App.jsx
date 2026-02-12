import React from "react";
import { Card } from "./components/card";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/home-components/home-page-1/home";
import { PropertyListing } from "./components/home-components/property-listing/propertyListing";


function App() {
  return (
    <Routes>   
      <Route path="/" element={ <Card />}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/property" element={<PropertyListing/>}/>
    </Routes>
    
  );
}
export default App;
