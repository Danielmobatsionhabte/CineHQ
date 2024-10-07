import React from "react";
import { Link } from "react-router-dom";
export const Hero = ({ name }) => {
  return (
    <div className="text-center justify-center dark:bg flex-wrap">
      <h1 className="text-6xl max-sm:text-4xl dark:text-white">
        CineHQ Movies and Tv Shows
      </h1>
      <p className="text-xl mt-2 mb-2 dark:text-white">
      Unlimited movies, TV shows, and more Starts at $6.99. Cancel anytime.
      </p>
      <Link
        to="/explore"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Explore
        </span>
      </Link>
      <Link
        to="/signin"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
     
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Sign in
        </span>
      </Link>
      <div className="ml-5 flex dark:bg flex-wrap">
        <div className="flex flex-col  dark:text-white">
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
        </div>
      </div>
    </div>
  );
};
