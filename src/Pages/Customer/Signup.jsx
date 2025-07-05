import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
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
    e.preventDefault();
    console.log("Signup attempt:", formData);
  };

  const handleLoginClick = () => {
    console.log("Navigate to login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 via-accent/20 to-primary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Logo/Brand */}
        <div className="text-center mb-4">
          <div className="avatar placeholder mb-2">
            <div className="bg-secondary text-secondary-content rounded-full w-12">
              <span className="text-lg">🚀</span>
            </div>
          </div>
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
                type="submit"
                className="btn btn-secondary w-full font-medium hover:scale-105 transition-transform duration-200"
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

              {/* Divider */}
              <div className="divider my-4 text-sm">OR</div>

              {/* Social */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="btn btn-outline btn-sm hover:scale-105 transition-transform duration-200"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-sm hover:scale-105 transition-transform duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Login link */}
        <div className="text-center mt-4">
          <p className="text-sm text-base-content/60">
            Already have an account?{" "}
            <button
              onClick={handleLoginClick}
              className="text-secondary hover:text-secondary-focus font-medium hover:underline"
            >
              Sign in here
            </button>
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
