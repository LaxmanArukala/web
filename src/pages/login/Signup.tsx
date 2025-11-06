import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  // ✅ Validation schema
  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Enter a valid 6-digit pincode")
      .required("Pincode is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      password: "",
      confirm_password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Registration Data:", values);
      alert("Registration successful!");
      navigate("/login");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* LEFT SIDE - Welcome */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
          <p className="text-lg text-center mb-8">
            Register to access your personalized dashboard and location-based services.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="Signup Illustration"
            className="w-48 h-48"
          />
        </div>

        {/* RIGHT SIDE - Registration Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Sign Up
          </h2>

          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 mb-1">First Name</label>
              <input
                name="first_name"
                type="text"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.first_name && formik.errors.first_name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.first_name && formik.errors.first_name && (
                <p className="text-red-500 text-sm">{formik.errors.first_name}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 mb-1">Last Name</label>
              <input
                name="last_name"
                type="text"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.last_name && formik.errors.last_name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.last_name && formik.errors.last_name && (
                <p className="text-red-500 text-sm">{formik.errors.last_name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <input
                name="phone"
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">Address</label>
              <textarea
                name="address"
                rows={2}
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.address && formik.errors.address
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500 text-sm">{formik.errors.address}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-gray-700 mb-1">City</label>
              <input
                name="city"
                type="text"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.city && formik.errors.city
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 text-sm">{formik.errors.city}</p>
              )}
            </div>

            {/* State */}
            <div>
              <label className="block text-gray-700 mb-1">State</label>
              <input
                name="state"
                type="text"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.state && formik.errors.state
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.state && formik.errors.state && (
                <p className="text-red-500 text-sm">{formik.errors.state}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-gray-700 mb-1">Country</label>
              <input
                name="country"
                type="text"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.country && formik.errors.country
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500 text-sm">{formik.errors.country}</p>
              )}
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-gray-700 mb-1">Pincode</label>
              <input
                name="pincode"
                type="text"
                value={formik.values.pincode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.pincode && formik.errors.pincode
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.pincode && formik.errors.pincode && (
                <p className="text-red-500 text-sm">{formik.errors.pincode}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 mb-1">Confirm Password</label>
              <input
                name="confirm_password"
                type="password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded ${
                  formik.touched.confirm_password && formik.errors.confirm_password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.confirm_password && formik.errors.confirm_password && (
                <p className="text-red-500 text-sm">{formik.errors.confirm_password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-gray-600 text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
