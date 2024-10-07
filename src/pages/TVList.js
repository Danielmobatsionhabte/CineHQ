import { Hero } from "../components/Hero";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { TvCard } from "../components/TvCard";

export const TVList = ({ apiPath, name }) => {
 
  const { data: tvs } = useFetch(apiPath);
  

  console.log(tvs);

  return (
    <main>
      <section className="max-w-full dark:bg-gradient-to-r from-gray-800 to-blue-950">
        <br />
        <br />
        <Hero name={name} />

        <div className="flex justify-center flex-wrap">
          {tvs.map((tv) => (
            <div key={tv.id}>
              <div>
                <Link
                  to={`/tv/${tv.id}`}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {tv.name}
                  </span>
                </Link>
              </div>
             
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap">
            {tvs.map((tv)=>(
                <TvCard key={tv.id} tv={tv} />
            ))}
        </div>
      </section>
    </main>
  );
};
