import {Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound,Search,TvDetail} from "../pages";
import { TVList } from "../pages/TVList";



export const AllRoutes = () => {
  
  return (
    <main className="dark:bg-gradient-to-r from-gray-800 to-blue-950">
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" name="Now Playing"/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" name="Popular"/>}/>
        <Route path="/movies/topRated" element={<MovieList apiPath="movie/top_rated" name="Top Rated" />}/>
        <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" name="Up Coming Movies"/>}/>
        <Route path="/tvshows" element={<TVList apiPath="discover/tv" name="TV List"/>}/>
        <Route path="/tv/:id" element={<TvDetail name="TV Detail"/>}/>
        <Route path="/search" element={<Search apiPath="search/movie"/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </main>
  )
}

