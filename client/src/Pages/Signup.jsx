import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/signin");
    } catch (e) {
      dispatch()
      console.log(e.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounder-lg "
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounder-lg "
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounder-lg "
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Signup"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}
