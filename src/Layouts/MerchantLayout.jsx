import React from "react";
import Navbar from "../Components/Common/Navbar";

const MerchantLayout = ({ children }) => {
  return (
    <div>
      <Navbar role="merchant"  />
      <main>{children}</main>
    </div>
  );
};

export default MerchantLayout;
