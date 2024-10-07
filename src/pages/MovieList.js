import React, { useEffect, useState } from "react";

import "flowbite";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { Hero } from "../components/Hero";


export const MovieList = ({apiPath, name}) => {
  const {data:movies }= useFetch(apiPath);
 

  return (
    <>
      <section className="max-w-full dark:bg-gradient-to-r from-gray-800 to-blue-950">
        <br />
        <br />
        <Hero name = {name}/>
     

        <div className="flex justify-center flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};
