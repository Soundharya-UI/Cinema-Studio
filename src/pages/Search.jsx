import { Moviecard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { useSearchParams } from "react-router-dom";
// import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(api, queryTerm);
  useTitle(`Search results for '${queryTerm}'`);

  return (
    <main>
      <section>
        <p className="text-2xl font-bold text-gray-700 dark:text-white p-4">
          {movies.length === 0
            ? `No results for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
