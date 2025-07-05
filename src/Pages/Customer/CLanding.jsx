import React from "react";
import CustomerLayout from "../../Layouts/CustomerLayout";
import SearchBar from "../../Components/Common/SearchBar";
import ProductList from "../../Components/Product/ProductList";

const CLanding = () => {
  return (
    <div>
      <CustomerLayout>
        <header className>
          <h1 className="text-7xl">E-com</h1>
          <SearchBar />
        </header>
        <ProductList />
      </CustomerLayout>
    </div>
  );
};

export default CLanding;
