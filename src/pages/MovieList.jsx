import { Moviecard } from "../components/Moviecard";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

// eslint-disable-next-line react/prop-types
export const MovieList = ({ api, title }) => {
  const { data: movies } = useFetch(api);
  useTitle(`${title}`);

  return (
    <main>
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
