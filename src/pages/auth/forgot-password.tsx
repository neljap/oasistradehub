import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeLogo, authImg, authImag } from "../../assets";
import { useContext } from "react";
import { DarkLightContext } from "../../app/DarkLightTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import LogoText from "../components/LogoText";
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    // Basic client-side validation
    if (!email) {
      setError('Email is required.');
      setLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format.');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      // Replace with actual API call
      // const response = await fetch('/api/forgot-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      // const data = await response.json();

      // if (response.ok) {
      //   setMessage(data.message || 'Password reset email sent. Please check your inbox.');
      // } else {
      //   setError(data.error || 'Failed to send password reset email. Please try again.');
      // }
      let response = await axios.post("https://oaserver.onrender.com/forgot-password", {email})
      if(response){
      setMessage('Password reset email sent. Please check your inbox.'); // Placeholder success
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const {setTheme, systemTheme, theme} = useContext(DarkLightContext);

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return <FaSun color="#0052FF" size={18}/>;
    } else {
      return <FaMoon color="#0052FF" size={18}/>;
    }
  };

  return (
    <div className="bg-second h-screen px-0 md:px-28 my-auto py-16 md:py-12">
      <div className="container">
        <div className="my-auto rounded bg-white dark:bg-[#222738] grid grid-cols-1 md:grid-cols-3 justify-center items-center shadow-lg">
          <div className="py-6 px-10 flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
              <Link to="/" className="flex flex-row items-center gap-1 md:gap-2">
                <img src={HomeLogo} alt="" className="w-4 md:w-8" />
                <LogoText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  OASIS TRADE HUB
                </LogoText>
              </Link>
              <div className="p-1.5 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{themeBox()}</div>
              <Link to="/login" className="font-[Jost] font-[600]">Login</Link>
            </div>
            <h3 className="font-[600] text-lg md:text-2xl py-2 font-[Jost]">Forgot Your Password?</h3>
            <p className="text-sm font-[500]">Enter your email address below and we'll send you a link to reset your password.</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 py-2">
                <label htmlFor="email" className="font-[Jost] text-lg md:text-xl">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email Address"
                  className="w-full py-2 px-3 outline-none shadow appearance-none text-gray-700 dark:text-gray-50 leading-tight focus:outline-none rounded-lg border"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                className="bg-primary transition-all ease-in-out duration-[1s] hover:text-primary hover:bg-white py-2 w-full text-white rounded border-2 font-[500] border-primary disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Reset Email'}
              </button>
            </form>
            <div className="pt-3">
              <Link to="/login" className="font-[Jost] font-[600] text-blue-500 hover:text-blue-800">
                Back to Login
              </Link>
            </div>
          </div>
          <div className="col-span-2 bg-[#3c39aa] py-6 hidden md:block">
            <div className="w-1/2 mx-auto text-white text-center flex flex-col gap-3">
              <p className="font-[500] text-2xl">Welcome to Oasis Trade Hub</p>
              <p className="leading-5 font-[500] text-sm">A secure and intuitive platform that provides real-time insights and intelligent tools to support both beginners and professionals in growing their portfolios and reaching financial freedom.</p>
            </div>
            <div className="mx-auto pb-12 pt-6">
              <div className="relative w-96 pt-8 mx-auto">
                <img src={authImg} alt="" className="w-full rounded-xl" />
                <img src={authImag} alt="" className="w-60 absolute top-20 -left-40 rounded-xl mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;