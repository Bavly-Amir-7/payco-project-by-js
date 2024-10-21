"use client"; // This makes the component a Client Component
import { useState } from 'react';
import Head from 'next/head';
import "./verification.css";
import Image from 'next/image';

const VerificationPage = () => {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [activeLink, setActiveLink] = useState('overview');

    const handleNavigation = (accountType) => {
        setSelectedAccount(accountType);
        console.log(`Selected account type: ${accountType}`); // Logging selected account type
    };

    return (
        <>
            <Head>
                <title>Account Verification</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="flex">
                <aside className={`sidebar`}>
                    <div className="p-6">
                        <div className="word flex flex-row items-center ">
                            <Image
                                src="/images/Group471.svg"
                                alt="Payco logo"
                                width={160}
                                height={100}
                                style={{ width: 'auto', height: 'auto' }} // إذا كان مطلوب
                                priority

                            />
                        </div>
                        <nav className='verfNav'>
                            <ul>
                                <li className="mb-3 ">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'overview' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('overview')}
                                    >
                                        <i className="fas fa-user mr-2"></i>
                                        Overview
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'accounts' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('accounts')}
                                    >
                                        <i className="fas fa-user mr-2"></i>
                                        Accounts
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'letters' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('letters')}
                                    >
                                        <i className="fas fa-file-alt mr-2"></i>
                                        Letters of credit
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'escrow' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('escrow')}
                                    >
                                        <i className="fas fa-briefcase mr-2"></i>
                                        Escrow
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'invoices' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('invoices')}
                                    >
                                        <i className="fas fa-file-invoice mr-2"></i>
                                        Invoices
                                    </a>
                                </li>
                                <li className="mb-4 border-b-2 border-black pb-2">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'wallets' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('wallets')}
                                    >
                                        <i className="fas fa-wallet mr-2"></i>
                                        Wallets
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'contacts' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('contacts')}
                                    >
                                        <i className="fas fa-address-book mr-2"></i>
                                        Contacts
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'settings' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('settings')}
                                    >
                                        <i className="fas fa-cog mr-2"></i>
                                        Settings
                                    </a>
                                </li>
                                <li className="mt-6">
                                    <a
                                        href="#"
                                        className={`flex items-center justify-center custom-button ${activeLink === 'logout' ? 'bg-[#F6D6D6] text-[#C20101]' : 'text-[#515151]'}`}
                                        onClick={() => setActiveLink('logout')}
                                    >
                                        <i className="fas fa-sign-out-alt mr-2"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="mainVerf">
                    <h1 className="text-2xl font-bold mb-6 text-center">Account Verification</h1>
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-between">
                            <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center">1</div>
                            <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">2</div>
                            <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">3</div>
                            <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">4</div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-6">
                        <p className="text-center flex-1">Account Type</p>
                        <p className="text-center flex-1">Personal Details</p>
                        <p className="text-center flex-1">Identity Verification</p>
                        <p className="text-center flex-1">Review and Additional Documents</p>
                    </div>
                    <div className="bg-[rgb(252,252,252)] p-8 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-center">Select Account Type</h2>
                        <div className="account-type bg-[rgb(252,252,252)] p-6 rounded-lg mb-6">
                            <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'personal' ? 'bg-[rgb(230,230,230)]' : ''}`} style={{ marginBottom: '24px' }}>
                                <label className="flex items-center">
                                    <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('personal')} />
                                    <span className="bold ml-2 ">Personal Account</span>
                                </label>
                                {selectedAccount === 'personal' && (
                                    <div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Full Name*</label>
                                            <div className="flex items-center mt-2">
                                                <i className="fas fa-user text-gray-500 mr-2"></i>
                                                <input type="text" className="form-input w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your full name" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Email Address*</label>
                                            <div className="flex items-center mt-2">
                                                <i className="fas fa-envelope text-gray-500 mr-2"></i>
                                                <input type="email" className="form-input w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Email Address*</label>
                                            <div className="flex items-center mt-2">
                                                <i className="fas fa-envelope text-gray-500 mr-2"></i>
                                                <input type="email" className="form-input w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={`bg-[rgb(244,244,244)] p-4 rounded-lg border border-gray-300 ${selectedAccount === 'business' ? 'bg-[rgb(230,230,230)]' : ''}`}>
                                <label className="flex items-center">
                                    <input type="radio" name="accountType" className="form-radio h-5 w-5 text-red-500" onClick={() => handleNavigation('business')} />
                                    <span className="bold ml-2 ">Business Account</span>
                                </label>
                                {selectedAccount === 'business' && (
                                    <div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Business Name*</label>
                                            <div className="flex items-center mt-2">
                                                <i className="fas fa-building text-gray-500 mr-2"></i>
                                                <input type="text" className="form-input w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your business name" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Business Email*</label>
                                            <div className="flex items-center mt-2">
                                                <i className="fas fa-envelope text-gray-500 mr-2"></i>
                                                <input type="email" className="form-input w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your business email" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-gray-700">Business Email*</label>
                                            <div className="flex items-center mt-2">
                                                <i className="fas fa-envelope text-gray-500 mr-2"></i>
                                                <input type="email" className="form-input w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your business email" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                        <div className="flex justify-center">
                            <button className="redBtn  text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600">Save & Next</button>
                        </div>
                </div>
            </div>
        </>
    );
};

export default VerificationPage;
