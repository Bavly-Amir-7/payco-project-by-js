// this is next.jsx code 


"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import "./login.css"
import Image from 'next/image';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
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
      <div className="bg-gray-100 min-h-screen flex">
        <div className="w-1/2 bg-white flex items-center justify-center relative">
          <Image
            alt="Illustration of security and payment elements"
            className="w-3/4"
            src="/images/computer.png"
            width={500} // specify your desired width here
            height={300} // specify your desired height here
          />

        </div>
        <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center">
          <div className="w-3/4">
            <div className="text-center mb-8">
              <div className="word flex flex-row items-center">

                <Image
                  src="/images/payco.png"
                  width={270} // استبدل الرقم بالعرض الفعلي للصورة
                  height={95} // استبدل الرقم بالارتفاع الفعلي للصورة
                  alt="Description of the image"
                />
              </div>
              <h1 className="text-2xl font-bold text-start mt-5">Welcome Back</h1>
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
                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.91877 0.126953C3.54765 0.127338 3.19184 0.274937 2.92942 0.53736C2.66699 0.799783 2.5194 1.15559 2.51901 1.52672L2.51901 8.53027C1.78404 8.7961 1.14837 9.28112 0.697883 9.9198C0.247395 10.5585 0.00379758 11.32 -1.65026e-07 12.1016C0.206972 17.1327 7.38069 17.1381 7.59004 12.1016C7.58707 11.3682 7.37273 10.6512 6.97271 10.0365C6.57268 9.42185 6.00394 8.93551 5.33459 8.63578L5.83388 7.87593C5.86893 7.82235 5.88468 7.75842 5.87854 7.69468C5.87239 7.63094 5.8447 7.5712 5.80005 7.52531L4.72232 6.41512L5.7951 5.36517C5.84974 5.30992 5.8802 5.23524 5.8798 5.15754C5.87888 5.11902 5.87008 5.08109 5.85395 5.04609C5.83783 5.0111 5.81471 4.97977 5.78603 4.95404L4.72507 4.00006L5.80445 2.83296C5.84533 2.78902 5.87109 2.73316 5.87797 2.67354C5.88485 2.61392 5.87248 2.55367 5.84268 2.50158L4.628 0.370044C4.53343 0.282068 4.42142 0.214962 4.29923 0.173082C4.17705 0.131203 4.04742 0.115487 3.91877 0.126953ZM5.25088 2.60114L4.11787 3.82818C4.09285 3.85564 4.07348 3.88776 4.06088 3.92271C4.04827 3.95765 4.04268 3.99474 4.04442 4.03185C4.04615 4.06896 4.05519 4.10536 4.071 4.13897C4.08681 4.17259 4.1091 4.20276 4.13657 4.22776L5.18625 5.17295L4.12832 6.2086C4.075 6.26059 4.04451 6.33162 4.04353 6.40608C4.04255 6.48053 4.07116 6.55234 4.12309 6.60571L5.23905 7.7563L4.67502 8.61404C4.64301 8.66547 4.62811 8.72572 4.63245 8.78614C4.63679 8.84656 4.66015 8.90406 4.69917 8.95039C4.76617 9.01539 4.85001 9.06034 4.94123 9.08017C8.26199 10.4044 7.37871 15.2745 3.79497 15.3334C3.01647 15.3329 2.26427 15.0516 1.67651 14.5411C1.08874 14.0306 0.704863 13.3252 0.595354 12.5544C0.485845 11.7836 0.658058 10.9992 1.08037 10.3452C1.50268 9.69122 2.14675 9.2115 2.89431 8.99417C2.94776 8.97336 2.99399 8.93744 3.02736 8.89079C3.06073 8.84413 3.07979 8.78877 3.08221 8.73146L3.08221 1.52671C3.08288 1.39388 3.11516 1.26312 3.17638 1.14524C3.23761 1.02736 3.32601 0.925748 3.43428 0.848802C3.54255 0.771856 3.66759 0.721789 3.79904 0.70274C3.9305 0.68369 4.0646 0.696206 4.19026 0.739252L5.25088 2.60114Z" fill="black" />
                      <path d="M2.58984 12.0001C2.59318 12.2778 2.70585 12.5431 2.90343 12.7383C3.101 12.9335 3.36756 13.043 3.64532 13.043C3.92307 13.043 4.18962 12.9335 4.38719 12.7383C4.58476 12.543 4.69743 12.2778 4.70075 12.0001C4.69742 11.7224 4.58475 11.4571 4.38717 11.2619C4.18959 11.0667 3.92303 10.9572 3.64528 10.9572C3.36753 10.9572 3.10097 11.0667 2.9034 11.2619C2.70583 11.4572 2.59317 11.7224 2.58984 12.0001ZM4.13756 12.0001C4.13565 12.1294 4.08295 12.2528 3.99084 12.3435C3.89873 12.4343 3.77461 12.4852 3.6453 12.4852C3.51599 12.4852 3.39187 12.4343 3.29976 12.3435C3.20766 12.2527 3.15496 12.1294 3.15306 12.0001C3.15506 11.8709 3.20781 11.7476 3.29991 11.6569C3.392 11.5662 3.51607 11.5154 3.64532 11.5154C3.77456 11.5154 3.89862 11.5663 3.99072 11.6569C4.08281 11.7476 4.13556 11.8709 4.13756 12.0001Z" fill="black" />
                    </svg>
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
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm text-gray-500">OR</span>
              </div>
              <div>
                <button
                  className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  type="button"
                >

                  <div className='googleSearch'>

                    <div>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2795_60742)">
                          <path d="M5.77203 14.5027L4.93663 17.6213L1.88323 17.6859C0.970719 15.9934 0.453125 14.057 0.453125 11.9992C0.453125 10.0093 0.937063 8.13277 1.79488 6.48047H1.79553L4.51391 6.97884L5.70472 9.68091C5.45548 10.4075 5.31964 11.1875 5.31964 11.9992C5.31973 12.88 5.4793 13.724 5.77203 14.5027Z" fill="#FBBB00" />
                          <path d="M24.2433 9.75781C24.3811 10.4837 24.453 11.2334 24.453 11.9996C24.453 12.8587 24.3627 13.6967 24.1906 14.5051C23.6064 17.2558 22.08 19.6578 19.9655 21.3576L19.9649 21.3569L16.541 21.1822L16.0564 18.1572C17.4594 17.3343 18.5559 16.0466 19.1335 14.5051H12.7168V9.75781H19.2271H24.2433Z" fill="#518EF8" />
                          <path d="M19.9655 21.3577L19.9662 21.3584C17.9097 23.0113 15.2974 24.0004 12.4537 24.0004C7.88379 24.0004 3.91062 21.4461 1.88379 17.6872L5.77259 14.5039C6.78598 17.2085 9.39499 19.1338 12.4537 19.1338C13.7684 19.1338 15.0001 18.7784 16.057 18.158L19.9655 21.3577Z" fill="#28B446" />
                          <path d="M20.1127 2.76262L16.2253 5.94525C15.1314 5.26153 13.8384 4.86656 12.4532 4.86656C9.32525 4.86656 6.66744 6.88017 5.70481 9.68175L1.79558 6.48131H1.79492C3.79208 2.63077 7.81536 0 12.4532 0C15.3648 0 18.0345 1.03716 20.1127 2.76262Z" fill="#F14336" />
                        </g>
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
                  <a className="text-red-600 hover:text-red-700" href="#">
                    Sign up
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;