import React from "react";
import CustomerLayout from "../../Layouts/CustomerLayout";
import SearchBar from "../../Components/Common/SearchBar";
import ProductList from "../../Components/Product/ProductList";

const CLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <CustomerLayout>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Heading */}
              <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 animate-pulse">
                E-com
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-base-content/70 mb-8 font-light">
                Discover amazing products at unbeatable prices
              </p>
              
              {/* Search Section */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="card bg-base-100/80 backdrop-blur-sm shadow-2xl border border-base-300">
                  <div className="card-body">
                    <SearchBar />
                  </div>
                </div>
              </div>
              
              {/* Stats or Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="stat bg-base-100/60 backdrop-blur-sm rounded-box border border-base-300">
                  <div className="stat-figure text-primary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="stat-title">Fast Delivery</div>
                  <div className="stat-value text-primary">24h</div>
                  <div className="stat-desc">Free shipping on orders over $50</div>
                </div>
                
                <div className="stat bg-base-100/60 backdrop-blur-sm rounded-box border border-base-300">
                  <div className="stat-figure text-secondary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="stat-title">Quality Guarantee</div>
                  <div className="stat-value text-secondary">100%</div>
                  <div className="stat-desc">Satisfaction guaranteed</div>
                </div>
                
                <div className="stat bg-base-100/60 backdrop-blur-sm rounded-box border border-base-300">
                  <div className="stat-figure text-accent">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="stat-title">Happy Customers</div>
                  <div className="stat-value text-accent">10k+</div>
                  <div className="stat-desc">Trusted by thousands</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Featured Products
            </h2>
            <p className="text-base-content/60 text-lg max-w-2xl mx-auto">
              Explore our curated collection of premium products designed to enhance your lifestyle
            </p>
          </div>
          
          <div className="bg-base-100 rounded-box shadow-xl border border-base-300 p-6">
            <ProductList />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl">
            <div className="card-body text-center">
              <h2 className="card-title text-3xl justify-center mb-4">
                Ready to Start Shopping?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of satisfied customers and discover amazing deals today!
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-accent btn-lg">
                  Browse All Products
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </CustomerLayout>
    </div>
  );
};

export default CLanding;
