import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle(`Page not found`);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 dark:text-gray-300 font-bold flex justify-center">
            404, Oops!
          </p>
          <p className="text-7xl text-gray-700 dark:text-gray-300 font-bold flex justify-center">
            Page is not available
          </p>
        </div>
        <div className="flex justify-center mt-16">
          <Link to="/">
            <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center font-bold">
              Back to Mainpage
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
