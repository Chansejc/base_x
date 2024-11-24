'use client'

import { useState } from "react";

export default function Nav(){
    const [isOpen, setOpen] = useState(false);
    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    return(
            <nav className="bg-inherit">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            Things
                        </span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-inherit md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" 
                                className="block py-2 px-3 text-white bg-transparent rounded md:p-0" 
                                aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <button id="dropdownDefaultButton" 
                                data-dropdown-toggle="dropdown" 
                                className="block p-0 text-white rounded hover:text-yellow inline-flex items-center" 
                                onClick={handleDropDown}>
                                Options
                                    <svg className="w-2.5 h-2.5 ms-3" 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <div id="dropdown" 
                                className={`absolute z-10 bg-grey-400 p-2 border-2 divide-y divide-gray-100 rounded-lg shadow ${isOpen?'block':"hidden"} items-center `}>
                                    <ul 
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200" 
                                    aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" 
                                            className="block p-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" 
                                            className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0">
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" 
                                            className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0">
                                                Earnings
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" 
                                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" 
                                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};
