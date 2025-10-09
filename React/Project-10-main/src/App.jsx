import React from "react";
import { Routes, Route } from "react-router-dom";
import ContractManufacturing from "./Components/ContractManufacturing";
import Automotive from "./pages/Automotive";
import Disinfectants from "./pages/Disinfectants";
import Household from "./pages/Household";
import Home from './Components/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContractManufacturing" element={<ContractManufacturing />} />
      <Route path="/automotive" element={<Automotive />} />
      <Route path="/disinfectants" element={<Disinfectants />} />
      <Route path="/household" element={<Household />} />
    </Routes>
  );
};

export default App;
