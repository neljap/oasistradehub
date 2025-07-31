import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeLogo, authImg, authImag } from "../../assets";
import { useContext } from "react";
import { DarkLightContext } from "../../app/DarkLightTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import LogoText from "../components/LogoText";

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  const location = useLocation();

  useEffect(() => {
    // Extract token from URL parameters
    const queryParams = new URLSearchParams(location.search);
    const resetToken = queryParams.get('token');
    if (resetToken) {
      setToken(resetToken);
    } else {
      setError('Password reset token is missing or invalid.');
    }
  }, [location]);

  const validatePassword = (pwd: string) => {
    if (pwd.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    if (!/[A-Z]/.test(pwd)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!/[a-z]/.test(pwd)) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!/[0-9]/.test(pwd)) {
      return 'Password must contain at least one number.';
    }
    if (!/[!@#$%^&*]/.test(pwd)) {
      return 'Password must contain at least one special character (!@#$%^&*).';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    if (!token) {
      setError('Missing reset token.');
      setLoading(false);
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      // Replace with actual API call
      // const response = await fetch('/api/reset-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ token, newPassword: password }),
      // });
      // const data = await response.json();

      // if (response.ok) {
      //   setMessage(data.message || 'Your password has been reset successfully!');
      //   setPassword('');
      //   setConfirmPassword('');
      // } else {
      //   setError(data.error || 'Failed to reset password. Please try again.');
      // }
      setMessage('Your password has been reset successfully!'); // Placeholder success
      setPassword('');
      setConfirmPassword('');
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
            <h3 className="font-[600] text-lg md:text-2xl py-2 font-[Jost]">Reset Your Password</h3>
            <p className="text-sm font-[500]">Enter your new password below.</p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 py-2">
                <label htmlFor="password" className="font-[Jost] text-lg md:text-xl">New Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your new password"
                  className="w-full py-2 px-3 outline-none shadow appearance-none text-gray-700 dark:text-gray-50 leading-tight focus:outline-none rounded-lg border"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1 py-2">
                <label htmlFor="confirm-password" className="font-[Jost] text-lg md:text-xl">Confirm New Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your new password"
                  className="w-full py-2 px-3 outline-none shadow appearance-none text-gray-700 dark:text-gray-50 leading-tight focus:outline-none rounded-lg border"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                {loading ? 'Resetting...' : 'Reset Password'}
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

export default ResetPassword;