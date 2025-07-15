import React from "react";
import CLanding from "./Pages/Customer/CLanding";
import MLanding from "./Pages/Merchant/MLanding";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Customer/Cart";
import Login from "./Pages/Common/Login";
import Signup from "./Pages/Common/Signup";
import SignupMerchant from "./Pages/Merchant/SignupMerchant";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CLanding />} />
        <Route path="/home" element={<CLanding />} />
        <Route path="/homemerchant" element={<MLanding />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/signup/customer" element={<Signup />} />
        <Route path="/signup/merchant" element={<SignupMerchant />} />
      </Routes>
    </div>
  );
}; 

export default App;
