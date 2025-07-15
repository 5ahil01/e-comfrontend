import React, { useState } from "react";
import { authUserThunk } from "../../features/auth/authUserSlice"; 
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    role: "customer", 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(authUserThunk({authType: "signup", role: formData.role, formData}));
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 via-accent/20 to-primary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Logo/Brand */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-base-content mb-1">
            Create Account 
          </h1>
          <p className="text-sm text-base-content/60">
            Join us and get started today
          </p>
        </div>

        {/* Form */}
        <div className="card bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Role Selection - removed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-sm font-medium">
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input input-bordered input-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-sm font-medium">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input input-bordered input-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-sm font-medium">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="input input-bordered input-sm w-full pr-8"
                      placeholder="Create password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-2 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="text-xs text-base-content/60">
                        {showPassword ? (
                          <svg
                            className="w-5 h-5 text-base-content/40 hover:text-base-content transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-base-content/40 hover:text-base-content transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-sm font-medium">
                      Confirm Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="input input-bordered input-sm w-full pr-8"
                      placeholder="Confirm password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-2 flex items-center"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      <span className="text-xs text-base-content/60">
                        {showConfirmPassword ? (
                          <svg
                            className="w-5 h-5 text-base-content/40 hover:text-base-content transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-base-content/40 hover:text-base-content transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-sm font-medium">
                    Phone Number
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input input-bordered input-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Address */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-sm font-medium">
                    Address
                  </span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered textarea-sm resize-none"
                  placeholder="Enter your address"
                  rows="2"
                  required
                />
              </div>

              {/* Terms */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start py-1">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary checkbox-sm"
                    required
                  />
                  <span className="label-text text-sm ml-2">
                    I agree to the{" "}
                    <span className="text-secondary hover:underline cursor-pointer">
                      Terms
                    </span>{" "}
                    and{" "}
                    <span className="text-secondary hover:underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="btn btn-secondary w-full font-medium hover:scale-105 transition-transform duration-200"
                onClick={handleSubmit}
              >
                Create Account
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </button>

              

              {/* Social */}
                        
            </form>
          </div>
        </div>

        {/* Login link */}
        <div className="text-center mt-4">
          <p className="text-sm text-base-content/60">
            Already have an account?{" "}
            <Link
              to={`/login/customer`}
              className="text-secondary hover:text-secondary-focus font-medium hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Demo Alert */}
        {/* <div className="alert alert-success shadow-lg mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Demo: Check console for signup attempts</span>
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
