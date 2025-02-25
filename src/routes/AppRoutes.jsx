import { Routes, Route } from "react-router-dom";
import { MovieList, Moviedetails, Search, PageNotFound } from "../pages";

export const AppRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={<MovieList api="movie/now_playing" title="Home" />}
        />
        <Route
          path="/movie/top"
          element={<MovieList api="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="/movie/upcoming"
          element={<MovieList api="movie/upcoming" title="Upcoming" />}
        />
        <Route
          path="/movie/popular"
          element={<MovieList api="movie/popular" title="Popular" />}
        />
        <Route path="/movie/:id" element={<Moviedetails />} />
        <Route path="/search" element={<Search api="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
