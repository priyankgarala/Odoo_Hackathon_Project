import React, { useState } from 'react';
import { z } from "zod";
import { loginUser } from '../api/user.api';
import { useNavigate } from "react-router-dom"

// ✅ Zod schema
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = ({state}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  // ✅ Form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const result = schema.safeParse(formData);

      try {
        const data = await loginUser(formData.email, formData.password)
        navigate('/');
        setSuccess(true)
        setFormData({ email: '', password: '' })
        console.log(data);
      } catch (err) {
        setErrors(err.response?.data?.message || 'Login failed. Please try again.')
      } finally {
        setLoading(false)
      }

  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-screen bg-gray-100">
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl font-bold'>Sign in to your account</h1>
        <p className='text-center'>Don't have an account ? <a className='text-blue-600' href="#">Sign up</a></p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white py-8 px-7 rounded-md shadow border border-gray-200 w-full max-w-md space-y-5"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Login</h2>
          <p className="text-sm text-gray-400">
            Enter your credentials to access your account
          </p>
        </div>

        {/* ✅ Error Messages (Global) */}
        {hasErrors && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded space-y-1">
            {Object.values(errors).map((msg, idx) => (
              <p key={idx}>{msg}</p>
            ))}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            <p>Login successful!</p>
          </div>
        )}

        {/* Email Field */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border py-2 px-3 rounded border-gray-500"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded border-gray-500"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div>
          <span className="text-blue-600 cursor-pointer">Forgot your password?</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 px-4 rounded transition-colors hover:bg-slate-900 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Don't have an account? <span onClick={() => state(false)} className="text-blue-500 hover:underline">Register</span></p>
        </div>
      
      </form>
    </div>
  );
};

export default Login;
