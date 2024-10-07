import React from 'react'
import {Link} from "react-router-dom";
import whiteLogo from "../assets/logo/logoWhite.png";
import Logo from "../assets/logo/logo.svg";
export const Footer = ({darkMode, setDarkMode}) => {
        const date = new Date();
        const year = date.getFullYear();
  return (
<footer className="relative bg-white shadow bottom-0 dark:bg-gray-900 justify-items-end items-end">
    <div className="max-w-full mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={darkMode? whiteLogo : Logo } className="h-8" alt="CineHQ" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CineHQ</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">Top Rated</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">Upcoming</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://github.com/Danielmobatsionhabte/CineHQ" className="hover:underline">CineHQ</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}



