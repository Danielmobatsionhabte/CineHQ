import { useEffect, useState } from 'react'

export const useFetch = (apiPath, queryTerm="") => {
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchMovies(){
            const response = await fetch(url);
            const json_data = await response.json();
            setData(json_data.results);
        }
        fetchMovies();
    },[url])
  return {data}
}

