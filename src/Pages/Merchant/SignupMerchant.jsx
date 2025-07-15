import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupMerchant = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    password: '',
    phone: '',
    gstNumber: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend
    console.log('Merchant Signup:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 via-accent/20 to-primary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-base-content mb-2">Merchant Signup</h1>
          <p className="text-base-content/60">Register your business to start selling on E-com</p>
        </div>
        <div className="card bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Business Name</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Enter business name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Owner Name</span>
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Enter owner name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Create password"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Phone</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">GST Number</span>
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Enter GST number (optional)"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Street</span>
                  </label>
                  <input
                    type="text"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Street"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">City</span>
                  </label>
                  <input
                    type="text"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="City"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">State</span>
                  </label>
                  <input
                    type="text"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="State"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">ZIP</span>
                  </label>
                  <input
                    type="text"
                    name="address.zip"
                    value={formData.address.zip}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="ZIP"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-secondary w-full font-medium hover:scale-105 transition-transform duration-200 mt-4"
              >
                Create Merchant Account
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-base-content/60">
                Already have an account?{' '}
                <Link to="/login/merchant" className="text-secondary hover:text-secondary-focus font-medium hover:underline">
                  Login as Merchant
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupMerchant;