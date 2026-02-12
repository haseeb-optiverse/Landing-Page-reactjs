import React from "react";
import { Card } from "./components/card";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/home-components/home-page-1/home";


function App() {
  return (
    <Routes>   
      <Route path="/" element={ <Card />}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
    
  );
}
export default App;
