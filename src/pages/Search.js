

import { useFetch } from "../hooks/useFetch";
import {Card} from "../components/Card";
import {useSearchParams} from "react-router-dom";

export const Search = ({apiPath, name}) => {
  const searchParams = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data:movies }= useFetch(apiPath,queryTerm);
  return (
    <>
      <section className="py-7">
        <p className="ml-5 text-3xl text-gray-700 dark:text-white">{movies.length ===0 ? `No Result found for ${queryTerm}` : `Result for '${queryTerm}'`}</p>
      </section>
    <section className="max-w-full dark:bg-gradient-to-r from-gray-800 to-blue-950">
      
     
      {/* <Hero name = {name}/> */}
   

      <div className="flex justify-center flex-wrap">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div> 
    </section>
  </>
  )
}
