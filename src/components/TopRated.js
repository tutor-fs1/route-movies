import { useEffect, useState } from "react";
import { fetchTopRated } from "../utils/movies/requests";
import { MovieList } from "./MovieList";
import { Loading } from "./common/Loading";
import { Error } from "./common/Error";

export const TopRated = () => {
  const [ movies, setMovies ] = useState([]);
  const [ isLoading, setIsloading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);

  useEffect(() => {
    setMovies([]);
    fetchTopRated()
      .then((response) => {
        setMovies(response.results);
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      })
      .finally(() => {
        setIsloading(false)
      });
  }, []);
  return (
    <div>
      {isLoading && <Loading />}
      {hasError && <Error />}
      {movies.length > 0 && <MovieList movies={movies} /> }
    </div>
  );
}