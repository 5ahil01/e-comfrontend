import React from "react";
import Navbar from "../Components/Common/Navbar";

const CustomerLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default CustomerLayout;
