
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backup from "../assets/images/backup.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [about, setAbout] = useState(true);
  const [companies, setCompanies] = useState(false);
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      setMovie(json);
      
      console.log(json);
    }
    fetchMovie();
   
  }, [params.id]);
  console.log(params);
  return (
    <main>
      <section className="flex flex-wrap justify-around py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt="Movie" />
        </div>
        <div className="max-w-2xl text-gray-900 dark:text-white md:text-left">
          <h1 className="mr-10 text-lg font-bold text-center my-3 sm:text-4xl sm:text-left">
            {movie.original_title}
          </h1>
          <p className="my-4 text-center sm:text-left">{movie.overview}</p>
          <p className="my-7 gap-2 items-center">
            {movie.genres
              ? movie.genres.map((genre) => (
                  <span
                    className="border border-gray-200 rounded dark:border-gray-600 py-2 px-2 m-1"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))
              : ""}
          </p>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900  hover:no-underline dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>
          <p className="my-4 xs:max-sm: ml-2">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} Min</span>
          </p>
          <p className="my-4 xs:max-sm: ml-2">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p>
          <p className="my-4 xs:max-sm: ml-2">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>
          <p className="my-4 xs:max-sm: ml-2">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>
          <a
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
            className="my-4 xs:max-sm: ml-2"
          >
            <span className="mr-2 font-bold ">IMDB Code: </span>
            <span className="underline">
              
              {movie.imdb_id} (Click to Watch)
            </span>
          </a>
          <br />
          <a
            href={`https://www.imdb.com/title/${movie.imdb_id}`}
            className="m-5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
              />
            </svg>
            <span className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Watch Now
            </span>
          </a>
        </div>

        <div className="">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700">
            <button>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Production Companies
              </h5>
            </button>
            <ul>
              {movie.production_companies
                ? movie.production_companies.map((company) => (
                    <li
                      key={company.id}
                      className="mb-3 font-normal  text-gray-500 dark:text-gray-100"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faCodeBranch} />
                      <span className="ml-1">{company.name}</span>
                    </li>
                  ))
                : ""}
            </ul>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700">
          <ul
            className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li className="me-2">
              <button
              onClick={()=>setAbout(true) || setCompanies(false) }
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="true"
                className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
              >
               Description
              </button>
            </li>
            <li className="me-2">
              <button
              onClick={()=>setCompanies(true) |setAbout(false)}
               id="services-tab"
                data-tabs-target="#services"
                type="button"
                role="tab"
                aria-controls="services"
                aria-selected="false"
                className="inline-block p-4 dark:text-white hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Production Companies
              </button>
            </li>
           
          </ul>
          <div id="defaultTabContent">
            <div
              className={`${about ?"":"hidden"} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`}
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h2>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
              {movie.overview}
              </p>
              <p className="dark:text-white">Released on: {movie.release_date}</p>
            </div>
            <div
              className={`${companies? "":"hidden"} p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800`}
              id="services"
              role="tabpanel"
              aria-labelledby="services-tab"
            >
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Production Companies
              </h2>

             
                { movie.production_companies ?
                  movie.production_companies.map((company)=>(
                    <li className="flex space-x-2 rtl:space-x-reverse items-center my-5">
                      <img src={company.logo_path? `https://image.tmdb.org/t/p/w500${company.logo_path}` : backup} className="w-10" alt="company logo"/>
                    <span className="leading-tight dark:text-white">
                      {company.name}
                    </span>
                  </li>
                  )) : ""
                }
              

              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
