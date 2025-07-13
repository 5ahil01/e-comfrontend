import React from "react";
import CLanding from "./Pages/Customer/CLanding";
import MLanding from "./Pages/Merchant/MLanding";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Customer/Cart";
import Login from "./Pages/Customer/Login";
import Signup from "./Pages/Customer/Signup";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<CLanding />} />
        <Route path="/home" element={<CLanding />} />
        <Route path="/homemerchant" element={<MLanding />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
