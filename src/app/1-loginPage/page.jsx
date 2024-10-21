// this is next.jsx code 

"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import "./login.css"
import Image from 'next/image';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
        <div className="bg-gray-100 min-h-screen flex loginArea ">
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
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {/* add key svg here  */}



                      <span className="pl-1">|</span>
                    </div>
                    <input
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      placeholder="********"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8856 8.64983C17.7248 8.42986 13.8934 3.26367 8.99991 3.26367C4.10647 3.26367 0.274852 8.42986 0.114223 8.64962C-0.0380743 8.85831 -0.0380743 9.14135 0.114223 9.35004C0.274852 9.57001 4.10647 14.7362 8.99991 14.7362C13.8934 14.7362 17.7248 9.56998 17.8856 9.35022C18.0381 9.14156 18.0381 8.85831 17.8856 8.64983ZM8.99991 13.5494C5.39537 13.5494 2.27345 10.1205 1.3493 8.99953C2.27226 7.87759 5.38764 4.45048 8.99991 4.45048C12.6043 4.45048 15.726 7.87878 16.6505 9.00034C15.7276 10.1222 12.6122 13.5494 8.99991 13.5494Z" fill="black" />
                        <path d="M8.99991 5.43945C7.03671 5.43945 5.43945 7.03671 5.43945 8.99991C5.43945 10.9631 7.03671 12.5604 8.99991 12.5604C10.9631 12.5604 12.5604 10.9631 12.5604 8.99991C12.5604 7.03671 10.9631 5.43945 8.99991 5.43945ZM8.99991 11.3735C7.69104 11.3735 6.6263 10.3087 6.6263 8.99991C6.6263 7.69107 7.69107 6.62629 8.99991 6.62629C10.3087 6.62629 11.3735 7.69107 11.3735 8.99991C11.3735 10.3087 10.3088 11.3735 8.99991 11.3735Z" fill="black" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-right mt-1">
                    <a className="text-sm text-gray-500 hover:text-gray-700" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    type="checkbox"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div>
                  <button
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="flex items-center justify-center mt-4 lines">
                  <span><svg width="268" height="1" viewBox="0 0 268 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.357422" y1="0.5" x2="267.817" y2="0.499975" stroke="#BFBFBF" />
                  </svg>
                  </span>
                  <span className="text-sm text-gray-500">OR</span>
                  <span><svg width="268" height="1" viewBox="0 0 268 1" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                          {/* add g here */}
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-2xl">
            <h2 className="text-lg mb-4">
              To continue signing up You have to agree to our <a href="#" className="text-black underline">Terms of Service</a> and <a href="#" className="text-black underline">Privacy Policy.</a>
            </h2>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Our Terms of service & Privacy policy.</h3>
            <div className="h-64 overflow-y-scroll pr-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200">
              <p className="text-sm text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br /><br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              </p>
              <p className="text-sm text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br /><br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-red-600 text-white py-2 px-6 rounded mr-4">Cancel</button>
              <button className="bg-red-600 text-white py-2 px-6 rounded">I Agree</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};




export default Login;