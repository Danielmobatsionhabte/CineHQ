import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import comingSoon from "../assets/images/comingsoon.png";

export const TvDetail = () => {
  const {id:tvId}  = useParams();
  const [tv, setTv] = useState({});

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
      <div className='max-w-lg'>

      </div>
      <div className="max-w-screen-2xl flex flex-wrap">
        
        <img src={comingSoon} alt="Coming Soon" className='max-w-2xl rounded'/>
        <p>{tv===tvId ? tv.name : ""}</p>
      </div>
    </section>
  )
}
