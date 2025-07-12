import React, { useState } from "react";
import { z } from "zod";
import { registerUser } from "../api/user.api";
import { useNavigate } from "react-router-dom"

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password is too long"),
});

export default function Register({state}) {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* -------- handlers -------- */
  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: "" })); // clear this field’s error
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(false);

    const result = schema.safeParse(formData);

    try {
      const data = await registerUser(formData.name, formData.email, formData.password)
      navigate('/');
      console.log('Registration Success', data);
      setSuccess(true)
      setFormData({ name: '', email: '', password: '' })
      setLoading(false);
      }   
      catch (err) {
        setErrors(err.response?.data?.message || 'Registration failed. Please try again.')
      }   
      finally {
        setLoading(false)
      }
    }

    /* -------- helpers -------- */
  const hasFormErrors = Object.keys(errors).length > 0;

  /* -------- JSX -------- */
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-gray-100">
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl font-bold'>Create your account</h1>
        <p className='text-center'>Already have an account ? <a className='text-blue-600' href="#">Sign In</a></p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 px-7 rounded-md shadow border border-gray-200 w-full max-w-md space-y-5"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Sign Up</h2>
          <p className="text-sm text-gray-400">
            Fill in your information to create a new account
          </p>
        </div>

        {/* global error box */}
        {hasFormErrors && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded space-y-1">
            {Object.values(errors).map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
          </div>
        )}

        {/* global success box */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            Registration successful!
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded border-gray-500"
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border py-2 px-3 rounded border-gray-500"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded border-gray-500"
            placeholder="Create a strong password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded transition-colors disabled:opacity-60"
        >
          {loading ? "Registering…" : "Register"}
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Already have an account? <span onClick={() => state(true)} className="text-blue-500 hover:underline">Login</span></p>
        </div>
      </form>
    </div>
  );
}
