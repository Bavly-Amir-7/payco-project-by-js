"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import "./signUp.css";
import Image from 'next/image';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordValidations, setPasswordValidations] = useState({
        length: false,
        uppercase: false,
        number: false,
        special: false,
        lowercase: false,
        match: false
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSignUpClick = () => {
        setShowTerms(true);
    };

    const handleCloseTerms = () => {
        setShowTerms(false);
    };

    const validatePassword = (pass) => {
        const validations = {
            length: pass.length >= 8,
            uppercase: /[A-Z]/.test(pass),
            number: /\d/.test(pass),
            special: /[@#$%^&*]/.test(pass),
            lowercase: /[a-z]/.test(pass),
        };
        setPasswordValidations(validations);
    };

    const handlePasswordChange = (e) => {
        const pass = e.target.value;
        setPassword(pass);
        validatePassword(pass);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass);
        setPasswordValidations((prev) => ({
            ...prev,
            match: confirmPass === password,
        }));
    };

    return (
        <>
            <div className="loginBody">
                <Head>
                    <title>Payco Login</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                        rel="stylesheet"
                    />
                </Head>
                <div className="bg-gray-100 min-h-screen flex loginArea">
                    <div className="w-1/2 imageParent bg-white flex items-center justify-center relative computer">
                        <Image
                            alt="Illustration of security and payment elements"
                            className="w-3/4 imageChild"
                            src="/images/computer.png"
                            priority
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="w-1/2 imageParent bg-gray-100 flex flex-col justify-center items-center">
                        <div className="w-3/4 imageChild">
                            <div className="text-center mb-8">
                                <div className="word flex flex-row items-center">
                                    <Image
                                        src="/images/ayco2.png"
                                        width={270}
                                        height={95}
                                        priority
                                        alt="Description of the image"
                                    />
                                </div>
                                <h1 className="text-2xl font-bold text-start mt-5 welcome">Welcome Back</h1>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.25 0.75H3.75C2.7558 0.751191 1.80267 1.14666 1.09966 1.84966C0.396661 2.55267 0.00119089 3.5058 0 4.5L0 13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C17.9988 3.5058 17.6033 2.55267 16.9003 1.84966C16.1973 1.14666 15.2442 0.751191 14.25 0.75ZM3.75 2.25H14.25C14.6991 2.25088 15.1376 2.38614 15.5092 2.63835C15.8808 2.89057 16.1684 3.24821 16.335 3.66525L10.5915 9.4095C10.1688 9.83049 9.59656 10.0669 9 10.0669C8.40344 10.0669 7.83118 9.83049 7.4085 9.4095L1.665 3.66525C1.83161 3.24821 2.11921 2.89057 2.49079 2.63835C2.86236 2.38614 3.30091 2.25088 3.75 2.25ZM14.25 15.75H3.75C3.15326 15.75 2.58097 15.5129 2.15901 15.091C1.73705 14.669 1.5 14.0967 1.5 13.5V5.625L6.348 10.47C7.05197 11.1722 8.00569 11.5665 9 11.5665C9.99431 11.5665 10.948 11.1722 11.652 10.47L16.5 5.625V13.5C16.5 14.0967 16.2629 14.669 15.841 15.091C15.419 15.5129 14.8467 15.75 14.25 15.75Z" fill="#2D2D2D" />
                                            </svg>
                                            <span className="pl-1">|</span>
                                        </div>
                                        <input
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                            placeholder="username@gmail.com"
                                            type="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 mt-4">
                                    <label className="block text-gray-700">Create Password</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="pl-1">|</span>
                                        </div>
                                        <input
                                            className={`block w-full pl-10 pr-10 py-2 border rounded-md shadow-sm focus:outline-none ${passwordValidations.length && passwordValidations.uppercase && passwordValidations.number && passwordValidations.special && passwordValidations.lowercase ? 'border-green-500' : 'border-red-500'} sm:text-sm`}
                                            placeholder="********"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8856 8.64983C17.7248 8.42986 13.8934 3.26367 8.99991 3.26367C4.10647 3.26367 0.274852 8.42986 0.114223 8.64962C-0.0380743 8.85831 -0.0380743 9.14135 0.114223 9.35004C0.274852 9.57001 4.10647 14.7362 8.99991 14.7362C13.8934 14.7362 17.7248 9.57001 17.8856 9.34927C18.0381 9.14135 18.0381 8.85831 17.8856 8.64983ZM9.00004 12.4656C7.4244 12.4656 6.19282 11.234 6.19282 9.65851C6.19282 8.08288 7.4244 6.85137 9.00004 6.85137C10.5757 6.85137 11.8073 8.08288 11.8073 9.65851C11.8073 11.234 10.5757 12.4656 9.00004 12.4656ZM9.00004 8.85189C8.65576 8.85189 8.39952 9.10806 8.39952 9.65851C8.39952 10.2093 8.65576 10.4656 9.00004 10.4656C9.34432 10.4656 9.60057 10.2093 9.60057 9.65851C9.60057 9.10806 9.34432 8.85189 9.00004 8.85189Z" fill="#2D2D2D" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul className="mt-2 text-sm">
                                        <li className={passwordValidations.length ? "text-green-500" : "text-red-500"}>Must be at least 8 characters long</li>
                                        <li className={passwordValidations.uppercase ? "text-green-500" : "text-red-500"}>Include at least 1 uppercase letter</li>
                                        <li className={passwordValidations.number ? "text-green-500" : "text-red-500"}>Include at least one number</li>
                                        <li className={passwordValidations.special ? "text-green-500" : "text-red-500"}>Include at least 1 special character (@#$%^&*)</li>
                                        <li className={passwordValidations.lowercase ? "text-green-500" : "text-red-500"}>Include at least 1 lowercase letter</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Retype Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${passwordValidations.match ? 'border-green-500' : 'border-red-500'}`}
                                            required
                                        />
                                        <div className="absolute right-3 top-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.8856 8.64983C17.7248 8.42986 13.8934 3.26367 8.99991 3.26367C4.10647 3.26367 0.274852 8.42986 0.114223 8.64962C-0.0380743 8.85831 -0.0380743 9.14135 0.114223 9.35004C0.274852 9.57001 4.10647 14.7362 8.99991 14.7362C13.8934 14.7362 17.7248 9.57001 17.8856 9.34927C18.0381 9.14135 18.0381 8.85831 17.8856 8.64983ZM9.00004 12.4656C7.4244 12.4656 6.19282 11.234 6.19282 9.65851C6.19282 8.08288 7.4244 6.85137 9.00004 6.85137C10.5757 6.85137 11.8073 8.08288 11.8073 9.65851C11.8073 11.234 10.5757 12.4656 9.00004 12.4656ZM9.00004 8.85189C8.65576 8.85189 8.39952 9.10806 8.39952 9.65851C8.39952 10.2093 8.65576 10.4656 9.00004 10.4656C9.34432 10.4656 9.60057 10.2093 9.60057 9.65851C9.60057 9.10806 9.34432 8.85189 9.00004 8.85189Z" fill="#2D2D2D" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul className="mt-2 text-sm">
                                        <li className={passwordValidations.match ? "text-green-500" : "text-red-500"}>Passwords match</li>
                                    </ul>
                                </div>
                                <button className="w-full bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600">Sign Up</button>
                                <div className=" mt-4 mb-4">
                                    To continue signing up You have to agree to our <a href="#" className="text-black underline">Terms of Service</a> and <a href="#" className="text-black underline">Privacy Policy.</a>
                                </div>
                                <div className="flex items-center justify-center mt-4 lines">
                                    <span>
                                        <svg width="268" height="1" viewBox="0 0 268 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.357422" y1="0.5" x2="267.817" y2="0.499975" stroke="#BFBFBF" />
                                        </svg>
                                    </span>
                                    <span className="text-sm text-gray-500">OR</span>
                                    <span>
                                        <svg width="268" height="1" viewBox="0 0 268 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.357422" y1="0.5" x2="267.817" y2="0.499975" stroke="#BFBFBF" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <button
                                        className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        type="button"
                                    >
                                        <div className='googleSearch'>
                                            <div>
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <clipPath id="clip0_2795_60742">
                                                            <rect width="24" height="24" fill="white" transform="translate(0.453125)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div>
                                                Sign in with Google
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="text-center mt-4">
                                    <span className="text-sm text-gray-500">
                                        Don't have an account?{" "}
                                        <a className="text-red-600 hover:text-red-700" href="#" onClick={handleSignUpClick}>
                                            Sign up
                                        </a>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {showTerms && (
                <div className="terms-modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseTerms}>&times;</span>
                        <h2>Terms and Conditions</h2>
                        <p>Your terms and conditions go here...</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
