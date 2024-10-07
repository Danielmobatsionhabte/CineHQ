import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import comingSoon from "../assets/images/comingsoon.png";
import { useTitle } from '../hooks/useTitle';

export const TvDetail = () => {
  const {id:tvId}  = useParams();
  const [tv, setTv] = useState({});
  useTitle("TvShow CineHQ Movies");
  async function fetchTv(){
    try{
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();
    const foundTv =  data.results.find((tv) => tv.id === parseInt(tvId));
    setTv(foundTv);
    console.log(tv);
    }catch(error){
      console.error(error);
    }

 
}
useEffect(()=>{
    fetchTv();

  },[tvId])
  

   
  return (
    <section>
      <div className='container'>
        <div className='flex flex-col items-center h-screen'>
        
        <img src={comingSoon} alt="Coming Soon" className='rounded-lg'/>
        <p className='dark:text-white text-4xl text-center items-center'>Tv Shows are Coming Soon</p>
        <p className='dark:text-white my-2 text-center  m-0'>Get ready for fresh episodes, thrilling stories, and unforgettable moments—brought to you by CineHQ. Stay tuned and don’t miss out on the entertainment coming your way!</p>
        <Link
                  to="/"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 my-5"
                >
                  <span className="relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   Return Home
                  </span>
                </Link>
        </div>
      </div>
 </section>
  )
}
