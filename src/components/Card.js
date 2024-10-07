import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay } from "@fortawesome/free-solid-svg-icons";
import backup from "../assets/images/backup.jpg";


export const Card = ({ movie}) => {
  const { id, original_title, overview, poster_path, release_date } = movie;
  const image = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : backup;
  const truncate = (overview) => {
    return overview.length > 10 ? overview.slice(0, 50) + "..." : overview;
  };
  const date = new Date(release_date);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options).replace(/\s/g, " ");
  return (
    <>
      <div className="max-w-48  sm:max-w-xs h-auto bg-white border border-gray-200 rounded-md  shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <Link to={`/movie/${id}`}>
          <img className="rounded-t-lg h-auto" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-sm:text-sm">
              {original_title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 xs:max-sm: text-sm">
            {truncate(overview)}
          </p>
          <div>
            <Link
              className="ml-auto text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
              to={`/movie/${id}`}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Watch Now
            </Link>
            <span className="mt-3 py-1 flex text-sm dark:text-white">
              Released on: {formattedDate}
            </span>
          </div>

          <Link
            to="jj.com"
            className="hidden inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    
    </>
  );
};
