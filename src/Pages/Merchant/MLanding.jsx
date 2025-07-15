import React from "react";
import MerchantLayout from "../../Layouts/MerchantLayout";

const MLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <MerchantLayout>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            }}
          ></div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Heading */}
              <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 animate-pulse">
                E-com Merchant
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-base-content/70 mb-8 font-light">
                Manage your products, view analytics, and grow your business
              </p>

              {/* Merchant Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="stat bg-base-100/60 backdrop-blur-sm rounded-box border border-base-300">
                  <div className="stat-figure text-primary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                  </div>
                  <div className="stat-title">Product Management</div>
                  <div className="stat-value text-primary">Easy</div>
                  <div className="stat-desc">Add, edit, and track your products</div>
                </div>

                <div className="stat bg-base-100/60 backdrop-blur-sm rounded-box border border-base-300">
                  <div className="stat-figure text-secondary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 018 0v2M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="stat-title">Sales Analytics</div>
                  <div className="stat-value text-secondary">Insights</div>
                  <div className="stat-desc">Track your sales and performance</div>
                </div>

                <div className="stat bg-base-100/60 backdrop-blur-sm rounded-box border border-base-300">
                  <div className="stat-figure text-accent">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7" />
                    </svg>
                  </div>
                  <div className="stat-title">Business Growth</div>
                  <div className="stat-value text-accent">+30%</div>
                  <div className="stat-desc">Grow your reach and revenue</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl">
            <div className="card-body text-center">
              <h2 className="card-title text-3xl justify-center mb-4">
                Ready to Manage Your Store?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Access your dashboard to manage products, view analytics, and more!
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-accent btn-lg">
                  Go to Dashboard
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </MerchantLayout>
    </div>
  );
};

export default MLanding;
