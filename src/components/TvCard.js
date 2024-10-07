import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import backup from "../assets/images/backup.jpg";
export const TvCard = ({ key, tv }) => {
  const truncate = (name) => {
    if (name.length > 20) {
      return name.slice(0, 50) + "...";
    }
    return tv.name;
  };
  return (
    <div className="max-w-52 max-sm:max-w-48 h-auto bg-white border border-gray-200 rounded-md  shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <Link to={`/tv/${tv.id}`}>
        <img
          className="rounded-t-lg h-auto"
          src={tv.poster_path? `https://image.tmdb.org/t/p/w200${tv.poster_path}`: backup}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to={`/tv/${tv.id}`} >
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white max-sm:text-sm">
            {tv.original_name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 xs:max-sm: text-sm">
          {truncate(tv.overview)}
        </p>
        <div>
          <Link
            className="ml-auto text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xs px-2 py-2 text-center me-2"
            to={`/tv/${tv.id}`}
          >
            <FontAwesomeIcon icon={faPlay} className="mr-1" />
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
};
