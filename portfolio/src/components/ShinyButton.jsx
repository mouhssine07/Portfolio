import React from 'react';

const ShinyButton = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md group ${className}`}
            {...props}
        >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-[#432371] to-[#F7C9A0] group-hover:translate-x-0 ease">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                {children}
            </span>
            <span className="relative invisible">{children}</span>
        </button>
    );
};

export default ShinyButton;
