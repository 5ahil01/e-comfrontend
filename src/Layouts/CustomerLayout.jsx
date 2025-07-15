import React from "react";
import Navbar from "../Components/Common/Navbar";

const CustomerLayout = ({ children }) => {
  return (
    <div>
      <Navbar role="customer" />
      <main>{children}</main>
    </div>
  );
};

export default CustomerLayout;
