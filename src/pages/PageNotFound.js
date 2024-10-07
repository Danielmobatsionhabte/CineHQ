import React, { useEffect } from 'react'
import {formattedDate} from "../functions/formattedDate";
import {Link} from "react-router-dom";
import pageNotFound from "../assets/images/404.png";
export const PageNotFound = () => {
  const now = new Date();
  const today = now.toDateString();
 return (
    <main>
      <section className="flex flex-col justify-center px-2 h-screen">
        <div className="flex flex-col items-center my-2">
          <p className='text-center text-6xl sm:text-8xl text-slate-900 dark:text-white'>404, Oops!</p>
          <h1 className='text-2xl sm:text-4xl text-slate-900 dark:text-white py-4'>Page Not Found</h1>
          <img className='rounded-lg  flex-auto h-60 sm:h-96' src={pageNotFound} alt="Page Not Found Image"/>
          <p className='text-md text-center sm:text-4xl text-slate-900 dark:text-slate-50'>Looks like we can't find the page you're looking for. </p>
          <p className='text-sm text-center sm:text-md py-2 text-slate-900 dark:text-slate-300'>Don't worry, even the best explorers lose their way sometimes.
          Let's help you get back on track</p>
        </div>
        <div className='flex justify-center'>
        <Link
                  to="/"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   Return Home
                  </span>
                </Link>
        </div>

      </section>
    </main>
  )
}

