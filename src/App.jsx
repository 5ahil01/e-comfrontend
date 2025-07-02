import React from "react";
import CLanding from "./Pages/CLanding";
import MLanding from "./Pages/MLanding";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CLanding />} />
        <Route path="/home" element={<CLanding />} />
        <Route path="/homemerchant" element={<MLanding />} />
      </Routes>
    </div>
  );
};

export default App;
